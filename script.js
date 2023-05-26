var slideIndex = 0;
var slides = document.getElementsByClassName("slide");

showSlide(slideIndex);

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
}

function prevSlide() {
  if (slideIndex > 0) {
    slideIndex--;
  } else {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
}

// Event listeners for next and previous buttons
document.querySelector(".nextBtn").addEventListener("click", nextSlide);
document.querySelector(".prevBtn").addEventListener("click", prevSlide);








// const rangeLabel = document.querySelector('.custom-range-slider');
// const rangeInput = rangeLabel.children[0];
// const thumbWidth = 6;

// rangeLabel.insertAdjacentHTML(
//   'beforeend', 
//   `<span class="bubble"></span>`
// );

// const rangeBubble = rangeLabel.children[1];

// positionBubble(rangeBubble, rangeInput)

// function positionBubble(bubbleElement, anchorElement) {
//   const {min, max, value, offsetWidth} = anchorElement;
//   const total = Number(max) - Number(min);
//   const perc = (Number(value) - Number(min)) / total;
//   const offset = (thumbWidth/2) - (thumbWidth * perc);
  
//   bubbleElement.style.left = `calc(${perc * 100}% + ${offset}px)`;
//   bubbleElement.textContent = value;
// }

// rangeInput.addEventListener('input', (e) => positionBubble(rangeBubble, e.target))