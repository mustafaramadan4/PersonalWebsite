var elements = document.getElementsByClassName("mediacolumn");

var i;

function one() {
  for (i=0; i< elements.length; i++) {
    elements[i].style.flex = "90%";
  }
}

function two() {
  for (i=0; i< elements.length; i++) {
    elements[i].style.flex = "40%";
  }
}

function four() {
  for (i=0; i< elements.length; i++) {
    elements[i].style.flex = "20%";
  }
}

