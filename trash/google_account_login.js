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
        await page.goto('https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button%26gar%3DWzEzMywiMjM2NzM2Il0%26sl%3Dtrue&ifkv=AXH0vVsNNJ7w8l45vi-sBev2wrHS7NRcrjyy3PYzYuK-G63dWbnOtBRMfzakV__y0aUig2RtQT9INg&service=accountsettings&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1207885554%3A1743337628398766',  { waitUntil: 'domcontentloaded' });
        await page.waitForSelector('#identifierId');
        await page.type('#identifierId', 'drevovdanil@gmail.com');
        await wait(500);
        await page.waitForSelector('[jsname="LgbsSe"]');
        await page.click('[jsname="LgbsSe"]');
}

registerChatGPT();
