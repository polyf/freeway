function setup() {
  createCanvas(500, 400);
  trilhaSonora.loop();
  
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  retornaCarro();
  verificaColisao();
  exibePontos();
  marcaPonto();
}
