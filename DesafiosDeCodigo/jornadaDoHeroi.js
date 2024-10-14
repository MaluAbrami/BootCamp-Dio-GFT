// Para converter os valores inseridos na entrada, utilizamos a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.
const posicaoInicial = parseInt("10");
const totalPassos = parseInt("abc55");

/* 
O parseInt() apenas transforma uma string em int caso seja possível, 
por exemplo: se o usuário digitar 'aaaa' o parseInt() não vai transformá-lo em número,
porém se digitar '5abc' ele vai transformar no número 5, pois ele pega a parte inicial da string.
Além disso, o parseInt() ignora os espaços na string,
por exemplo: '   5' vai retornar como número 5 normalmente e vai ignorar os espaços
Ele também ignora números decimais,
por exemplo: '4.3' ele vai transformar no número 4 apenas
*/

// Utilizamos o isNaN para verificar se os valores não são números, caso eles não sejam número irá retornar a mensagem de erro
if( isNaN(posicaoInicial) || isNaN(totalPassos)){
    console.log("Erro: entrada inválida");
}
else{ //Caso contrário, ou seja, se eles forem do tipo número então quer dizer que a entrada deu certo e é possível realizar o cálculo da posição final do herói
    const posicaoFinal = posicaoInicial + totalPassos;

    console.log("Posicao final do heroi: " + posicaoFinal);
}