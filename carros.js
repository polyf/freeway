let yCarros = [40, 100, 155, 320, 215, 265];
let xCarros = [600, 300, 400, 400, 350, 550];
let velocidadeCarros = [2, 3.5, 3, 3, 2, 2.5];


function mostraCarro() {
  for (let i = 0; i < imagensCarros.length; i++) {
    image(imagensCarros[i], xCarros[i], yCarros[i], 50, 30);
  }
}

function movimentaCarro() {
  for (let i = 0; i < imagensCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function retornaCarro() {
  for (let i = 0; i < imagensCarros.length; i++) {
    if (passouTodaTela(i)) {
    xCarros[i] = 550;
    }
  }
}

function passouTodaTela(i) {
  return xCarros[i] <= -50;
  
}