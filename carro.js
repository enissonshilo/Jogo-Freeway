//variaveis dos carros
let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 96, 150, 212, 262, 316]
let velocidadeCarros = [3, 2.5, 3.0, 4.6, 3.2, 2.5]
let comprimentoCarro = 50;
let alturaCarro = 40;


//funções dos carros

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < xCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function posicaInicialDoCarro(){
  for (let i = 0; i < xCarros.length; i++){
    if (xCarros[i] < -50){
    xCarros[i] = 600
    }
  }
}
