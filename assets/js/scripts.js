AOS.init({
    offset: 200,
    duration: 1000,
    delay: 100,
    once: true
});

// Reading progress bar
window.onscroll = function () {
    myFunction();
};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
}
