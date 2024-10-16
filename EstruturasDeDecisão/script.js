let fruta = "banana";
//O switch case também pode ser utilizado como número, no lugar da string com nome da fruta poderia ser número também
//Sem o 'break', quando cai em um caso ele executa todos os outros casos que estão em sequência
switch(fruta){
    case "laranja":{
        console.log("suco de laranja");
        break;
    }
    case "banana":
    case "morango":{ //Nesse caso, o resultado pode ser banana ou morango
        console.log("vitamina de " + fruta);
        break; //Impede que os próximos casos sejam executados, após executar o case ele "quebra" o switch
    }
    case "maçã":{
        console.log("suco de maçã");
        break;
    }
    default:{ //Quando não for nenhum dos casos, cai no 'default',  muito semelhante ao 'else'
        console.log("suco genérico");
    }
}