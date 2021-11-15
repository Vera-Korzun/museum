const input = document.querySelector(".explore-slide-intut");
const line = document.querySelector(".explore-slide-line");
const imageAfter = document.querySelector(".explore-slide-after");

input.oninput = () => {
  let moveValue = input.value;
  line.style.left = `${moveValue}%`;
  imageAfter.style.width = `${moveValue}%`;
};
