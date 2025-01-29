// Simple image slider using JavaScript
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
   slides.forEach((slide) => {
      slide.style.display = "none";
   });

   slides[index].style.display = "block";
}

function nextSlide() {
   currentIndex = (currentIndex + 1) % slides.length;
   showSlide(currentIndex);
}

// Change slide every 3 seconds
setInterval(nextSlide, 3000);

/*
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Initialize the slider
showSlide(currentIndex);
*/
