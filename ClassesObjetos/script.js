class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        //O "this" representa a própria classe
        this.saborDaMassa = saborDaMassa;
        this.saborRecheio = saborRecheio;
    }

    //Para declarar um método próprio dentro de uma classe não há necessidade de utilizar a palavra "function" na frente do nome
    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`);
    }

    assar(){
        console.log(`Bolo de ${this.saborDaMassa} assando`);
    }
}

let boloFesta = new formaDeBolo("chocolate", "nutella");
let boloPremium = new formaDeBolo("baunilha", "coco");

boloFesta.escrever();
boloPremium.escrever();
boloPremium.assar();