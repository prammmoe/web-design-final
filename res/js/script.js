const slider = document.getElementById("slider");
let currentIndex = 0;

function showSlide(index) {
  const slideWidth = document.querySelector(".card").offsetWidth;
  const newPosition = -index * slideWidth;
  slider.style.transform = `translateX(${newPosition}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slider.children.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex =
    (currentIndex - 1 + slider.children.length) % slider.children.length;
  showSlide(currentIndex);
}

function resetToStart() {
  currentIndex = 0;
  showSlide(currentIndex);
}
