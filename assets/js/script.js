// Hamburger menu hide

var menuEls = document.getElementsByClassName("menu-item");

var onMenuClick = function() {
  var menuHide = document.getElementById("toggle");
  menuHide.checked = false;
};

for (i = 0; i < menuEls.length; i++) {
  menuEls[i].addEventListener("click", onMenuClick);
}
