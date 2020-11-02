//Active Navbar
var header = document.getElementById("nav");
var tabs = header.getElementByClassName("tab");
for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function() {
    var current = document.getElementByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace("active", "");
    }
    this.className += " active";
  });
}
