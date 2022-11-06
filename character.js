// Posições do ator
let characterPoints = 0;
let xCharacter = 250;
let yCharacter = 365;
let collision = false;

function showCharacter() {
  image(characterImage, xCharacter, yCharacter, 35, 30);
}


function moveCharacter() {
  if (keyIsDown(UP_ARROW)) {
    yCharacter -= 2;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (yCharacter <= 365) {
      yCharacter += 2;
    }
    
  }
  if (keyIsDown(LEFT_ARROW)) {
    xCharacter -= 2;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xCharacter += 2;
  }
}

function verifyCollision() {
    for (let i = 0; i < carImages.length; i++) {
    collision = collideRectCircle(xCars[i], yCars[i], 50, 30, xCharacter, yCharacter, 25);
    if (collision) {
      restartGame();
      losePoints();
      crashSong.play();
    }
  }
}


function showPoints() {
  textStyle("bold")
  fill("yellow")
  textSize(20);
  text(characterPoints, 250, 24)
}

function scorePoints() {
  if (yCharacter < 15) {
    gamePointsSong.play();
    characterPoints += 1;
    restartGame();
  }
}

function losePoints() {
  if (characterPoints > 0) {
    characterPoints -= 1;
  }
}

function restartGame() {
  xCharacter = 250;
  yCharacter = 365;
}