// ---------------------- anchors
{
  $("a.scrollto").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate(
      {
        scrollTop: destination,
      },
      1000
    );
    return false;
  });
}

// ---------------------- explore
const input = document.querySelector(".explore-slide-intut");
const line = document.querySelector(".explore-slide-line");
const imageAfter = document.querySelector(".explore-slide-after");

input.oninput = () => {
  let moveValue = input.value;
  line.style.left = `${moveValue}%`;
  imageAfter.style.width = `${moveValue}%`;
};

// ---------------------- gallery
const galleryItems = [
  "galery1",
  "galery2",
  "galery3",
  "galery4",
  "galery5",
  "galery6",
  "galery7",
  "galery9",
  "galery10",
  "galery11",
  "galery12",
  "galery13",
  "galery14",
  "galery15",
  "galery8",
  // {
  //   original: "/assets/img/gallery/galery1.jpg",
  //   description: "galery1",
  // },
  // {
  //   original: "/assets/img/gallery/galery2.jpg",
  //   description: "galery2",
  // },
  // {
  //   original: "/assets/img/gallery/galery3.jpg",
  //   description: "galery3",
  // },
  // {
  //   original: "/assets/img/gallery/galery4.jpg",
  //   description: "galery4",
  // },
  // {
  //   original: "/assets/img/gallery/galery5.jpg",
  //   description: "galery5",
  // },
  // {
  //   original: "/assets/img/gallery/galery6.jpg",
  //   description: "galery6",
  // },
  // {
  //   original: "/assets/img/gallery/galery7.jpg",
  //   description: "galery7",
  // },
  // {
  //   original: "/assets/img/gallery/galery8.jpg",
  //   description: "galery8",
  // },
  // {
  //   original: "/assets/img/gallery/galery9.jpg",
  //   description: "galery9",
  // },
  // {
  //   original: "/assets/img/gallery/galery10.jpg",
  //   description: "galery10",
  // },
  // {
  //   original: "/assets/img/gallery/galery11.jpg",
  //   description: "galery11",
  // },
  // {
  //   original: "/assets/img/gallery/galery12.jpg",
  //   description: "galery12",
  // },
  // {
  //   original: "/assets/img/gallery/galery13.jpg",
  //   description: "galery13",
  // },
  // {
  //   original: "/assets/img/gallery/galery14.jpg",
  //   description: "galery14",
  // },
  // {
  //   original: "/assets/img/gallery/galery15.jpg",
  //   description: "galery15",
  // },
];

const galleryList = document.querySelector(".gallery-list");

// Shuffle array
const shuffled = galleryItems.sort(() => 0.5 - Math.random());

// Get sub-array of first n elements after shuffled
let selected = shuffled.slice(0, 12);

// const createLi = function ({ original, description }) {
//   let itemLi = document.createElement("li");
//   let itemImg = document.createElement("img");

//   itemImg.src = original;
//   itemImg.alt = description;

//   itemLi.classList.add("gallery-list-item");
//   itemLi.classList.add("js-scroll");
//   itemLi.classList.add("fade-in-bottom");

//   itemLi.append(itemImg);
//   galleryList.append(itemLi);
// };

// selected.forEach(createLi);

function createLi(array) {
  array.forEach((el) => {
    const img = `<li class="gallery-list-item js-scroll fade-in-bottom"><img src="assets/img/gallery/${el}.jpg" alt="${el}"></li>`;
    galleryList.innerHTML += img;
  });
}

createLi(galleryItems);

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

// ---------------------- menu
(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const burgerMenuRef = document.querySelector("[data-menu]");
  const visit = document.querySelector(".welcome-visit");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");

    menuBtnRef.setAttribute("aria-expanded", !expanded);
    burgerMenuRef.classList.toggle("is-open");
    visit.classList.toggle("is-close");
  });

  const categories = [
    "visiting",
    "explore",
    "video",
    "gallery",
    "tickets",
    "contacts",
  ];

  const selectCat = (e) => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");

    menuBtnRef.setAttribute("aria-expanded", !expanded);
    burgerMenuRef.classList.toggle("is-open");
    visit.classList.toggle("is-close");
  };

  categories.forEach((category) => {
    document.getElementById(category).addEventListener("click", selectCat);
  });
})();

// ---------------------- modal
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    // overlay: document.querySelector(".backdrop"),
  };

  refs.openModalBtn.addEventListener("click", openModal);
  refs.closeModalBtn.addEventListener("click", closeModal);

  function openModal(event) {
    event.preventDefault();

    refs.modal.classList.remove("is-hidden");

    refs.closeModalBtn.addEventListener("click", closeModal);
    // refs.overlay.addEventListener("click", closeModal);
  }

  function closeModal() {
    refs.modal.classList.add("is-hidden");

    refs.closeModalBtn.removeEventListener("click", closeModal);
    // refs.overlay.removeEventListener("click", closeModal);
  }
})();

// ---------------------- welcome
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
    prepareCurrentSlide(index);
  } else {
    index -= 1;
    prepareCurrentSlide(index);
  }
};

squares.forEach((item, idx) => {
  item.addEventListener("click", () => {
    prepareCurrentSlide(idx);
  });
});

buttonNext.addEventListener("click", nextSlide);
buttonPrev.addEventListener("click", prevSlide);

// ---------------------- Map

mapboxgl.accessToken =
  "pk.eyJ1IjoidmVyYWtvcnp1biIsImEiOiJja3UzMXF6enQybjR2Mm5wODMxN3c4eGg5In0.PZe_xAK_4tEofMlL0VKdPA";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v10",
  center: [2.3366, 48.86084],
  zoom: 15.7,
});

const nav = new mapboxgl.NavigationControl({
  showCompass: true,
  showZoom: true,
});

map.addControl(new mapboxgl.NavigationControl());

const marker1 = new mapboxgl.Marker({ color: "#000000" })
  .setLngLat([2.3364, 48.86091])
  .addTo(map);

const marker2 = new mapboxgl.Marker({ color: "#999999" })
  .setLngLat([2.3333, 48.8602])
  .addTo(map);

const marker3 = new mapboxgl.Marker({ color: "#999999" })
  .setLngLat([2.3397, 48.8607])
  .addTo(map);

const marker4 = new mapboxgl.Marker({ color: "#999999" })
  .setLngLat([2.333, 48.8619])
  .addTo(map);

const marker5 = new mapboxgl.Marker({ color: "#999999" })
  .setLngLat([2.3365, 48.8625])
  .addTo(map);
