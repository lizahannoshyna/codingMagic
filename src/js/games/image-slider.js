new Swiper(".swiper", {
    navigation: {
      nextEl: ".s-button-next",
      prevEl: ".s-button-prev",
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
