import puppeteer from 'puppeteer';
import { v4 as uuidv4 } from 'uuid';

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

async function sendQwen() {
        await page.goto('https://chat.qwen.ai/auth?action=signup',  { waitUntil: 'domcontentloaded' });
  
        await page.waitForSelector('[placeholder="Enter Your Full Name"]')
        const name = uuidv4();
        await page.type('[placeholder="Enter Your Full Name"]', name);

        await page.waitForSelector('[placeholder="Enter Your Password"]');
        const password = uuidv4();
        await page.type('[placeholder="Enter Your Password"]', password);


        await page.waitForSelector('[placeholder="Enter Your Password Again"]');
        await page.type('[placeholder="Enter Your Password Again"]', password);

        const email = "nodayil497@avulos.com"
        await page.waitForSelector('[placeholder="Enter Your Email"]');
        await page.type('[placeholder="Enter Your Email"]', email);

        await page.waitForSelector('.size-4');
        await page.click('.size-4');
        
        await page.waitForSelector('.bg-purple-500');
        const elements = await page.$$('.bg-purple-500');


        for (let element of elements) {
            const hasSize4 = await page.evaluate(el => el.querySelector('.size-4') !== null, element);
            if (!hasSize4) {
              await element.click();
              break;
            }
          }

        await page.waitForSelector('#nc_1_n1z');
        const element = await page.$('#nc_1_n1z');
        const box = await element.boundingBox();

        if (!box) {
            console.log('Элемент не найден');
            await browser.close();
            return;
        }
        const startX = box.x + box.width / 2; 
        const startY = box.y + box.height / 2;

        const mouse = page.mouse;
        await mouse.move(startX, startY); 
        await mouse.down();  
        await mouse.move(startX + 300, startY, { steps: 10 });
}

sendQwen();
