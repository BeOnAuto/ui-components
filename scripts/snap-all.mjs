import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const OUT = process.env.OUT_DIR ?? resolve(process.cwd(), 'screenshots');
mkdirSync(OUT, { recursive: true });

const indexRes = await fetch('http://localhost:6006/index.json');
const index = await indexRes.json();
const stories = Object.values(index.entries).filter((e) => e.type === 'story');

const byComponent = new Map();
for (const s of stories) {
  if (!byComponent.has(s.title)) byComponent.set(s.title, s);
}
const firstStoryPerComponent = Array.from(byComponent.values());

const viewports = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1280, height: 800 },
];

const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();
const errors = [];
page.on('pageerror', (err) => errors.push(`PAGEERROR ${err.message}`));

let count = 0;
for (const story of firstStoryPerComponent) {
  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto(`http://localhost:6006/iframe.html?id=${story.id}&viewMode=story`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(250);
    const safeTitle = story.title.replace(/[^a-z0-9]+/gi, '-');
    await page.screenshot({ path: `${OUT}/${safeTitle}__${vp.name}.png`, fullPage: true });
    count++;
  }
}

console.log(`saved ${count} screenshots across ${firstStoryPerComponent.length} components`);
if (errors.length) console.error('errors:', errors);

await browser.close();
