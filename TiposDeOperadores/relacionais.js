// = é atribuição
let numero = "1"; //Numero foi definido como tipo string

// == é para comparar o valor
console.log(numero == 1); //Aqui retornará true, pois '==' apenas vai comparar o valor 1 com 1

// === é para comparar o valor e o formato do conteúdo(tipo)
console.log(numero === 1); //Aqui será false, pois numero é tipo string e passamos um parametro do tipo number
console.log(numero === "1"); //Aqui será true, pois numero é tipo string e passamos um paremetro do tipo string e com o mesmo valor 1

// !== é diferente ?
let marca = "Apple";
let resultado = marca !== "Samsung";
console.log(resultado);

//Duas formas de utilizar o '===' e '!=='
let cpfBloqueado = "123.445.222-45";
let cpfUsuario = "222.111.222-09";
let ehCpfBloqueado = cpfUsuario === cpfBloqueado;
console.log("O usuario está barrado? " + ehCpfBloqueado);

let CPFPermitido = "222.555.333-01";
let CPFDoUsuario = "222.555.333-02";
let ehBloqueado = CPFDoUsuario !== CPFPermitido;
console.log("É um usuario invalido? " + ehBloqueado);

//Exceção - Case sensitive
let texto = "felipe";
console.log(texto === "Felipe"); //Vai retornar false, pois texto foi atribuído com felipe com "f" minúsculo e no parâmetro passamos Felipe com "F" maiúsculo

//Exemplo de maior igual
let idadeMinima = 18;
let idadeUsuario = 17;
let idadePermitidaValida = idadeUsuario >= idadeMinima;
console.log(idadePermitidaValida);

idadeUsuario = 18;
idadePermitidaValida = idadeUsuario >= idadeMinima;
console.log(idadePermitidaValida);

//Exemplo de menor igual
let idadeDeCorte = 50;
idadeUsuario = 45;
let resultadoEhTerceiraIdade = idadeDeCorte <= idadeUsuario;
console.log("Usuário é terceira idade? " + resultadoEhTerceiraIdade);

idadeUsuario = 50;
resultadoEhTerceiraIdade = idadeDeCorte <= idadeUsuario;
console.log("Usuário é terceira idade? " + resultadoEhTerceiraIdade);