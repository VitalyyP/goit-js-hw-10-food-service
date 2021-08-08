import cardsTpl from '../templates/cards.hbs';
import cards from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const jsMenuRef = document.querySelector('.js-menu');
const jsThemeSwitchToggleRef = document.querySelector('#theme-switch-toggle');
const jsBodyRef = document.querySelector('body');
const cardsMarkup = cardsTpl(cards);

jsMenuRef.insertAdjacentHTML('beforeend', cardsMarkup);

if (localStorage.getItem('theme') === 'dark') {
  jsBodyRef.classList.add(`${Theme.DARK}`);
  jsThemeSwitchToggleRef.setAttribute('checked', 'true'); 
}

jsThemeSwitchToggleRef.addEventListener('change', changeTheme);

function changeTheme() {
  if (jsBodyRef.classList.contains(`${Theme.DARK}`)) {
    jsBodyRef.classList.remove(`${Theme.DARK}`);
    jsBodyRef.classList.add(`${Theme.LIGHT}`);
    localStorage.setItem('theme', 'light');
  } else if (jsBodyRef.classList.contains(`${Theme.LIGHT}`)) {
    jsBodyRef.classList.remove(`${Theme.LIGHT}`);
    jsBodyRef.classList.add(`${Theme.DARK}`);
    localStorage.setItem('theme', 'dark');
  } else {
    jsBodyRef.classList.add(`${Theme.DARK}`);
    localStorage.setItem('theme', 'dark');
  }
}

