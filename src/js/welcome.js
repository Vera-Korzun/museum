// let imgs = ["welc1", "welc2", "welc3", "welc4", "welc5"];

// const slider = document.querySelector(".welcome-slider");
// const currentNumber = document.querySelector(".control-numbers-current");
// const squares = document.querySelector(".control-square-item");
// const buttonLeft = document.querySelector(".control-arrows-left");
// let offset = 0;
// const sliderLine = document.querySelector(".welcome-slider-line");

// function shuffle(array) {
//   array.forEach((el) => {
//     const img = `<div class="welcome-slider-line swiper-slide"><img class="welcome-slider-img" src="assets/img/Welc/${el}.jpg" alt="${el}"></div>`;
//     slider.innerHTML += img;
//   });
// }

// shuffle(imgs);

const buttonNext = document.querySelector(".control-arrows-right"),
  buttonPrev = document.querySelector(".control-arrows-left"),
  slides = document.querySelectorAll(".slide"),
  squares = document.querySelectorAll(".control-square-item"),
  currentNumber = document.querySelector(".control-numbers-current"),
  allNumber = document.querySelector(".control-numbers-all");

let index = 0;

const activeSlide = (n) => {
  for (slide of slides) {
    slide.classList.remove("active");
  }
  slides[n].classList.add("active");

  currentNumber.innerHTML = "0" + (n + 1);
  allNumber.innerHTML = "0" + slides.length;
};

const activeSquare = (n) => {
  for (square of squares) {
    square.classList.remove("active");
  }
  squares[n].classList.add("active");
};

const prepareCurrentSlide = (ind) => {
  activeSlide(ind);
  activeSquare(ind);
};

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index += 1;
    prepareCurrentSlide(index);
  }
};

const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    activeSlide(index);
  } else {
    index -= 1;
    activeSlide(index);
  }
};

squares.forEach((item, idx) => {
  item.addEventListener("click", () => {
    index = idx;
    prepareCurrentSlide(index);
  });
});

buttonNext.addEventListener("click", nextSlide);
buttonPrev.addEventListener("click", prevSlide);
