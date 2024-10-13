# Bem vindo(a)!
Este repositório será utilizado durante o BootCamp Start #6 da GFT na [Dio](https://www.dio.me/)

# Variáveis e Constantes
### Variáveis 
Elas podem ter seu valor alterado
- Para declarar variáveis utilizamos ***let***
    - Exemplo: ```let nomePokemon = "Pikachu"```
### Constantes
São imutáveis, não podem ter seu valor alterado
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
Por boas práticas, armazenamos números como telefone, cpf e entre outros como tipo string, pois não faremos nenhuma operação matemática com eles. Além disso sendo do tipo string podemos utilizar caracteres especiais.
- Exemplo: ```let numeroTelefone = "(11)984713388"```
#
**Observação:** Em JavaScript não é obrigatório tipar suas variáveis
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
- Declarando e atribuindo valores a um vetor:
    - ```let timePokemon = [["pikachu", "M", 1], ["charmander", "F", 3]]```
    - Criamos uma matriz 2x3, ou seja, ela possui 2 linhas e 3 colunas
- Assim como no vetor, para buscar por um valor específico é necessário passar a sua posição/índice, no caso de uma matriz igual a que criamos seriam 2 posições/índices, sendo uma representando a linha e a outra a coluna em que o valor se encontra:
    - ```console.log("O pokemon " + timePokemon[1][0] + " é do sexo " + timePokemon[1][1] + " e está no nível " + timePokemon[1][2]);```
    - No exemplo apresentado acima o console irá apresentar a resposta: "O pokemon charmander é do sexo F e está no nível 3"
#
[**Para mais informações sobre arrays em JavaScript**](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
####
[**Para mais informações da aula da Dio**](https://helpful-jump-17b.notion.site/Mapa-de-aventura-91f3e9bd923842149d4dba754dc65c07?p=1f6b429fcc5e4bf9b274d8d75e909faa&pm=c)