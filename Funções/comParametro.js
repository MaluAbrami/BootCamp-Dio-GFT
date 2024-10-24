//Declarando uma função com parametro que nesse caso é o 'pao'
//Lembrando que essa variável 'pao' que é o parametro da nossa função existe apenas dentro da nossa função
//Se você também criar uma variável dentro da sua função ela não poderá ser acessada fora dela
//o 'var', diferente do 'let', é uma variável global que todos conseguem enxergar, poré não é muito recomendado estar utilizando
//Se não for passado nenhum valor para algum parametro da função na hora que ela for chamada, então vai ficar como 'undefined'
//Agora se atribuirmos um valor a nome no parametro da função ele vai ser como um 'default', então caso não seja passado nada ele vai ficar como o valor default Cliente
function torrar(pao, nome = "Cliente", valor){
    console.log("Torrada feita com " + pao);
    console.log("ela é um pedido de " + nome);
    console.log("O valor total é " + valor)
    //console.log(nome);
}

torrar("pão de forma", "maria", 10.9);
torrar("pão integral", "joão", 12.9);
torrar("pão francês");

//Outra possibilidade, porém não é o ideal
torrar("pão de queijo", undefined, 15.9);

//var nome;

//Outro exemplo de funções com parametros(Exemplo "real")
//Quando utilizamos crase, não é necessário concatenar os textos com as variáveis, basta usar o $ em seguida as chaves{} com a variável dentro das chaves
//Isso é o que chamamos e interpolação de strings, que é bem mais comum do que utilizar a concatenação com os +
function createStringConnection(databaseName, user, pass){
    console.log(`\nconnect:DBCONNECT;user=${user};pass=${pass};initial_database=${databaseName}`);
}

createStringConnection("db_products", "Felipe", "9876");