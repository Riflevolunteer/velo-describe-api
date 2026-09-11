// Visits every component detail page listed in velobase-components.csv and
// appends structured data to velobase-component-details.jsonl. Safe to stop
// (Ctrl+C) and re-run — already-scraped URLs are skipped on restart.
//
// Run with: node scripts/crawl-component-details.js

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const fetch = require('node-fetch');
const cheerio = require('cheerio');

const DELAY_MS = 1500;
const MAX_RETRIES = 2;
const INPUT_CSV = path.join(__dirname, '..', 'velobase-components.csv');
const OUTPUT_JSONL = path.join(__dirname, '..', 'velobase-component-details.jsonl');
const FAILED_LOG = path.join(__dirname, '..', 'velobase-component-details.failed.log');

// Same UA as crawl-components.js: the site resets connections for
// non-browser-like User-Agent strings.
const USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function parseCsvLine(line) {
  // Values are always double-quoted with "" escaping (written by crawl-components.js).
  const values = [];
  let i = 0;
  while (i < line.length) {
    if (line[i] !== '"') break;
    i++;
    let value = '';
    while (i < line.length) {
      if (line[i] === '"' && line[i + 1] === '"') {
        value += '"';
        i += 2;
      } else if (line[i] === '"') {
        i++;
        break;
      } else {
        value += line[i];
        i++;
      }
    }
    values.push(value);
    if (line[i] === ',') i++;
  }
  return values;
}

function readInputRows() {
  const lines = fs.readFileSync(INPUT_CSV, 'utf8').split('\n').filter(Boolean);
  const rows = lines.slice(1).map(parseCsvLine).map(([url, title]) => ({ url, title }));
  return rows;
}

function readAlreadyScraped() {
  const done = new Set();
  if (!fs.existsSync(OUTPUT_JSONL)) return done;
  const content = fs.readFileSync(OUTPUT_JSONL, 'utf8');
  for (const line of content.split('\n')) {
    if (!line.trim()) continue;
    try {
      done.add(JSON.parse(line).url);
    } catch {
      // ignore a partially-written trailing line
    }
  }
  return done;
}

function parseYears(text) {
  if (!text) return { years: text, yearFrom: null, yearTo: null };
  const trimmed = text.trim();
  if (!trimmed || /^n\/a$/i.test(trimmed)) {
    return { years: trimmed, yearFrom: null, yearTo: null };
  }
  // Free text like "Early 1950's - Late 1950's" or "Late 1940's - ?" isn't
  // reliably parseable as an exact range, so take the min/max of every
  // 4-digit year mentioned as a best-effort year_from/year_to.
  const found = trimmed.match(/\d{4}/g);
  if (!found) return { years: trimmed, yearFrom: null, yearTo: null };
  const yearFrom = String(Math.min(...found.map(Number)));
  const yearTo = String(Math.max(...found.map(Number)));
  return { years: trimmed, yearFrom, yearTo };
}

function extractGeneralInfo(html) {
  const $ = cheerio.load(html);
  const fields = {};
  $('td.caption2').each((_, el) => {
    const label = $(el).text().replace(/[: ]+$/, '').trim();
    const value = $(el).next('td').text().trim();
    if (label) fields[label] = value;
  });
  return fields;
}

async function fetchWithRetry(url, options) {
  let lastError;
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      const res = await fetch(url, options);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res;
    } catch (err) {
      lastError = err;
      if (attempt < MAX_RETRIES) await sleep(DELAY_MS * (attempt + 1));
    }
  }
  throw lastError;
}

function parseUrlParams(url) {
  const parsed = new URL(url);
  return { id: parsed.searchParams.get('ID'), enum: parsed.searchParams.get('Enum') };
}

async function main() {
  const rows = readInputRows();
  const alreadyDone = readAlreadyScraped();
  const remaining = rows.filter((row) => !alreadyDone.has(row.url));

  console.log(
    `${rows.length} total components, ${alreadyDone.size} already scraped, ${remaining.length} remaining`
  );

  let processed = 0;
  let failed = 0;

  for (const row of remaining) {
    if (processed > 0) await sleep(DELAY_MS);
    processed++;

    try {
      const res = await fetchWithRetry(row.url, { headers: { 'User-Agent': USER_AGENT } });
      const html = await res.text();
      const fields = extractGeneralInfo(html);
      const { years, yearFrom, yearTo } = parseYears(fields['Years']);
      const { id, enum: enumId } = parseUrlParams(row.url);

      const record = {
        url: row.url,
        id,
        enum: enumId,
        category: fields['Category'] || null,
        name: fields['Name'] || row.title,
        brand: fields['Brand'] || null,
        group: fields['Primary Group'] || null,
        model: fields['Model'] || null,
        years,
        yearFrom,
        yearTo,
        country: fields['Country'] || null,
        weight: fields['Weight'] || null,
        scrapedAt: new Date().toISOString(),
      };

      fs.appendFileSync(OUTPUT_JSONL, JSON.stringify(record) + '\n', 'utf8');
    } catch (err) {
      failed++;
      fs.appendFileSync(FAILED_LOG, `${row.url}\t${err.message}\n`, 'utf8');
      console.warn(`Failed: ${row.url} (${err.message})`);
    }

    if (processed % 25 === 0 || processed === remaining.length) {
      console.log(
        `${processed}/${remaining.length} processed this run — ${failed} failed — ` +
          `${alreadyDone.size + processed - failed}/${rows.length} total scraped`
      );
    }
  }

  console.log(`Done. Processed ${processed} pages this run (${failed} failed, see ${FAILED_LOG}).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
