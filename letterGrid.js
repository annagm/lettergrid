//letter cubes
var cubes = ["AAEEGN", "ABBJOO", "ACHOPS", "AFFKPS",
"AOOTTW", "CIMOTU", "DEILRX", "DELRVY",
"DISTTY", "EEGHNW", "EEINSU", "EHRTVW",
"EIOSST", "ELRTTY", "HIMNQU", "HLNNRZ"];

//building and displaying grid
function rollBoard(grid){
  var rotate = document.getElementById("Esther");
  if (rotate.checked == true) {
    rotateBoard(grid);
  }
  else {
  var board = document.getElementById("board");
for(i=0; i<grid.length; i++) {
  var letter = document.createElement("DIV");
  letter.className = "grid-item";
  if(grid[i] == "Q") {
    letter.innerHTML = "Qu";
  }
  else {
  letter.innerHTML = grid[i];
  }
  board.appendChild(letter);
  }
}
}

function rotateBoard(grid) {
  var board = document.getElementById("board");

for(i=0; i<grid.length; i++) {
  var r = Math.floor(Math.random() * 9);
var rotation = "rotate(0deg)";
  if (r == 9) {
    rotation = "rotate(270deg)";
  }
  else if (r == 8) {
    rotation = "rotate(180deg)";
  }
  else if (r == 7) {
    rotation = "rotate(90deg)";
  }

  var letter = document.createElement("DIV");
  letter.className = "grid-item";
  if(grid[i] == "Q") {
    letter.innerHTML = "Qu";
  }
  else {
  letter.innerHTML = grid[i];
  }
  letter.style.transform = rotation;
  board.appendChild(letter);
  }
}

function shuffle(){
var grid = new Array();
while(cubes.length > 0){
  var i = Math.floor(Math.random() * (cubes.length-1));
  var j = Math.floor(Math.random() * 5);
  grid.push(cubes[i].charAt(j));
  cubes.splice(i , 1);
}
rollBoard(grid);
}

function startGame() {
  shuffle();
  document.getElementById("instruction").style.display = "none";
  document.getElementById("board").style.display = "grid";
  var start = Date.now();
  var myTime = setInterval(timer, 1000, start);
  function timer(startTime) {
    var elem = document.getElementById("sand");
    var now = Date.now();
    var round = 180000;
    var r = now - start;
    var endSound = new Audio("AlarmClock.mp3");

    if (r >= round) {
        elem.style.width = "0%";
        endSound.play();
        clearInterval(myTime);
      }
    else if (r > (.8*round)) {
        elem.style.background = "red";
        elem.style.width = "10%";
      }
    else if (r > (.7*round)) {
      elem.style.width = "20%";
    }
    else if (r > (.5*round)) {
        elem.style.background = "orange";
        elem.style.width = "50%";
      }
    else if (r > (.25*round)) {
      elem.style.width = "75%";
    }
  }
}
