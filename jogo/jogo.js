//Seleciona todos os elementos com a classe "celula" e os armazena em uma lista.
const celulas = document.querySelectorAll(".celula");

//Inicializa a variável checarTurno como verdadeira.
let checarTurno = true;

//Inicializa a variável turno, que será usado para alternar entre "X" e "O".
let turno;

//Define constantes para representar os jogadores "X" e "O".
const JOGADOR_X = "X";
const JOGADOR_O = "O";

//Inicializa a variável jogoAcabou como falso, indicando que o jogo está em andamento.
let jogoAcabou = false;

// Adiciona um evento de clique ao documento que é adicionado quando qualquer elemento é clicado.
document.addEventListener("click", (event) => {
    // Verifica se o elemento clicado possui a classe "celula" e se o jogo ainda não acabou.
    if (event.target.matches (".celula") && !jogoAcabou) {
        // Chama a função jogar, passando o ID do elemento clicado como argumento.
        jogar (event.target.id);
    }
});

// Função que representa a jogada de um jogador.
function jogar (id) {
    // Obtém o elemento com o ID correspondente ao argumento passado.
    const celula = document.getElementById (id);

    
}