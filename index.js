import puppeteer from 'puppeteer';
import { v4 as uuidv4 } from 'uuid';
import { googleLoginAccount } from './chat_gpt_send_message/helper/Helper.js';
import { checkGoogleIsLogin } from './chat_gpt_send_message/checker/Checker.js';


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


async function sendChatGPTMessage(message) {
    const isLoggedIn = await checkGoogleIsLogin(page, false);
    if(!isLoggedIn) {
        await googleLoginAccount(page);
    }
    console.log(isLoggedIn);    
}
sendChatGPTMessage("hello world!!!");

