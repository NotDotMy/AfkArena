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
        await page.goto('https://www.google.com/intl/ru/account/about/',  { waitUntil: 'domcontentloaded' });
        await page.waitForSelector('[title="Создать аккаунт"]');
        await page.click('[title="Создать аккаунт"]');
        await wait(5000);
        await page.waitForSelector('#firstName');
        const name = "asdasddasasdasdasd";
        await page.type('#firstName', name);
        await page.waitForSelector('[jsname="LgbsSe"]');
        await page.click('[jsname="LgbsSe"]');
        await wait(5000);
        await page.waitForSelector('#day');
        await page.type('#day', '20');
        await page.waitForSelector('#year');
        await page.type('#year', '1990');
        await page.waitForSelector('#gender');
        await page.select('#gender', '1');
        await page.waitForSelector('#month');
        await page.select('#month','1');
        await page.waitForSelector('[jsname="LgbsSe"]')
        await page.click('[jsname="LgbsSe"]');
        await wait(2000);
        await page.waitForSelector('[aria-posinset="1"]');
        await page.click('[aria-posinset="1"]');
        await page.waitForSelector('[jsname="LgbsSe"]');
        await page.click('[jsname="LgbsSe"]');
        await wait(2500);
        await  page.waitForSelector('[name="Passwd"]');
        const password = uuidv4();
        await page.type('[name="Passwd"]', password);
        await page.waitForSelector('[name="PasswdAgain"]');
        await page.type('[name="PasswdAgain"]', password);
        await page.waitForSelector('[jsname="LgbsSe"]');
        await page.click('[jsname="LgbsSe"]');
        await wait(2000);
        await page.waitForSelector('#phoneNumberId');
        const phone="number";
        await page.type('#phoneNumberId', phone);
        await page.waitForSelector('[jsname="LgbsSe"]');
        await page.click('[jsname="LgbsSe"]');


    }

registerChatGPT();
