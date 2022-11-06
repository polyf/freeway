// Posições do ator
let pontos = 0;
let xAtor = 250;
let yAtor = 365;
let colisao = false;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 35, 30);
}


function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 2;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (yAtor <= 365) {
      yAtor += 2;
    }
    
  }
  if (keyIsDown(LEFT_ARROW)) {
    xAtor -= 2;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xAtor += 2;
  }
}

function verificaColisao() {
  for (let i = 0; i < imagensCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], 50, 30, xAtor, yAtor, 25); 
    if (colisao) {
      colidiu();
      perdePonto();
      somColidiu.play();
    }
  }
}

function colidiu() {
      xAtor = 250;
      yAtor = 365;
      
}

function exibePontos() {
  textStyle("bold")
  fill("yellow")
  textSize(20);
  text(pontos, 250, 24)
}

function marcaPonto() {
  if (yAtor < 15) {
    somPontos.play();
    pontos += 1;
    reiniciaJogo();
  }
}

function perdePonto() {
  if (pontos > 0) {
    pontos -= 1;
  }
}

function reiniciaJogo() {
  xAtor = 250;
  yAtor = 365;
}