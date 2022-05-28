const slides = document.querySelectorAll(
  '.testimonials__content--slider__slide'
);

const indicatorsContainer = document.querySelector(
  '.testimonials__content--indicator'
);
const allIndicators = document.querySelectorAll(
  '.testimonials__content--indicator__img'
);

indicatorsContainer.addEventListener('click', function (e) {
  const targetImg = e.target.closest('img');
  allIndicators.forEach((indicator) => {
    if (indicator === targetImg) {
      indicator.classList.add('active');
      const imgNum = targetImg.getAttribute('data-id');

      for (let i = 0; i < slides.length; i++) {
        if (slides[i].getAttribute('data-id') === imgNum) {
          slides[i].classList.add('active');
        } else {
          slides[i].classList.remove('active');
        }
      }
    } else {
      indicator.classList.remove('active');
    }
  });
});
