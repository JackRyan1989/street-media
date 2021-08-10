// Open the nav bar and close. Apply styling so it looks nice
// Grab some variables:
// The Nav bar
let nav = document.getElementById("navbar");
// The Button
let btn = document.getElementsByClassName("menu_button")[0];
// The nav bar unordered list that is currently hidden
let navUL = document.getElementById("nav__ul");
// Nav menu items:
let navItems = document.getElementsByClassName("nav_menu_item");

function openNav() {
  navUL.classList.remove("compressed");
  navUL.classList.add("expanded");
  nav.classList.remove("nav__compressed");
  nav.classList.add("nav__expanded");
  btn.setAttribute("data-open", "true");
  btn.textContent = "Close";
};

function closeNav() {
  navUL.classList.remove("expanded");
  navUL.classList.add("compressed");
  nav.classList.remove("nav__expanded");
  nav.classList.add("nav__compressed");
  btn.setAttribute("data-open", "false");
  btn.textContent = "Menu";
};

function expando() {
  let open = btn.getAttribute("data-open");
  if (open === "true") {
    closeNav();
  } else if (open === "false") {
    openNav();
  }
}

// Our onclick event:
btn.onclick = expando;
btn.onkeydown = expando;
[].forEach.call(navItems, function(item) {
  item.onclick = closeNav;
});