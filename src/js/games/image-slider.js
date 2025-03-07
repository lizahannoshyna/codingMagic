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
    camIcon.addEventListener('click', () => {
      const slide = camIcon.closest('.swiper-slide'); 
      const stdImg = slide.querySelector('.std-img'); 
      const isOff = camIcon.getAttribute('src') === camIcon.dataset.off;

      camIcon.setAttribute('src', isOff ? camIcon.dataset.on : camIcon.dataset.off);
      stdImg.setAttribute('src', isOff ? stdImg.dataset.on : stdImg.dataset.off);
    });
  });
});

