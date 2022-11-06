let crashSong;
let gamePointsSong;
let soundtrack;


let roadImage;
let characterImage;
let carImages;
let carNumberOne;
let carNumberTwo;
let carNumberThree;


function preload() {
  roadImage = loadImage("images/road.png");
  characterImage = loadImage("images/character.png");
  let carNumberOne = loadImage("images/car-1.png")
  let carNumberTwo = loadImage("images/car-2.png")
  let carNumberThree = loadImage("images/car-3.png")
  carImages = [carNumberOne, carNumberTwo, carNumberThree, carNumberTwo, carNumberOne, carNumberThree]
  crashSong = loadSound("songs/collision.mp3");
  gamePointsSong = loadSound("songs/points.wav");
  soundtrack = loadSound("songs/soundtrack.mp3");
}