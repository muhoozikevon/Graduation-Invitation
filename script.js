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
