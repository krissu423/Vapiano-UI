// JavaScript for image slideshow
var slideIndex = 0;
var autoScrollTimer;

showSlides();

function plusSlides(n) {
    clearTimeout(autoScrollTimer); // Clear the automatic scrolling timer
    showSlides(slideIndex += n);
    autoScrollTimer = setTimeout(showSlides, 7000); // Restart automatic scrolling
}

function currentSlide(n) {
    clearTimeout(autoScrollTimer); // Clear the automatic scrolling timer
    showSlides(slideIndex = n - 1);
    autoScrollTimer = setTimeout(showSlides, 7000); // Restart automatic scrolling
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n !== undefined) {
        slideIndex = n;
    } else {
        slideIndex++;
    }
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
    }
    slides[slideIndex].style.opacity = "1";
}

// Automatic slideshow
autoScrollTimer = setTimeout(showSlides, 7000);


// Sticky navbar functionality
window.onscroll = function () {
    stickyNavbar()
};

var navbar = document.querySelector('.navbar');
var sticky = navbar.offsetTop;

function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}