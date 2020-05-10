AOS.init({
    offset: 120,
    duration: 700,
    delay: 100,
    once: true
});

var rellax = new Rellax('.photo-section .bg', {
    center: true,
    speed: -5,
});

// Reading progress bar
window.onscroll = function () {
    myFunction();
}

function myFunction() {
    var progressBar = document.getElementById("progress-bar");
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";
}

// Swiping slider
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
    lazy: true,
});

// Initialize Lazyload plugin
lazyload();
