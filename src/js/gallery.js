const galleryItems = [
  {
    original: "./assets/img/gallery/galery1.jpg",
    description: "galery1",
  },
  {
    original: "./assets/img/gallery/galery2.jpg",
    description: "galery2",
  },
  {
    original: "./assets/img/gallery/galery3.jpg",
    description: "galery3",
  },
  {
    original: "./assets/img/gallery/galery4.jpg",
    description: "galery4",
  },
  {
    original: "./assets/img/gallery/galery5.jpg",
    description: "galery5",
  },
  {
    original: "./assets/img/gallery/galery6.jpg",
    description: "galery6",
  },
  {
    original: "./assets/img/gallery/galery7.jpg",
    description: "galery7",
  },
  {
    original: "./assets/img/gallery/galery8.jpg",
    description: "galery8",
  },
  {
    original: "./assets/img/gallery/galery9.jpg",
    description: "galery9",
  },
  {
    original: "./assets/img/gallery/galery10.jpg",
    description: "galery10",
  },
  {
    original: "./assets/img/gallery/galery11.jpg",
    description: "galery11",
  },
  {
    original: "./assets/img/gallery/galery12.jpg",
    description: "galery12",
  },
  {
    original: "./assets/img/gallery/galery13.jpg",
    description: "galery13",
  },
  {
    original: "./assets/img/gallery/galery14.jpg",
    description: "galery14",
  },
  {
    original: "./assets/img/gallery/galery15.jpg",
    description: "galery15",
  },
];

const galleryList = document.querySelector(".gallery-list");

// Shuffle array
const shuffled = galleryItems.sort(() => 0.5 - Math.random());

// Get sub-array of first n elements after shuffled
let selected = shuffled.slice(0, 12);

const createLi = function ({ original, description }) {
  let itemLi = document.createElement("li");
  let itemImg = document.createElement("img");

  itemImg.src = original;
  itemImg.alt = description;

  itemLi.classList.add("gallery-list-item");
  itemLi.classList.add("js-scroll");
  itemLi.classList.add("fade-in-bottom");

  itemLi.append(itemImg);
  galleryList.append(itemLi);
};

selected.forEach(createLi);

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});
