let yCars = [40, 100, 155, 320, 215, 265];
let xCars = [600, 300, 400, 400, 350, 550];
let carSpeed = [2, 3.5, 3, 3, 2, 2.5];


function showCars() {
  for (let i = 0; i < carImages.length; i++) {
    image(carImages[i], xCars[i], yCars[i], 50, 30);
  }
}

function moveCars() {
  for (let i = 0; i < carImages.length; i++){
    xCars[i] -= carSpeed[i];
  }
}

function returnCarsToRoad() {
  for (let i = 0; i < carImages.length; i++) {
    if (carPassedScreen(i)) {
    xCars[i] = 550;
    }
  }
}

function carPassedScreen(i) {
  return xCars[i] <= -50;
  
}