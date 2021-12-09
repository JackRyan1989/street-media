"use strict";

//Wait till the whole page is rendered:
window.onload = function () {
  //Debouncing function:
  //Method is the function called
  function debounce(method, delay) {
    let timeoutId = null;
    return function () {
      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        method.apply(null, args);
      }, delay);
    };
  }
  //Grab our nav item(s):
  const nav = document.getElementById("navbar"); 
  const navIcon = document.getElementById('nav_icon');
  const navMenuItems = [].slice.call(document.getElementsByClassName('nav_menu_item'));
  //Define our last scroll position
   let lastKnownScrollPosition = 0;
   function shrinkNavBar(scrollPos) {
     if (scrollPos > 10) {
       navIcon.style.transform = 'scale(0.75)';
       nav.style.height = '75px';
       navMenuItems.forEach((item)=> {
           item.style.fontSize = '1.35em';
       });
     } else if (scrollPos === 0) {
        navIcon.style.transform = 'scale(1)';
        nav.style.height = '100px';
        navMenuItems.forEach((item)=> {
            item.style.fontSize = '1.5em';
        });
     }
   }
  // Check if on tablet or larger:
  // Create a media condition that targets viewports at least 1100px wide
  const mediaQuery = window.matchMedia("(min-device-width: 1100px)");

  const handleScroll = debounce(() => {
    lastKnownScrollPosition = window.scrollY;

    if (mediaQuery.matches) {
        //Listen for scroll events and if scrolling down, shrink nav:
        shrinkNavBar(lastKnownScrollPosition);
      }
  }, 25);

  document.addEventListener("scroll", handleScroll);
};

