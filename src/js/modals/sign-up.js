const closeModalBtn = document.querySelector('[data-modal-close-signUp]');
const modal = document.querySelector('[data-modal-signUp]');
const backdrop = document.querySelector('.sign-up__backdrop');
const input = document.querySelector('.sign-up__input');
const output = document.getElementById('header-output')
const btn = document.querySelector('.sign-up__submit');

document.addEventListener("DOMContentLoaded", () => {
    toggleModal();
});

backdrop.addEventListener("click", (event) => {
    if(event.target === backdrop){
        toggleModal();
    }  
})

closeModalBtn.addEventListener("click", (event) => {
    toggleModal();
})

btn.addEventListener("click", (event) => {
    updateUserName();
    toggleModal();
})

function toggleModal() {
    backdrop.classList.toggle('modal-open');
    document.body.classList.toggle('no-scroll');
}

function updateUserName() {
    output.textContent = input.value;
    input.value = '';
}