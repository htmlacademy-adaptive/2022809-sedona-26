let nav = document.querySelector('.navigation');
let navToggle = document.querySelector('.navigation__toggle');
let pageToggle = document.querySelector('.page-header__toggle');

nav.classList.remove('navigation--nojs');

pageToggle.onclick = function() {
  nav.classList.toggle('navigation--opened');
  nav.classList.toggle('navigation--closed');
};

navToggle.onclick = function() {
  nav.classList.toggle('navigation--closed');
  nav.classList.toggle('navigation--opened');
};
