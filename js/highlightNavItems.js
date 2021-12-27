var anchors = [];
var targets = [];
var sectionIds = document.querySelectorAll("section h2");
var navAnchors = document.querySelectorAll(".nav_menu_item");

sectionIds.forEach(function(section){
  targets.push(section);
});
navAnchors.forEach(function(anchor){
  anchors.push(anchor);
});


function handleIntersect(entries, observer) {
    entries.forEach(function(entry){
      if (entry.isIntersecting) {
        anchors.forEach(function(anchor){
          if (entry.target.innerHTML === anchor.innerHTML) {
            anchor.classList.add("active");
          } else {
            anchor.classList.remove("active");
          }
        })
      }
    })
};

function createObserver(input) {
    let observer;
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 1
    };
  
    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(input);
  };

targets.forEach(function(section){
  createObserver(section)
});
  