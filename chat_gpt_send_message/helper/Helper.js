import { clickGoogleSignIn } from "../click/Click.js";

async function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export async function googleLoginAccount(page) {
    await clickGoogleSignIn(page);
    await wait(2500);
    await page.waitForSelector('#identifier');
    await page.type('#identifierId', 'aimsi13579@gmail.com');
    await page.waitForSelector('[jsname="LgbsSe"]');
    await page.click('[jsname="LgbsSe"]');
    await wait(2500);
}
