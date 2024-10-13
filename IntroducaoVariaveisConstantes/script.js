/* PARTE 1 - DECLARANDO UMA VARIÁVEL

console.log("Digite o nome do seu jogador: ");

// Para declarar uma variavel em JS utilizamos o 'let'
let nickname = "Maluu";

console.log("Bem vindo " + nickname);
console.log(nickname + " entrou no servidor");

*/


/* PARTE 2 - DECLARANDO UMA CONSTANTE

// Para declarar uma constante em JS utilizamos o 'const'
//Não é possível alterar constantes(diferente de variáveis que podem ser alteradas), normalmente usadas para coisas que se repetem e nunca mudam
const notificacao = "Pokemon Go diz: ";

console.log(notificacao + "tem um novo pokemon na região");
console.log(notificacao + "você foi derrotado por um líder");

*/

/* PARTE 3 - COLOCANDO CONHECINENTO EM PRÁTICA

//Padrão 'camelCase' utilizado na programação para declaração de variáveis e constantes
let poteCafe = "café pilão";
let poteAcucar = "Açucar cristal";
let poteBiscoito = "Biscoito Maizena";

const mensagemDaVovo = "Na cozinha da vovó hoje tem: "; //menssagem da vovó é uma constante, pois nunca muda

console.log(mensagemDaVovo + poteCafe + " - " + poteAcucar + " - " + poteBiscoito);

poteCafe = "Café 3 corações"; //alteramos a variável poteCafe

console.log(mensagemDaVovo + poteCafe + " - " + poteAcucar + " - " + poteBiscoito); //Aqui já aparece a variavel poteCafe atualizado com seu novo valor

*/