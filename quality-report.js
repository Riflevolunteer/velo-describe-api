// Pure integrity checks over the fixed table snapshot read by scripts/quality-report.js.
// Errors identify structural defects. Review findings need source/identity evidence;
// neither date flags nor missing metadata authorize changing a component or link.
const { LABEL_TO_CATEGORY } = require('./spec-categories')

const TABLES = {
  component_detail: ['component_id', 'title', 'brand_id', 'category_id', 'group_id', 'source_ref', 'year_from', 'year_to', 'description'],
  component_brand: ['brand_id', 'title'],
  component_category: ['category_id', 'title'],
  component_group: ['group_id', 'title', 'brand_id'],
  bike: ['bike_id', 'title', 'brand_id', 'source_ref', 'year_from', 'year_to'],
  bike_brand: ['brand_id', 'title'],
  bike_spec: ['bike_spec_id', 'bike_id', 'label_id', 'value_text', 'component_id', 'source_ref'],
  bike_spec_label: ['label_id', 'title'],
  data_source: ['source_id', 'label', 'source_type'],
  category_brand: ['category_id', 'brand_id'],
}

const missing = value => value == null || String(value).trim() === ''
const year = value => !missing(value) && /^[1-9]\d{3}$/.test(String(value).trim()) ? Number(value) : null
const normalized = value => String(value || '').trim().toLowerCase()

function buildQualityReport(snapshot) {
  // Missing tables must fail rather than silently presenting a clean report.
  for (const table of Object.keys(TABLES)) {
    if (!Array.isArray(snapshot[table])) throw new Error(`Missing snapshot table: ${table}`)
  }
  const index = table => new Map(snapshot[table].map(row => [String(row[TABLES[table][0]]), row]))
  const indexes = Object.fromEntries(Object.keys(TABLES).filter(t => t !== 'category_brand').map(t => [t, index(t)]))
  const get = (table, id) => indexes[table].get(String(id))
  const findings = []
  function add(severity, check, table, row, reason, details = {}) {
    const id = table === 'category_brand' ? [row.category_id, row.brand_id] : row[TABLES[table][0]]
    findings.push({ severity, check, table, id, title: row.title || row.value_text || row.label || null, reason, details })
  }

  function reference(table, field, target, required = false) {
    for (const row of snapshot[table]) {
      if (missing(row[field])) {
        if (required) add('error', 'missing_required_reference', table, row, `${field} is missing`, { field, target })
      } else if (!get(target, row[field])) {
        add('error', 'dangling_reference', table, row, `${field} points to a missing ${target} row`, { field, value: row[field], target })
      }
    }
  }
  reference('component_detail', 'brand_id', 'component_brand', true)
  reference('component_detail', 'category_id', 'component_category', true)
  reference('component_detail', 'group_id', 'component_group')
  reference('component_group', 'brand_id', 'component_brand') // NULL means a shared group.
  reference('bike', 'brand_id', 'bike_brand', true)
  reference('bike_spec', 'bike_id', 'bike', true)
  reference('bike_spec', 'label_id', 'bike_spec_label', true)
  reference('bike_spec', 'component_id', 'component_detail') // NULL is a valid unlinked spec.
  reference('category_brand', 'brand_id', 'component_brand', true)
  reference('category_brand', 'category_id', 'component_category', true)
  for (const table of ['component_detail', 'bike', 'bike_spec']) {
    reference(table, 'source_ref', 'data_source')
    for (const row of snapshot[table]) {
      if (missing(row.source_ref)) add('review', 'missing_provenance', table, row, 'No data_source reference')
    }
  }

  for (const row of snapshot.component_detail) {
    const group = get('component_group', row.group_id)
    if (group && !missing(group.brand_id) && get('component_brand', group.brand_id) &&
        get('component_brand', row.brand_id) && String(row.brand_id) !== String(group.brand_id)) {
      add('error', 'group_brand_conflict', 'component_detail', row, 'Component brand differs from its group owner', {
        brand_id: row.brand_id, group_id: row.group_id, group_brand_id: group.brand_id,
      })
    }
    if (row.description != null && Array.from(row.description).length === 255) {
      add('review', 'description_at_limit', 'component_detail', row, 'Description reaches 255 characters; inspect for truncation')
    }
  }

  for (const table of ['component_detail', 'bike']) {
    for (const row of snapshot[table]) {
      const details = { year_from: row.year_from, year_to: row.year_to }
      // Bike catalogues normally store a single model year in year_from with a
      // NULL year_to. Components have independently evidenced date bounds.
      if (table === 'bike' ? missing(row.year_from) && missing(row.year_to) : missing(row.year_from) || missing(row.year_to)) {
        add('review', 'incomplete_dates', table, row, 'One or both date bounds are missing', details)
      }
      if (['year_from', 'year_to'].some(field => !missing(row[field]) && year(row[field]) === null)) {
        add('review', 'unparsed_dates', table, row, 'A date is not a plain four-digit year; inspect its meaning', details)
      }
      const from = year(row.year_from)
      const to = year(row.year_to)
      if (from !== null && to !== null && from > to) {
        add('error', 'reversed_dates', table, row, 'year_from is later than year_to', details)
      }
    }
  }

  const duplicates = new Map()
  for (const row of snapshot.bike_spec) {
    if (!missing(row.bike_id) && !missing(row.label_id)) {
      // Exact stored text; different values under the same label may be deliberate.
      const key = JSON.stringify([String(row.bike_id), String(row.label_id), row.value_text])
      if (!duplicates.has(key)) duplicates.set(key, [])
      duplicates.get(key).push(row)
    }
    const component = get('component_detail', row.component_id)
    if (!component) continue
    const label = get('bike_spec_label', row.label_id)
    const category = get('component_category', component.category_id)
    const labelName = normalized(label && label.title)
    const allowed = Object.prototype.hasOwnProperty.call(LABEL_TO_CATEGORY, labelName) ? LABEL_TO_CATEGORY[labelName] : null
    // The generator can reuse an integrated shifter for Brake Levers, including
    // reviewed overrides. Do not misreport this intentional cross-category link.
    const integrated = ['brake lever', 'brake levers'].includes(labelName) && normalized(category && category.title) === 'shifting brake levers'
    if (category && allowed && !allowed.some(name => normalized(name) === normalized(category.title)) && !integrated) {
      // Period tables use "Freewheel" for fixed sprockets and cassette clusters
      // too. This vocabulary mismatch cannot establish an incorrect bike link.
      const broadFreewheelLabel = ['freewheel', 'freewheels'].includes(labelName) && ['cassettes', 'single sprockets'].includes(normalized(category.title))
      add(broadFreewheelLabel ? 'review' : 'error', broadFreewheelLabel ? 'broad_freewheel_label' : 'linked_category_conflict', 'bike_spec', row,
        broadFreewheelLabel ? 'Freewheel label links to a cassette or fixed sprocket; verify catalogue terminology before changing the label or link' : 'Linked component category does not match the spec label', {
        label: label.title, component_id: component.component_id, actual_category: category.title, expected_categories: allowed,
      })
    } else if (label && !allowed) {
      add('review', 'unmapped_linked_label', 'bike_spec', row, 'Linked label has no category rule; check the link or add a rule', {
        label: label.title, component_id: component.component_id,
      })
    }
    const bike = get('bike', row.bike_id)
    if (!bike) continue
    const bf = year(bike.year_from), bt = year(bike.year_to)
    const cf = year(component.year_from), ct = year(component.year_to)
    // Skip reversed ranges: they already have an error. A missing component
    // bound stays unknown, rather than being inferred from the other bound.
    if ((bf !== null && bt !== null && bf > bt) || (cf !== null && ct !== null && cf > ct)) continue
    if ((cf !== null && (bf ?? bt) !== null && (bf ?? bt) < cf) ||
        (ct !== null && (bt ?? bf) !== null && (bt ?? bf) > ct)) {
      add('review', 'linked_date_conflict', 'bike_spec', row, 'Known bike year falls outside a recorded component date bound; verify identity and evidence', {
        bike_id: bike.bike_id, bike_title: bike.title, bike_year_from: bike.year_from, bike_year_to: bike.year_to,
        component_id: component.component_id, component_title: component.title,
        component_year_from: component.year_from, component_year_to: component.year_to,
      })
    }
  }
  for (const rows of duplicates.values()) {
    if (rows.length > 1) add('error', 'duplicate_bike_spec', 'bike_spec', rows[0], 'Same bike, label and exact stored value occur more than once', {
      bike_id: rows[0].bike_id, label_id: rows[0].label_id,
      bike_spec_ids: rows.map(r => r.bike_spec_id).sort((a, b) => a - b),
      component_ids: rows.map(r => r.component_id), source_refs: rows.map(r => r.source_ref),
    })
  }

  const summary = { error: 0, review: 0, checks: {} }
  findings.sort((a, b) => a.severity.localeCompare(b.severity) || a.check.localeCompare(b.check) || a.table.localeCompare(b.table) || String(a.id).localeCompare(String(b.id), 'en', { numeric: true }))
  for (const finding of findings) {
    summary[finding.severity]++
    summary.checks[finding.check] = (summary.checks[finding.check] || 0) + 1
  }
  return { scope: 'whole database', tables: Object.fromEntries(Object.keys(TABLES).map(t => [t, snapshot[t].length])), summary, findings }
}

module.exports = { TABLES, buildQualityReport }
