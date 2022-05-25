const checkbox = document.querySelector('input[name="theme"]');
const htmlElement = document.documentElement;

let smoothTrans = () => {
  htmlElement.classList.add('transition');
  window.setTimeout(() => {
    htmlElement.classList.remove('transition');
  }, 1000);
};


checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    smoothTrans();
    htmlElement.setAttribute('data-theme', 'dark');
  } else {
    smoothTrans();
    htmlElement.setAttribute('data-theme', 'light');
  }
});

