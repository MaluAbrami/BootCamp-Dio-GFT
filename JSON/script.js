/*
//Exemplo SEM JSON
let name = "Felipe";
let age = 28;
let products = ["mouse 2xwm", "teclado mecânico", "monitor"];
let productsValues = [29.90, 129.99, 899.99];

generateInvoice(name, age, products, productsValues);

function generateInvoice(name, age, products, productsValues){
    console.log("O comprador é " + name);
    console.log("A idade é " + age);
    console.log("------------------------");
    console.log("O produto é " + products[0]);
    console.log("O valor é " + productsValues[0]);
}
*/

//Exemplo UTILIZANDO JSON

//Declarando uma estrutura de dados JSON
let invoice = {
    name: "Felipe",
    age: 28,
    products: {
        0: ["mouse 2xwm", 29.90],
        1: ["teclado mecânico", 129.99],
        2: ["monitor", 899.99],
        3: ["tv de 100 polegadas", 10000.90]
    }
}

generateInvoice(invoice);

function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.name}`);
    console.log(`A idade é ${invoice.age}`);
    console.log("-------------------------");

    for(let index in invoice.products){ // Utilizamos o 'for' com 'in', assim garantimos que irá percorrer todos os produtos que existem no 'invoice'
        let [productName, productPrice] = invoice.products[index];
        console.log(`- ${productName}: R$ ${productPrice}`);
    }
}
