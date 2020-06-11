var elements = document.getElementsByClassName("mediacolumn");

var i;

function one() {
  for (i=0; i< elements.length; i++) {
    elements[i].style.flex = "100%";
  }
}

function two() {
  for (i=0; i< elements.length; i++) {
    elements[i].style.flex = "50%";
  }
}

function four() {
  for (i=0; i< elements.length; i++) {
    elements[i].style.flex = "25%";
  }
}

var gridhead = document.getElementById("gridheader");
var btns = gridhead.getElementsByClassName("btn");
for (var i= 0; i< btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}