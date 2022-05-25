const header = document.querySelector('.header');
const menu = document.querySelector('.header__menu');
const overlay = document.querySelector('.header__overlay');

const toggleOpen = function (element) {
  element.classList.toggle('open');
};

menu.addEventListener('click', () => {
  toggleOpen(menu);
  toggleOpen(header);
  toggleOpen(overlay);
});
