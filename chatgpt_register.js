import puppeteer from 'puppeteer';
import { v4 as uuidv4 } from 'uuid';

async function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const browser = await puppeteer.launch({
    headless: false, 
    args: [
      '--no-sandbox', 
      '--disable-setuid-sandbox',
      '--disable-web-security',
      '--disable-features=IsolateOrigins,site-per-process', 
      '--disable-blink-features=AutomationControlled'
    ]
  });
  const pages = await browser.pages();
  const page = pages[0];

async function registerChatGPT() {
        await page.goto('https://chatgpt.com/',  { waitUntil: 'domcontentloaded' });
        await page.waitForSelector('[data-testid="signup-button"]');
        await wait(5000);
        await page.click('[data-testid="signup-button"]');
        await page.waitForSelector('#email-input');
        await page.type('#email-input', 'nodayil497@avulos.com');
        await page.waitForSelector('.continue-btn');
        await page.click('.continue-btn');
        await page.waitForSelector('#password');
        const password = uuidv4();
        await page.type('#password', password.toString());
}

registerChatGPT();
