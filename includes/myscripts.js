function MobileDropFunc() {
  var x = document.getElementById("MobileNav");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

function MobileAccFuncCamp() {
  var x = document.getElementById("MobileNavAccCamp");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.style = "background-color:gold; color:black";
  } else {
    x.className = x.className.replace(" w3-show", "");
    x.previousElementSibling.style = "background-color:maroon; color:white";
  }
}

function MobileAccFuncChar() {
  var x = document.getElementById("MobileNavAccChar");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.style = "background-color:gold; color:black";
  } else {
    x.className = x.className.replace(" w3-show", "");
    x.previousElementSibling.style = "background-color:maroon; color:white";
  }
}


w3.includeHTML();

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("header-slides");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

function OverlayOn() {
  document.getElementById("overlay").style.display = "block";
}

function OverlayOff() {
  document.getElementById("overlay").style.display = "none";
}