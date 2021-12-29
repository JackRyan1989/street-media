//To Array:
function toArray(arrLike) {
  return [].slice.call(arrLike);
}

// Initial slide number
var currentSlide = 1;

// Get slides
var slides = toArray(document.getElementsByClassName("testimonial__item"));

// Get prev next buttons
var prevButton = document.getElementById("testimonials__prevButton"),
  nextButton = document.getElementById("testimonials__nextButton");

// Get slide number buttons
var gotoButtons = toArray(document.querySelectorAll(".bullets button"));

// Apply slide styling on button clicks
function showHide() {
  slides.forEach(function (slide) {
    if (parseInt(slide.getAttribute("id").slice(1)) === currentSlide) {
      slide.setAttribute("tabindex", "0");
      slide.focus();
      slide.classList.add("show");
      slide.classList.remove("hide");
    } else {
      slide.classList.add("hide");
      slide.classList.remove("show");
      slide.setAttribute("tabindex", "-1");
    }
  });
}

function highLightButtons() {
  gotoButtons.forEach(function (button) {
    if (currentSlide === parseInt(button.getAttribute("id").slice(-1))) {
      button.classList.add("indicated");
      button.setAttribute("aria-current", "true");
    } else {
      button.classList.remove("indicated");
      button.setAttribute("aria-current", "false");
    }
  });
}

// Add listeners
prevButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (currentSlide > 0 && currentSlide <= 3) {
    currentSlide--;
  }
  if (currentSlide === 0) {
    currentSlide = 3;
  }
  showHide();
  highLightButtons();
});

nextButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (currentSlide > 0 && currentSlide <= 3) {
    currentSlide++;
  }
  if (currentSlide > 3) {
    currentSlide = 1;
  }
  showHide();
  highLightButtons();
});

gotoButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    currentSlide = parseInt(button.getAttribute("id").slice(-1));
    showHide();
    highLightButtons();
  });
});
