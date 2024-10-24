//Lembrando que uma função só pode retornar 1 valor ou 1 objeto por vez, não pode retornar 2 coisas ao mesmo tempo
//Porém, caso seja um vetor ou matriz funciona normalmente, pois é somente 1 vetor ou 1 matriz
function soma(numA, numB){
    let somatorio = numA + numB;
    return somatorio;
}

//Outra possibilidade é retornar a operação direto sem a necessidade de criar uma variável
//Como no caso abaixo por exemplo, em que primeiro ele vai realizar a operação de subtração e retornar o valor dessa operação diretamente
function subtracao(numA, numB){
    return numA - numB;
}

//Estamos fazendo uma variável receber o valor do retorno de uma função
let resultado = soma(5,10);
console.log("O resultado da função de soma é " + resultado);

resultado = subtracao(10, 5);
console.log("O resultado da função de subtração é " + resultado);

//Outro exemplo de funções com retorno(exemplo do "dia a dia")
function getFirstName(name, splitChar){
    let firstName = name.split(splitChar)[0]; //split() é uma função que já existe no JS, ele basicamente "quebra" um texto
    //Nesse caso ele vai separar o texto de acordo com o que for passado para a função no splitChar, alguns exemplos comuns são " " que significa espaço, ou um - , etc
    //Então no caso de um nome, ele basicamente vai separar o primeiro nome do sobrenome, ele separa eles dentro de um vetor
    //Por isso colocar o [0] em sequência, pois como eu quero o primeiro nome, então preciso do nome que está na primeira posição do vetor criado pelo split()

    return firstName;;
}

let userName = getFirstName("Maria Luiza Abrami", " ");
console.log("Seja bem vindo(a) " + userName);

userName = getFirstName("Patricia-Almeida-de-Santos", "-");
console.log("Seja bem vindo(a) " + userName);