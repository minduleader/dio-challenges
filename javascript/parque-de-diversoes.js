function podeUsarBrinquedo(altura, alturaMinima) {
    if (altura < alturaMinima) {
        return false;
    } else {
        return true;
    }
}
function calcularDiferencaAltura(altura, alturaMinima) {
    if (altura < alturaMinima) {
        const faltam = alturaMinima - altura;
        alert(`Ainda faltam ${faltam.toFixed(2)} de altura`);
    } else {
        const sobra = altura - alturaMinima;
        alert(`Sobram ${sobra.toFixed(2)} de altura`);
    }
}

function calcularTotalIngressos(quantidade, preco) {
    return quantidade * preco;
}

function calcularTroco(valorPago, valorTotal) {
    return valorTotal - valorPago
}

function calcularTotalBrinquedos(precoBrinquedo1, precoBrinquedo2) {
    return precoBrinquedo1 + precoBrinquedo2
}

const preco = 35;
const altura = Number(prompt('Insira a sua altura'));
const alturaMinima = 1.6;
const quantidade = Number(prompt("Quantos ingressos?"))
const valorPago = Number(prompt("Qual o valor da nota que vc vai usar pra pagar?"))

let total = calcularTotalIngressos(quantidade, preco);
let troco = calcularTroco(total, valorPago)

if (podeUsarBrinquedo(altura, alturaMinima)) {
    alert('Você pode usar esse brinquedo');
} else {
    alert('Você não pode usar esse brinquedo');
}
calcularDiferencaAltura(altura, alturaMinima);
alert(`Total: R$ ${total.toFixed(2)}`)
alert(`Seu troco é: R$ ${troco.toFixed(2)}`)