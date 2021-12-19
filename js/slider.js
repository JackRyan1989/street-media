// Initial slide number
var currentSlide = 1;

// Get slides
var slide1 = document.getElementById("s1"),
  slide2 = document.getElementById("s2"),
  slide3 = document.getElementById("s3");

// Get prev next buttons
var prevButton = document.getElementById("testimonials__prevButton"),
  nextButton = document.getElementById("testimonials__nextButton");

// Get slide number buttons
var gotoSlideOne = document.getElementById("testimonials__pageOne"),
  gotoSlideTwo = document.getElementById("testimonials__pageTwo"),
  gotoSlideThree = document.getElementById("testimonials__pageThree");

// Apply slide styling on button clicks
function showHide() {
  if (currentSlide === 1) {
    slide1.classList.add("show");
    slide1.classList.remove("hide");
    slide2.classList.add("hide");
    slide2.classList.remove("show");
    slide3.classList.add("hide");
    slide3.classList.remove("show");
    gotoSlideOne.classList.add("indicated");
    gotoSlideOne.setAttribute('aria-current', 'true');
    gotoSlideTwo.classList.remove("indicated");
    gotoSlideTwo.setAttribute('aria-current', 'false');
    gotoSlideThree.classList.remove("indicated");
    gotoSlideThree.setAttribute('aria-current', 'false');
  } else if (currentSlide === 2) {
    slide1.classList.add("hide");
    slide1.classList.remove("show");
    slide2.classList.add("show");
    slide2.classList.remove("hide");
    slide3.classList.add("hide");
    slide3.classList.remove("show");
    gotoSlideOne.classList.remove("indicated");
    gotoSlideOne.setAttribute('aria-current', 'false');
    gotoSlideTwo.classList.add("indicated");
    gotoSlideTwo.setAttribute('aria-current', 'true');
    gotoSlideThree.classList.remove("indicated");
    gotoSlideThree.setAttribute('aria-current', 'false');
  } else if (currentSlide === 3) {
    slide1.classList.add("hide");
    slide1.classList.remove("show");
    slide2.classList.add("hide");
    slide2.classList.remove("show");
    slide3.classList.add("show");
    slide3.classList.remove("hide");
    gotoSlideOne.classList.remove("indicated");
    gotoSlideOne.setAttribute('aria-current', 'false');
    gotoSlideTwo.classList.remove("indicated");
    gotoSlideTwo.setAttribute('aria-current', 'false');
    gotoSlideThree.classList.add("indicated");
    gotoSlideThree.setAttribute('aria-current', 'true');
  }
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
});

gotoSlideOne.addEventListener("click", function () {
  currentSlide = 1;
  showHide();
});

gotoSlideTwo.addEventListener("click", function () {
  currentSlide = 2;
  showHide();
});

gotoSlideThree.addEventListener("click", function () {
  currentSlide = 3;
  showHide();
});
