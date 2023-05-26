var slideIndex = 0;
var slides = document.getElementsByClassName("slide");

var prevBtn = document.querySelector(".prevBtn");
var nextBtn = document.querySelector(".nextBtn");

showSlide(slideIndex);
updateButtonVisibility();

function showSlide(index) {
  // Hide all slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Show the selected slide
  slides[index].style.display = "block";
}

function nextSlide() {
  if (slideIndex < slides.length - 1) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  showSlide(slideIndex);
  updateButtonVisibility();
}

function prevSlide() {
  if (slideIndex > 0) {
    slideIndex--;
  } else {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
  updateButtonVisibility();
}

function updateButtonVisibility() {
  if (slideIndex === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "inline-block";
  }

  if (slideIndex === slides.length - 1) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "inline-block";
  }
}

// Event listeners for next and previous buttons
document.querySelector(".nextBtn").addEventListener("click", nextSlide);
document.querySelector(".prevBtn").addEventListener("click", prevSlide);