const wrapper = document.querySelector('.swiper-wrapper');
const slides = document.querySelectorAll('.swiper-slide');
const container = document.querySelector('.swiper-container');

if (!wrapper || !slides.length || !container) return;

let currentIndex = 0;
const totalSlides = slides.length;
const autoplayDelay = 3000;
let autoplayInterval = null;

function goToSlide(index) {
    currentIndex = index;
    wrapper.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function nextSlide() {
    goToSlide((currentIndex + 1) % totalSlides);
}

function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, autoplayDelay);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

startAutoplay();

container.addEventListener('mouseenter', stopAutoplay);
container.addEventListener('mouseleave', startAutoplay);
