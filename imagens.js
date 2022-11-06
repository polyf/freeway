// Variáveis dos sons do jogo
let somColidiu;
let somPontos;
let trilhaSonora;


// Variáveis das imagens do jogo
let imagemDaEstrada;
let imagemDoAtor;
let imagensCarros;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;


function preload() {
  imagemDaEstrada = loadImage("images/estrada.png");
  imagemDoAtor = loadImage("images/ator-1.png");
  let imagemCarro1 = loadImage("images/carro-1.png")
  let imagemCarro2 = loadImage("images/carro-2.png")
  let imagemCarro3 = loadImage("images/carro-3.png")
  imagensCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro2, imagemCarro1, imagemCarro3]
  somColidiu = loadSound("sons/colidiu.mp3");
  somPontos = loadSound("sons/pontos.wav");
  trilhaSonora = loadSound("sons/trilha.mp3");
}