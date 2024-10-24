//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Entrada de dados. Lembre-se: O parseInt(()) é importante para a conversão dos valores de entrada(String) para um valor numérico(int).
let num1 = parseInt("15");
let num2 = parseInt("45");

//TODO: Implemente a lógica para exibir o xpGanho:
if(isNaN(num1) || isNaN(num2)){ //Verifica se não são números, ou seja, verificam se a conversão do parseInt funcionou ou não
  console.log("Erro: entrada inválida!");
}
else if(num2 < 1 || num2 > 100){ //Verifica se oo num2 é um número inteiro entre 1 a 100 igual pede o enunciado
   console.log("Erro: a dificuldade da batalha só pode ser um número inteiro entre 1 a 100");
}
else{
  const xpGanho = num1 * num2 * 100;
  
  // Imprime a quantidade de XP ganho
  console.log("Voce ganhou " + xpGanho + " XP!");
}