let nav = document.querySelector('.navigation');
let navToggle = document.querySelector('.navigation__toggle');
let pageToggle = document.querySelector('.page-header__toggle');

nav.classList.remove('navigation--nojs');

pageToggle.addEventListener('click', function () {
  if (nav.classList.contains('navigation--closed')) {
    nav.classList.remove('navigation--closed');
    nav.classList.add('navigation--opened');
  }
});

navToggle.addEventListener('click', function () {
  if (nav.classList.contains('navigation--opened')) {
    nav.classList.remove('navigation--opened');
    nav.classList.add('navigation--closed');
  }
});
