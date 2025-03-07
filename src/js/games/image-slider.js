new Swiper(".swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }, 
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    keyboard: {
      enabled:true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    grabCursor: true,
    mousewheel: {
      sensitivity: 1,
      eventTarget: ".image-slider"
    },
    autoHeight: true,
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.cam-toggle').forEach((camIcon) => {
    camIcon.addEventListener('click', function () {
      const slide = this.closest('.swiper-slide'); // Знаходимо батьківський слайд
      const stdImg = slide.querySelector('.std-img'); // Знаходимо зображення студента
      const isOff = this.getAttribute('src') === this.dataset.off;

      // Перемикаємо зображення іконки камери
      this.setAttribute('src', isOff ? this.dataset.on : this.dataset.off);

      // Перемикаємо зображення студента
      stdImg.setAttribute('src', isOff ? stdImg.dataset.on : stdImg.dataset.off);
    });
  });
});
