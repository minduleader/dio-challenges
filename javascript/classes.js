class formaDeBolo {
    constructor(tamanho, sabor) {
        this.tamanho = tamanho;
        this.sabor = sabor;
    }
    escrever() {
        console.log(`O tamanho do bolo é ${this.tamanho} e o sabor é ${this.sabor}`);
    }
}

let bolo1 = new formaDeBolo("grande", "chocolate");
let boloCasamento = new formaDeBolo("médio", "baunilha");

bolo1.escrever();
boloCasamento.escrever();