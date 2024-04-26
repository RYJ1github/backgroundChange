function Red(){ document.body.style.background = "red"; }
function Green(){ document.body.style.background = "Green"; }
function Blue(){ document.body.style.background = "Blue"; }


function changeColor() {
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
  }