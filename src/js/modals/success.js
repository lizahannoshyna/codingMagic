const closeModalBtn = document.querySelector('[data-modal-close-success]');
const backdrop = document.querySelector('.success__backdrop');
const openModalBtn = document.querySelector('.footer-subscribe__send');
const input = document.querySelector('.footer-subscribe__input');

backdrop.addEventListener("click", (event) => {
    if(event.target === backdrop){
        toggleModal();
    }
})

closeModalBtn.addEventListener("click", (event) => {
    toggleModal();
})

openModalBtn.addEventListener("click", (event) => {
    if(!input.value.includes("@")) {
        alert("Будь-ласка, введіть коректну пошту");
        return;
    }

    toggleModal();
    input.value = "";
})



function toggleModal() {
    backdrop.classList.toggle('modal-open');
    document.body.classList.toggle('no-scroll');
}
