//Desafios JavaScript na DIO têm funções "gets" e "console.log" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "console.log": imprime um texto de saída (output), pulando linha.

// Entrada de dados. Lembre-se: O parseInt(()) é importante para a conversão dos valores de entrada(String) para um valor numérico(int).
let escolhaDoTreinador = parseInt("4abc");
let pokemonEscolhido; 

//TODO: Implemente as condições necessárias para a solução do desafio. Utilize a tabela de exemplos para identificar a escolha do treinador:

if ( isNaN(escolhaDoTreinador)){ //Utilizo o isNaN() para garantir que a conversão do parseInt() tenha sido feita corretamente
  console.log("Erro: escolha inválida!");
} 
else{ //Caso a conversão tenha funcionado, então quer dizer que um número já foi selecionado
  switch(escolhaDoTreinador){ //Optei pelo uso do switch no lugar de vários else-if encadeados
    case 1:{
      pokemonEscolhido = "Bulbasaur";
      break;
    }
    case 2:{
      pokemonEscolhido = "Charmander";
      break;
    }
    case 4:{
      pokemonEscolhido = "Pikachu";
      break;
    }
    case 5:{
      pokemonEscolhido = "Mewtwo";
      break;
    }
    default:{
      console.log("Não há nenhum Pokemon correspondente ao número escolhido!");
    }
  }
}

//Imprime o Pokémon escolhido:
if (pokemonEscolhido) {
    console.log("Voce escolheu o " + pokemonEscolhido + " como seu Pokemon inicial.");
}