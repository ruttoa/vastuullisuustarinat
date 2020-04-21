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
})*/


var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onLeave',
        duration: "100%",
    }
});

// get all slides
var slides = document.querySelectorAll(".swiper-slide");

// create scene for every slide
for (var i = 0; i < slides.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: slides[i]
    })
        .setPin(slides[i], { pushFollowers: false })
        //.setClassToggle(slides[i], "swiper-pagination-bullet-active")
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);
}
