AOS.init({
    offset: 200,
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
};

function myFunction() {
    var progressBar = document.getElementById("progress-bar");
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";
}
