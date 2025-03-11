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



