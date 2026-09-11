// Discovers all velobase.com component pages (Pages/ViewComponent.aspx) and writes
// them to a local CSV. Run with: node scripts/crawl-components.js
//
// The listing page (Pages/ListComponents.aspx) paginates via an ASP.NET WebForms
// callback (WebForm_DoCallback('__Page', ...)), not plain query-string paging, so
// we replicate that POST here rather than scraping query-string pages.

const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const cheerio = require('cheerio');

const BASE_URL = 'https://velobase.com';
const LIST_URL = `${BASE_URL}/Pages/ListComponents.aspx`;
const PAGE_SIZE = 50;
const DELAY_MS = 1500;
const MAX_RETRIES = 2;
const FLUSH_EVERY = 10;
const OUTPUT_PATH = path.join(__dirname, '..', 'velobase-components.csv');
// The site resets connections for non-browser-like User-Agent strings, so we
// use a standard browser UA (this is a personal, low-rate, publicly-accessible
// page catalog run — not an attempt to bypass any access control).
const USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function extractComponents(html, components) {
  const $ = cheerio.load(html);
  $('a[href*="ViewComponent.aspx"]').each((_, el) => {
    const href = $(el).attr('href');
    if (!href) return;
    const url = new URL(href, BASE_URL).toString();
    const title = $(el).text().trim();
    if (title && !components.get(url)) {
      components.set(url, title);
    } else if (!components.has(url)) {
      components.set(url, '');
    }
  });
}

function writeCsv(components) {
  const escape = (value) => `"${String(value).replace(/"/g, '""')}"`;
  const rows = [['url', 'title'].map(escape).join(',')];
  for (const [url, title] of components) {
    rows.push([url, title].map(escape).join(','));
  }
  fs.writeFileSync(OUTPUT_PATH, rows.join('\n') + '\n', 'utf8');
}

async function fetchWithRetry(url, options) {
  let lastError;
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      const res = await fetch(url, options);
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      return res;
    } catch (err) {
      lastError = err;
      if (attempt < MAX_RETRIES) {
        await sleep(DELAY_MS * (attempt + 1));
      }
    }
  }
  throw lastError;
}

async function main() {
  const components = new Map();

  console.log(`GET ${LIST_URL}`);
  const initialRes = await fetchWithRetry(LIST_URL, {
    headers: { 'User-Agent': USER_AGENT },
  });
  const initialHtml = await initialRes.text();
  const cookies = (initialRes.headers.raw()['set-cookie'] || [])
    .map((c) => c.split(';')[0])
    .join('; ');

  const $ = cheerio.load(initialHtml);
  const viewState = $('#__VIEWSTATE').attr('value') || '';
  const viewStateGenerator = $('#__VIEWSTATEGENERATOR').attr('value') || '';
  const eventValidation = $('#__EVENTVALIDATION').attr('value') || '';

  const foundMatch = initialHtml.match(/([\d,]+)\s+found/);
  const total = foundMatch ? parseInt(foundMatch[1].replace(/,/g, ''), 10) : 0;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  console.log(`${total} components reported, ${totalPages} pages to crawl`);

  extractComponents(initialHtml, components);
  console.log(`Page 1/${totalPages} — ${components.size} components so far`);

  let listOffset = '0';

  for (let pgIndex = 1; pgIndex < totalPages; pgIndex++) {
    await sleep(DELAY_MS);

    const pgData = JSON.stringify({
      SearchID: '00000000-0000-0000-0000-000000000000',
      PgIndex: pgIndex,
      ListOffset: listOffset,
      VMode: 'List',
      GroupBy: 'Category',
    });
    const callbackParam = JSON.stringify({
      Id: null,
      Context: 'GetPage',
      ContextValue: pgData,
      ContextValue2: null,
      ContextValue3: null,
      ContextValue4: null,
      ContextValue5: null,
      ContextValue6: null,
      Content: null,
      ItemList: null,
    });

    const body = new URLSearchParams({
      __EVENTTARGET: '',
      __EVENTARGUMENT: '',
      __VIEWSTATE: viewState,
      __VIEWSTATEGENERATOR: viewStateGenerator,
      __EVENTVALIDATION: eventValidation,
      __CALLBACKID: '__Page',
      __CALLBACKPARAM: callbackParam,
      __CALLBACKINDEX: '0',
    });

    try {
      const res = await fetchWithRetry(LIST_URL, {
        method: 'POST',
        headers: {
          'User-Agent': USER_AGENT,
          'Content-Type': 'application/x-www-form-urlencoded',
          Cookie: cookies,
        },
        body,
      });
      const raw = await res.text();
      const jsonStart = raw.indexOf('|') + 1;
      const payload = JSON.parse(raw.slice(jsonStart));
      const content = payload.Content || '';

      const offsetMatch = content.match(/ListOffset="(\d+)"/);
      if (offsetMatch) listOffset = offsetMatch[1];

      extractComponents(content, components);
      console.log(`Page ${pgIndex + 1}/${totalPages} — ${components.size} components so far`);
    } catch (err) {
      console.warn(`Failed to fetch page ${pgIndex + 1}/${totalPages}: ${err.message}`);
    }

    if ((pgIndex + 1) % FLUSH_EVERY === 0) {
      writeCsv(components);
    }
  }

  writeCsv(components);
  console.log(`Done. Wrote ${components.size} components to ${OUTPUT_PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
