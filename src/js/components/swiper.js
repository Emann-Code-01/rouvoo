const wrapper = document.querySelector('.swiper-wrapper');
const slides = document.querySelectorAll('.swiper-slide');
let currentIndex = 0;
const totalSlides = slides.length;
const autoplayDelay = 3000;

function goToSlide(index) {
    currentIndex = index;
    const offset = -currentIndex * 100;
    wrapper.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    goToSlide(currentIndex);
}

// Start autoplay
setInterval(nextSlide, autoplayDelay);

// Optional: Pause on hover
const container = document.querySelector('.swiper-container');
let autoplayInterval = setInterval(nextSlide, autoplayDelay);

container.addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
});

container.addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(nextSlide, autoplayDelay);
});