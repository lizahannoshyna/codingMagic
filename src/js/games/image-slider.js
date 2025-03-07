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
    mousewheel: {
      sensitivity: 1,
      eventTarget: ".image-slider"
    },
    autoHeight: true,
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.cam-toggle').forEach((camIcon) => {
    camIcon.addEventListener('click', function () {
      const slide = this.closest('.swiper-slide'); 
      const stdImg = slide.querySelector('.std-img'); 
      const isOff = this.getAttribute('src') === this.dataset.off;

      this.setAttribute('src', isOff ? this.dataset.on : this.dataset.off);

      stdImg.setAttribute('src', isOff ? stdImg.dataset.on : stdImg.dataset.off);
    });
  });
});
