# Bem vindo(a)!
Este repositório será utilizado durante o BootCamp Start #6 da GFT na [Dio](https://www.dio.me/)

# Variáveis e Constantes
### Variáveis 
Elas podem ter seu valor alterado ✔
- Para declarar variáveis utilizamos ***let***
    - Exemplo: ```let nomePokemon = "Pikachu"```
### Constantes
São imutáveis, não podem ter seu valor alterado ❌
- Para declarar constantes utilizamos ***const***
    - Exemplo: ```const notificacao = "Pokemon Go diz: "```

# Tipos de Variáveis
- String: armazena ***textos***
    - Exemplo: ```nomePokemon = "Pikachu"```
- Number: armazena ***números***
    - Exemplo: ```nivelPokemon = 20```
- Boolean: armazena variáveis lógicas como ***true*** e ***false***
    - Exemplo: ```selecionavel = true```
#
Por boas práticas, armazenamos números como telefone, cpf e entre outros como tipo string, pois não faremos nenhuma operação matemática com eles. Além disso sendo do tipo string podemos utilizar caracteres especiais.👍
- Exemplo: ```let numeroTelefone = "(11)984713388"```
#
**Observação:** Em JavaScript não é obrigatório tipar suas variáveis🤷‍♀️
#
[**Para mais informações da aula da Dio**](https://helpful-jump-17b.notion.site/Mapa-de-aventura-91f3e9bd923842149d4dba754dc65c07?p=4fdc1ae1745a4b2b819d12cb4f51aaa1&pm=c)

# Vetores e Matrizes
### Vetores
- Declarando e atribuindo valores a um vetor:
    - ```let nomesPokemon = ["pikachu", "charmander", "bulbasaur"]```
- Para poder buscar por um valor específico dentro do vetor é necessário passar a sua posição/índice:
    - ```console.log(nomesPokemon[0])```
    - No exemplo apresentado acima, o nome que vai aparecer no console será "pikachu", que é o valor que está na posição/índice 0
    - Observação: Todo vetor começa na posição/índice 0
- Podemos utilizar várias funções, alguns exemplos são:
    - ```nomesPokemon.pop()``` //Remove o último elemento do array
    - ```nomesPokemon.shift()``` //Remove o primeiro elemento do array
    - ```nomesPokemon.length``` //Retorna a quantidade de posições do array
    - Temos diferenças entre as funções apresentadas acima, enquanto pop e shift são métodos, o length é uma propriedade. Dentro de IDE's como o Visual Studio Code, por exemplo, é possível diferenciá-los(métodos e propriedades) pelo ícone que fica na sua frente.
### Matrizes
- Declarando e atribuindo valores a uma matriz:
    - ```let timePokemon = [["pikachu", "M", 1], ["charmander", "F", 3]]```
    - Criamos uma matriz 2x3, ou seja, ela possui 2 linhas e 3 colunas
- Assim como no vetor, para buscar por um valor específico é necessário passar a sua posição/índice, no caso de uma matriz igual a que criamos no exemplo acima seriam 2 posições/índices, sendo uma representando a linha e a outra a coluna em que o valor se encontra:
    - ```console.log("O pokemon " + timePokemon[1][0] + " é do sexo " + timePokemon[1][1] + " e está no nível " + timePokemon[1][2]);```
    - No exemplo apresentado acima o console irá apresentar a resposta: "O pokemon charmander é do sexo F e está no nível 3"
#
[**Para mais informações sobre arrays em JavaScript**](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
####
[**Para mais informações da aula da Dio**](https://helpful-jump-17b.notion.site/Mapa-de-aventura-91f3e9bd923842149d4dba754dc65c07?p=1f6b429fcc5e4bf9b274d8d75e909faa&pm=c)

# Operadores e Expressões
Temos alguns tipos de operadores:
- Operadores Aritméticos
    - são os matemáticos
    - utilizados para realizar cálculos
    - '+' também é utilizado para realizar concatenações
- Operadores Relacionais
    - utilizados para realizar comparações entre variáveis
    - **Observação:** cuidado com o __Case Sensitive__, pois ao utilizarmos o '===' para compararmos valor e formato das variáveis ele também identifica se há diferença no tamanho das letras, ou seja, ele diferencia letra minúscula de letra maiúscula. Exemplo: ```let texto = "felipe"``` ```console.log(texto === "Felipe")``` a resposta será ```false```
- Operadores Lógicos
    - utilizados para determinar se algo atende as suas condições ou não
    - boolean(true ou false)
- Operadores de Atribuição
    - utilizados para atribuir valor as variáveis/constantes
- Operadores de Incremento e Decremento
    - utilizados para aumentar e diminuir um valor
### Definição de Escopo em Expressões Aritméticas
É importante você definir corretamente o escopo da expressão matemática que está sendo realizada no seu código. Repare nas diferenças que ocorrem nos resultados dos exemplos abaixo:
- ```let resultado = 2 * 5 + 5 - 10```
    - **resultado** = 5
- ```let resultado = 2 * (5 + 5) - 10```
    - **resultado** = 10
- ```let resultado = 2 * (5 + 5 - 10)```
    - **resultado** = 0
######
Através dos exemplos é possível perceber que o escopo interfere diretamente no resultado da expressão, isso se deve por conta da ordem seguida na matemática, na qual a multiplicação e divisão vem antes de adição e subtração. Por isso, é necessário ter muita atenção na hora de desenvolver expressões matemáticas no seu código.😉
#
[**Para mais informações da aula da Dio**](https://helpful-jump-17b.notion.site/Mapa-de-aventura-91f3e9bd923842149d4dba754dc65c07?p=bd2a3b0673664c6d977a0686ba0d86cd&pm=c)

# Estruturas Condicionais
### **if**
- verifica uma condição e apenas executa seus comandos quando ela é atendida
### **else**
- ele executa seus comandos quando o 'if' não é atendido
### **else if**
- utilizado para que seja possível realizar uma segunda pergunta após o 'if' e antes do 'else'
- chamado de ***if encadeado***
#
[**Para mais informações da aula da Dio**](https://helpful-jump-17b.notion.site/Mapa-de-aventura-91f3e9bd923842149d4dba754dc65c07?p=c5bc44e4b81448a1bb443713e498f016&pm=c)

# Desafios de Código
## Jornada Do Herói
Algumas das minhas anotações sobre esse desafio de código que fiz no bootcamp da GFT pela Dio:
- O método **parseInt()** converte a parte incial da string em um número inteiro, contudo ele tem alguns casos que é necessária atenção, já que ele apenas converte uma string em número se for válido. Entre os seus **casos válidos** estão:
- ```const posicaoInicial = parseInt("10")``` Irá converter para o número 10
- ```const posicaoInicial = parseInt("    10")``` Aqui será 10 também, pois esse método ignora os espaços na string
- ```const posicaoInicial = parseInt("10abc")``` Aqui também será 10, pois como o 10 é a parte inicial da string, esse método ignora o resto depois de 10 que seja inválido, que seriam os caracteres 'abc'
- ```const posicaoInicial = parseInt("10.3")``` Aqui também será 10, pois mesmo que a entrada seja um número decimal, esse método apenas converte para número inteiros, portanto ele ignora o restante que seria o '3'
- Já entre os seus **casos inválidos** estão:
- ```const posicaoInicial = parseInt("abc")``` Aqui ele não converterá para número inteiro, pois não há nenhum valor válido na string
- ```const posicaoInicial = parseInt("abc10")``` Aqui ele também não irá realizar a conversão, pois a parte inicial da string que é 'abc' é inválido, portanto ele já determina a string inválida para conversão e não considera o '10'
- Por conta dos casos inválidos do 'parseInt()' eu utilizei o **isNaN()**, que serve para verificar se o valor não é um número
- Exemplo utilizado no Desafio: 
```
if( isNaN(posicaoInicial) || isNaN(totalPassos)){
    console.log("Erro: entrada inválida")
}
```
- No exemplo acima, verificamos se os valores não são números e caso eles não sejam números significa que a entrada informada pelo usuário era inválida(caso inválido para o parseInt). Então apresentamos a mensagem de erro, mas caso esse if esteja errado e os valores sejam números, então ele vai executar o restante do código do desafio.