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
    progressBar();
    change_header_class_on_scroll();
}
window.onload = function () {
    change_header_class_on_scroll();
}

function progressBar() {
    var progressBar = document.getElementById("progress-bar");
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";
}

// Swiping slider
/*var mySwiper = new Swiper('.swiper-container', {
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
    on: {
        init: function () {
            //console.log('swiper initialized');
            //rellax.refresh();
        },
    },
});*/

imagesLoaded(document.querySelectorAll('.entry-content'), function () {
    //console.log('all images are loaded');
    rellax.refresh(); // Recalculate Rellax after images are loaded, fixes buggy layout
});

function change_header_class_on_scroll() {
    var scrollpos = window.scrollY,
        header = document.querySelector(".site-sk-demo .site-header"),
        header_height = header.offsetHeight;

    if (scrollpos >= header_height) {
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll")
    }
}
