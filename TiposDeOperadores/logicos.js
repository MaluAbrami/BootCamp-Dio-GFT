//AND ( && ) só retorna verdadeiro se as duas condições forem verdadeiras
let idade = 18;
let vistoVerificado = true;
let resultado = (idade >= 18) && (vistoVerificado === true);
console.log(resultado);

/* Outras possibilidades
idade = 17;
resultado = (idade >= 18) && (vistoVerificado === true);
console.log(resultado);

vistoVerificado = false;
resultado = (idade >= 18) && (vistoVerificado === true);
console.log(resultado);
*/

//OR ( || ) retorna verdadeiro caso alguma das duas condições seja verdadeira
let tempo = "sol";
let item = "guarda chuva";
let podeSair = (tempo !== "chuva") || (item === "guarda chuva");
console.log("nosso personagem pode sair? " + podeSair);

/* Outras possibilidades
tempo = "chuva";
item = "guarda chuva";
podeSair = (tempo !== "chuva") || (item === "guarda chuva");
console.log("nosso personagem pode sair? " + podeSair);

tempo = "sol"
item = "pá";
podeSair = (tempo !== "chuva") || (item === "guarda chuva");
console.log("nosso personagem pode sair? " + podeSair);

tempo = "chuva"
item = "pá";
podeSair = (tempo !== "chuva") || (item === "guarda chuva");
console.log("nosso personagem pode sair? " + podeSair);
*/

//NOT ( ! ) nega uma afirmação, comumente utilizado para alterar a polaridade de um valor
let clima = "chuva";
let result = clima !== "chuva";
console.log(result);

clima = "chuva";
result = clima === "chuva";
console.log(!result); //nega o result

clima = "chuva";
result = clima === "chuva";
console.log(!!result); //Por ter 2 !! ele nega e depois nega a própria negação, portanto se torna true