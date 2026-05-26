import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // 1. Home Page
  await page.goto('https://rodrigosoaresadvogado.com.br/', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'public/images/showcases/rodrigo-home.png' });

  // Full page screenshot
  await page.screenshot({ path: 'public/images/showcases/rodrigo-full.png', fullPage: true });

  await browser.close();
})();
