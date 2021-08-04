// Use the Intersection observer API to decrease and increase the navbar image size on scroll
// You need variables to track whether you've already intersected the 
// Observed item. If you have, increase the scale. If you have not, decrease the scale.

// Grab the image to resize:
let img = document.querySelector(".nav_logo__img");

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

let target = document.querySelector("#services__section");

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        entry.intersectionRatio > 0 ? img.style.transform = "scale(0.75)" : img.style.transform = "scale(1)"
    });
};

const observer = new IntersectionObserver(handleIntersection, options);
observer.observe(target);