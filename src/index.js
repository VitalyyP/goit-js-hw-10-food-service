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

if (localStorage.getItem('themeConst') === 'dark') {
  setDarkTheme();
  jsThemeSwitchToggleRef.setAttribute('checked', 'true'); 
}

jsThemeSwitchToggleRef.addEventListener('change', changeTheme);

function changeTheme() {
  if (jsBodyRef.classList.contains(`${Theme.DARK}`)) {
    toggleClassOnBody(`${Theme.DARK}`, `${Theme.LIGHT}`);
    setConstTheme('light');

  } else if (jsBodyRef.classList.contains(`${Theme.LIGHT}`)) {
    toggleClassOnBody(`${Theme.LIGHT}`, `${Theme.DARK}`);
    setConstTheme('dark');

  } else {
    setDarkTheme();
    localStorage.setItem('themeConst', 'dark');
  }
}

function toggleClassOnBody(rem, add) {
  jsBodyRef.classList.remove(rem);
  jsBodyRef.classList.add(add);
}

function setConstTheme(value) {
  localStorage.setItem('themeConst', `${value}`);
}

function setDarkTheme() {
  jsBodyRef.classList.add(`${Theme.DARK}`);
}