import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const OUT = process.env.OUT_DIR ?? resolve(process.cwd(), 'screenshots');
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();

const viewports = [
  { name: '320', width: 320, height: 568 },
  { name: '375', width: 375, height: 812 },
  { name: '768', width: 768, height: 1024 },
];

for (const vp of viewports) {
  await page.setViewportSize({ width: vp.width, height: vp.height });
  await page.goto(`http://localhost:6006/iframe.html?id=calendar--single&viewMode=story`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${OUT}/calendar-${vp.name}.png`, fullPage: true });
  console.log('saved', `calendar-${vp.name}.png`);
}

await browser.close();
