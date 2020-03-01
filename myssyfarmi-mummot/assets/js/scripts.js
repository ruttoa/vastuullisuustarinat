var mySwiper = new Swiper('.swiper-container', {
    cssMode: true,
    direction: 'vertical',
    loop: false,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    mousewheel: true,
    mousewheelSensitivity: 0,
    mousewheelReleaseOnEdges: true,
    touchReleaseOnEdges: true,
})