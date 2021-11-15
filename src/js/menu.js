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
