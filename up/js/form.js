//First Page
const slidePage = document.querySelector('.register__content--form__page');
const firstNextBtn = document.querySelector('.next-1');

//Second Page
const firstPrevBtn = document.querySelector('.prev-1');
const secondNextBtn = document.querySelector('.next-2');

//Third Page
const secondPrevBtn = document.querySelector('.prev-2');
const thirdNextBtn = document.querySelector('.next-3');

//Fourth Page
const thirdPrevBtn = document.querySelector('.prev-3');
const submitBtn = document.querySelector('.submit');

//Progress Step
const progressSteps = document.querySelectorAll('.register__progress--step');

// Progress Number
const progressNumbers = document.querySelectorAll(
  '.register__progress--step span'
);

//Progress Tick Mark
const progressTickMarks = document.querySelectorAll('.fa-check');

let current = 1;

function tick() {
  progressSteps[current - 1].classList.add('active');
  progressNumbers[current - 1].classList.add('active');
  progressTickMarks[current - 1].classList.add('active');
  current += 1;
}

function untick() {
  progressSteps[current - 2].classList.remove('active');
  progressNumbers[current - 2].classList.remove('active');
  progressTickMarks[current - 2].classList.remove('active');
  current -= 1;
}

// Next Btns Events

firstNextBtn.addEventListener('click', () => {
  slidePage.style.marginLeft = '-33%';
  tick();
});

secondNextBtn.addEventListener('click', () => {
  slidePage.style.marginLeft = '-100%';
  tick();
});

thirdNextBtn.addEventListener('click', () => {
  slidePage.style.marginLeft = '-200%';
  tick();
});

//Submiy Btn Event

submitBtn.addEventListener('click', () => {
  tick();
  setTimeout(() => {
    alert('Your form has been submitted');
    location.reload();
  }, 1000);
});

//Previous Btns Events

firstPrevBtn.addEventListener('click', () => {
  slidePage.style.marginLeft = '0';
  untick();
});

secondPrevBtn.addEventListener('click', () => {
  slidePage.style.marginLeft = '-33%';
  untick();
});

thirdPrevBtn.addEventListener('click', () => {
  slidePage.style.marginLeft = '-100%';
  untick();
});
