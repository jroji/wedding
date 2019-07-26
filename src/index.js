import { Home } from './pages/home/home.js';
import { Login } from './pages/login/login.js';

const popup = document.querySelector('.dialog')
const main = document.querySelector('main');

const initPage = (page, container) => { 
    const { template, listeners } = page;
    
    render(template, container);
    addListeners(listeners);
}

const render = (html, container) => { container.innerHTML = html }
const addListeners = () => {};

const init = () => {
    initPage(Home, main);
    initPage(Login, popup);
}

init();