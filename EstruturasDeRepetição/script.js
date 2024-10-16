//Basicamente o laço for vai continuar se repetindo enquanto o contador(variável 'i') for menor que 4
for(let i = 0; i < 4; i++){
    console.log(i);
    console.log("Adicionando mais 1 ao contador");
}

//Exemplo de laço for
let pontosDeVida = 0;

for(let i = 1; i <= 10; i++){
    pontosDeVida += 1; //Acumulando pontos de vida
    console.log("Tomou poção mágica " + i);
}

console.log(pontosDeVida + " Totais");

//Exemplo while
let contador = 0;
while(contador < 3){
    console.log("ola");
    contador++;
}

//Exemplo do while
//Sua diferença com o while é que primeiro ele executa e depois ele avalia a condição
//Basicamente ele garante pelo menos 1 execução
//Para escolher do while ou while vai depender muito qual é a lógica que seu código irá seguir
let cont = 0;

do{
    console.log("ola");
    contador++;
} while(contador < 3);