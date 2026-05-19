const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // 1. Home Page
  await page.goto('https://danger-kiss-cover.web.app/', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'public/images/showcases/danger-home.png' });

  // 2. Discover Page (or another tab)
  try {
      const tabs = await page.$$('.nav-link, a'); // Just guessing selector
      for (const tab of tabs) {
          const text = await page.evaluate(el => el.textContent, tab);
          if (text && text.toLowerCase().includes('sobre') || text.toLowerCase().includes('contato')) {
              await tab.click();
              await page.waitForTimeout(2000);
              await page.screenshot({ path: `public/images/showcases/danger-${text.trim()}.png` });
              break;
          }
      }
  } catch(e) {}

  // Full page screenshot
  await page.goto('https://danger-kiss-cover.web.app/', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'public/images/showcases/danger-full.png', fullPage: true });

  await browser.close();
})();
