const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal-container");

openModal.addEventListener("click", visibleModal);
closeModal.addEventListener("click", hiddenModal);

function visibleModal() {
    modal.classList.remove("hide");
}

function hiddenModal() {
    modal.classList.add("hide");
}