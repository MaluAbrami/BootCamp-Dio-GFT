//Declarando uma função
//As regras para declarar o nome de uma função são basicamente as mesmas que usamos para declarar variáveis
//Mas de preferência utilize verbos como nomes para suas funções
function  torrar(){
    console.log("Torrando pão");
    ejetarPao();
}

function ejetarPao(){
    console.log("Preparando para ejetar o pão");
    console.log("Finalizado");
}

torrar(); //Chamando a função

//Segundo exemplo
//Cada função deve ter apenas uma tarefa, para facilitar a correção de erros no código

function main(){
    getData();
    checkValues();
    sendToDataBase();
}

function getData(){ //Função que pega todos os dados
    console.log("\nPegando dados do usuário");
}

function checkValues(){
    console.log("Validando dados");
}

function sendToDataBase(){
    console.log("Cadastrando dados");
}

main(); //chamando a função principal que chama todas as outras