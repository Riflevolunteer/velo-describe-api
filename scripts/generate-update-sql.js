// Reads velobase-component-details.jsonl (produced by crawl-component-details.js)
// and generates velobase-update.sql: idempotent INSERT statements (each guarded
// by WHERE NOT EXISTS) that create any missing brands/groups/categories, link
// brands to categories, and then insert new components, skipping ones that
// already exist by source_id (the velobase GUID).
//
// Components are NOT deduped on title+brand: the same name legitimately recurs
// across categories (an "Ofmega Vantage" exists as a brakeset, crankset, hub,
// pedal...) and as variants within a category. Keying on title+brand silently
// dropped ~630 components. Fields are written in full — the schema columns are
// wide enough (see scripts/component_detail.sql), so nothing is truncated.
//
// Run with: node scripts/generate-update-sql.js
// No network access — safe to re-run any time, including mid-crawl.

const fs = require('fs');
const path = require('path');

const INPUT_JSONL = path.join(__dirname, '..', 'velobase-component-details.jsonl');
const OUTPUT_SQL = path.join(__dirname, '..', 'velobase-update.sql');

// component_group is scoped by brand — two brands can independently name a
// groupset the same thing (e.g. Campagnolo "Gran Sport" vs. Zeus "Gran Sport"),
// and without brand scoping they'd wrongly collapse into one group. These
// titles are the exception: the same manufacturer under a different name / OEM
// relationship, so they're intentionally shared (brand_id NULL) — add here only
// after manually confirming the relationship.
const SHARED_GROUP_TITLES = new Set(['Jubilee', 'Rival 7000']);

function readRecords() {
  if (!fs.existsSync(INPUT_JSONL)) {
    throw new Error(`${INPUT_JSONL} not found — run scripts/crawl-component-details.js first`);
  }
  return fs
    .readFileSync(INPUT_JSONL, 'utf8')
    .split('\n')
    .filter(Boolean)
    .map((line) => JSON.parse(line));
}

function sqlEscape(value) {
  return String(value).replace(/'/g, "''");
}

function sqlString(value) {
  return value == null || value === '' ? 'NULL' : `'${sqlEscape(value)}'`;
}

function lookupInsert(table, title) {
  const esc = sqlEscape(title);
  return (
    `INSERT INTO ${table} (title) SELECT '${esc}' FROM DUAL ` +
    `WHERE NOT EXISTS (SELECT 1 FROM ${table} WHERE title = '${esc}');`
  );
}

function lookupSubquery(table, idColumn, title) {
  if (!title) return 'NULL';
  return `(SELECT ${idColumn} FROM ${table} WHERE title = '${sqlEscape(title)}')`;
}

// Groups are scoped by (title, brand) except for SHARED_GROUP_TITLES, which are
// matched/created with brand_id IS NULL regardless of brand.
function groupLookupInsert(title, brand) {
  const esc = sqlEscape(title);
  if (SHARED_GROUP_TITLES.has(title)) {
    return (
      `INSERT INTO component_group (title, brand_id) SELECT '${esc}', NULL FROM DUAL ` +
      `WHERE NOT EXISTS (SELECT 1 FROM component_group WHERE title = '${esc}' AND brand_id IS NULL);`
    );
  }
  const brandIdSelect = lookupSubquery('component_brand', 'brand_id', brand);
  return (
    `INSERT INTO component_group (title, brand_id) SELECT '${esc}', ${brandIdSelect} FROM DUAL ` +
    `WHERE NOT EXISTS (SELECT 1 FROM component_group WHERE title = '${esc}' AND brand_id = ${brandIdSelect});`
  );
}

function groupLookupSubquery(title, brand) {
  if (!title) return 'NULL';
  const esc = sqlEscape(title);
  if (SHARED_GROUP_TITLES.has(title)) {
    return `(SELECT group_id FROM component_group WHERE title = '${esc}' AND brand_id IS NULL)`;
  }
  const brandIdSelect = lookupSubquery('component_brand', 'brand_id', brand);
  return `(SELECT group_id FROM component_group WHERE title = '${esc}' AND brand_id = ${brandIdSelect})`;
}

function buildDescription(record) {
  const parts = [record.name, record.country, record.weight].filter(Boolean);
  return parts.join(', ');
}

function stripParenthetical(value) {
  if (!value) return value;
  return value.replace(/\s*\([^)]*\)/g, '').replace(/\s+/g, ' ').trim();
}

function buildSearchText(record) {
  const brand =
    record.brand && !record.name?.toLowerCase().includes(record.brand.toLowerCase())
      ? record.brand
      : null;
  const parts = [record.name, brand, record.category].filter(Boolean).map(stripParenthetical);
  return parts.join(' ');
}

// Idempotency guard for a component insert. Prefer the velobase GUID; fall
// back to name+brand+category only for records that somehow lack one.
function componentExistsClause(record, title, brandIdSelect, categoryIdSelect) {
  if (record.id) {
    return `SELECT 1 FROM component_detail WHERE source_id = ${sqlString(record.id)}`;
  }
  return (
    `SELECT 1 FROM component_detail WHERE title = ${title} AND brand_id = ${brandIdSelect} ` +
    `AND category_id = ${categoryIdSelect} AND source_id IS NULL`
  );
}

function main() {
  const records = readRecords();

  const brands = new Set();
  const groupBrandPairs = new Set();
  const categories = new Set();
  const categoryBrandPairs = new Set();
  for (const r of records) {
    if (r.brand) brands.add(r.brand);
    if (r.group) {
      // Shared groups aren't scoped by brand, so collapse them to a single
      // (group, null) pair regardless of which brand's record produced them.
      const brand = SHARED_GROUP_TITLES.has(r.group) ? null : r.brand;
      if (brand || SHARED_GROUP_TITLES.has(r.group)) groupBrandPairs.add(JSON.stringify([r.group, brand]));
    }
    if (r.category) categories.add(r.category);
    if (r.brand && r.category) categoryBrandPairs.add(JSON.stringify([r.category, r.brand]));
  }

  const lines = [];
  lines.push('-- Generated by scripts/generate-update-sql.js — safe to re-run, all statements are idempotent.');
  lines.push('');

  lines.push('-- Brands');
  for (const brand of brands) lines.push(lookupInsert('component_brand', brand));
  lines.push('');

  lines.push('-- Groups');
  for (const pair of groupBrandPairs) {
    const [group, brand] = JSON.parse(pair);
    lines.push(groupLookupInsert(group, brand));
  }
  lines.push('');

  lines.push('-- Categories');
  for (const category of categories) lines.push(lookupInsert('component_category', category));
  lines.push('');

  lines.push('-- Category/brand links');
  for (const pair of categoryBrandPairs) {
    const [category, brand] = JSON.parse(pair);
    const categoryIdSelect = lookupSubquery('component_category', 'category_id', category);
    const brandIdSelect = lookupSubquery('component_brand', 'brand_id', brand);
    lines.push(
      `INSERT INTO category_brand (category_id, brand_id)\n` +
        `  SELECT ${categoryIdSelect}, ${brandIdSelect}\n` +
        `  FROM DUAL\n` +
        `  WHERE NOT EXISTS (\n` +
        `    SELECT 1 FROM category_brand WHERE category_id = ${categoryIdSelect} AND brand_id = ${brandIdSelect}\n` +
        `  );`
    );
  }
  lines.push('');

  lines.push('-- Components');
  let componentCount = 0;
  let missingSourceId = 0;
  const seenSourceIds = new Set();
  for (const r of records) {
    if (!r.name) continue;
    // The crawler is resumable and appends, so guard against the same page
    // having been scraped twice into the JSONL.
    if (r.id) {
      if (seenSourceIds.has(r.id)) continue;
      seenSourceIds.add(r.id);
    } else {
      missingSourceId++;
    }
    const title = sqlString(r.name);
    const description = sqlString(buildDescription(r));
    const yearFrom = sqlString(r.yearFrom);
    const yearTo = sqlString(r.yearTo);
    const searchText = sqlString(buildSearchText(r));
    const sourceId = sqlString(r.id);
    const brandIdSelect = lookupSubquery('component_brand', 'brand_id', r.brand);
    const categoryIdSelect = lookupSubquery('component_category', 'category_id', r.category);
    const groupIdSelect = groupLookupSubquery(r.group, r.brand);

    lines.push(
      `INSERT INTO component_detail (brand_id, title, description, year_from, year_to, category_id, group_id, search_text, source_id)\n` +
        `  SELECT ${brandIdSelect}, ${title}, ${description}, ${yearFrom}, ${yearTo}, ${categoryIdSelect}, ${groupIdSelect}, ${searchText}, ${sourceId}\n` +
        `  FROM DUAL\n` +
        `  WHERE NOT EXISTS (\n` +
        `    ${componentExistsClause(r, title, brandIdSelect, categoryIdSelect)}\n` +
        `  );`
    );
    componentCount++;
  }

  fs.writeFileSync(OUTPUT_SQL, lines.join('\n') + '\n', 'utf8');
  console.log(
    `Wrote ${OUTPUT_SQL}: ${brands.size} brands, ${groupBrandPairs.size} groups, ${categories.size} categories, ` +
      `${categoryBrandPairs.size} category/brand links, ${componentCount} components` +
      (missingSourceId ? ` (${missingSourceId} without a source_id, deduped on title+brand+category)` : '')
  );
}

main();
