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
