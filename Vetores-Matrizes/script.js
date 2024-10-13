/* VETORES

let nomesPokemon = ["pikachu", "charmander", "bulbasaur"]; //Declaramos e atribuimos valores a um vetor de strings

//Para poder pegar um valor dentro de um vetor é preciso passar a sua posição/índice
//Obs: todo vetor começa na posição/índice 0
console.log(nomesPokemon[0]);

console.log(nomesPokemon);

nomesPokemon.pop(); //'pop()' é uma função que remove o último elemento de um array
console.log(nomesPokemon);

nomesPokemon.shift(); //'shift()' é uma função que remove o primeiro elemento de um array
console.log(nomesPokemon);

*/
let timePokemon = [ //Declaramos e atribuimos valor a uma matriz 2x3(2 linhas e 3 colunas)
    ["pikachu", "M", 1], //Primeira linha(linha 0)
    //nome do pokemon é a coluna 0
    //sexo do pokemon é a coluna 1
    //nível do pokemon é a coluna 2
    ["charmander", "F", 3] //Segunda linha(linha 1)
]

console.log("O pokemon " + timePokemon[1][0] + " é do sexo " + timePokemon[1][1] + " e está no nível " + timePokemon[1][2]);

// Quando usamos o '.' depois da variável aparecem métodos e propriedades que podemos utilizar
// Nesse caso utilizamos o length(Propriedade) que retorna quantas posições o array possui
console.log(timePokemon.length);
