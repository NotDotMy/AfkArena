const googleAuthLabels = [
    'Кіру',     
    'Войти',    
    'Sign in',  
    'Se connecter', 
    'Iniciar sesión'
];


export async function checkGoogleIsLogin(page, click) {
    await page.goto('https://google.com/', { waitUntil: 'domcontentloaded' });
    for (const label of googleAuthLabels) {
        try {
            await page.waitForSelector(`[aria-label="${label}"]`, { timeout: 5000 });
            if(click) {
            await page.click(`[aria-label="${label}"]`);
            }
            console.log(`Found element with aria-label: ${label}`);
            return false;  
        } catch (error) {
            console.log(`Selector with aria-label "${label}" not found.`);
        }
    }
    return false;
}