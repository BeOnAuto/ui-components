import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const OUT = process.env.OUT_DIR ?? resolve(process.cwd(), 'screenshots');
mkdirSync(OUT, { recursive: true });

const stories = [
  { id: 'layout-stack-grid--vertical-stack', name: 'layout-vertical-stack' },
  { id: 'layout-stack-grid--horizontal-stack-wraps', name: 'layout-horizontal-wrap' },
  { id: 'layout-stack-grid--responsive-grid', name: 'layout-responsive-grid' },
  { id: 'inputs-buttons-form--button-variants', name: 'inputs-buttons' },
  { id: 'inputs-buttons-form--text-inputs', name: 'inputs-text' },
  { id: 'inputs-buttons-form--choice-inputs', name: 'inputs-choice' },
  { id: 'feedback-alerts-banners--alerts', name: 'feedback-alerts' },
  { id: 'feedback-alerts-banners--callouts', name: 'feedback-callouts' },
  { id: 'feedback-alerts-banners--empty-and-loading', name: 'feedback-empty' },
  { id: 'data-tables-kpis--kpi-row', name: 'data-kpis' },
  { id: 'data-tables-kpis--data-table', name: 'data-table' },
  { id: 'data-tables-kpis--charts', name: 'data-charts' },
  { id: 'compositions-dashboard--full-dashboard', name: 'composition-dashboard' },
];

const viewports = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1280, height: 800 },
];

const browser = await chromium.launch();
const context = await browser.newContext({ deviceScaleFactor: 1 });
const page = await context.newPage();
page.on('pageerror', (err) => console.error('PAGEERROR', err.message));
page.on('console', (msg) => {
  if (msg.type() === 'error') console.error('CONSOLE', msg.text());
});

for (const story of stories) {
  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    const url = `http://localhost:6006/iframe.html?id=${story.id}&viewMode=story`;
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(300);
    const file = `${OUT}/${story.name}__${vp.name}.png`;
    await page.screenshot({ path: file, fullPage: true });
    console.log('saved', file);
  }
}

await browser.close();
