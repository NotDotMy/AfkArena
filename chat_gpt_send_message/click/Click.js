import { checkGoogleIsLogin } from '../checker/Checker.js';

const googleAuthLabels = [
    'Кіру',     
    'Войти',    
    'Sign in',  
    'Se connecter', 
    'Iniciar sesión'
];

export async function clickGoogleSignIn(page) {
    await checkGoogleIsLogin(page, true);
}
