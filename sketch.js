function setup() {
  createCanvas(500, 400);
  soundtrack.loop();
  
}

function draw() {
  background(roadImage);
  showCharacter();
  showCars();
  moveCars();
  moveCharacter();
  returnCarsToRoad();
  verifyCollision();
  showPoints();
  scorePoints();
}
