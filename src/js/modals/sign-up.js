const closeModalBtn = document.querySelector('[data-modal-close-signUp]');
const modal = document.querySelector('[data-modal-signUp]');
const backdrop = document.querySelector('.sign-up__backdrop');

document.addEventListener("DOMContentLoaded", () => {
    toggleModal();
});

backdrop.addEventListener("click", (event) => {
    if(event.target === backdrop){
        toggleModal();
    }  
})

function toggleModal() {
    backdrop.classList.toggle('modal-open');
    document.body.classList.toggle('no-scroll');
}