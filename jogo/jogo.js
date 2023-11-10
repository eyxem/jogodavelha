//Seleciona todos os elementos com a classe "celula" e os armazena em uma lista.
const celulas = document.querySelectorAll(".celula");

//Inicializa a variável checarTurno como verdadeira.
let checarTurno = true;

//Inicializa a variável turno, que será usado para alternar entre "X" e "O".
let turno;

//Define constantes para representar os jogadores "X" e "O".
const JOGADOR_X = "X";
const JOGADOR_O = "O";

//Inicializa a variável jogoAcabou como falso, indicando que