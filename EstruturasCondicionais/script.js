let ehLigado = false;

if(ehLigado){ //Para que o comando aconteça, é necessário que a condição passada no 'if' seja 'true'
    console.log("Executou o comando");
}
else{ //Caso contrário, ou seja, se a condição for 'false' vai enviar uma mensagem de erro
    console.log("Erro ao executar o comando");
}



let possuiOvos = false;
let itensComprados = "";

if(possuiOvos){ //Se tiver ovos, compra leite e ignora o caso 'else', se não vai pro caso 'else'
    itensComprados = "Leite";
}
else{ //Caso contrário, ou seja, se não tiver ovos, compra lasanha congelada
    console.log("Passou na sessão de congelados");
    itensComprados = "Lasanha congelada";
}
console.log("Item comprado: " + itensComprados);



let nivelDeFome = 1;

if(nivelDeFome === 1){ //Primeiro verifica se o nivel de fome é igual a 1
    console.log("Você está com pouca fome");
} else if(nivelDeFome === 2){ //Caso o primeiro if seja falso, então verifica se é igual a 2
    console.log("Você está com muita fome");
} else{ //Se ambos os if forem falsos, então executa os comandos do 'else'
    console.log("Você comeria mais que o pica pau");
}