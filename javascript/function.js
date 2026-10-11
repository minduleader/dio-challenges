let derrotas = 0
let vitorias = 0

for (let i = 0; i < 12; i++) {
    vitorias += 10
    derrotas += 1        

    let saldoVitorias = calcularSaldoVitorias(vitorias, derrotas)
    let nivel = calcularNivel(saldoVitorias)
    console.log(`O heroi ganhou ${vitorias} partidas, mas perdeu ${derrotas} partidas, totalizando ${saldoVitorias} vitórias`)
    console.log(`O heroi tem saldo de ${saldoVitorias} e está no nível ${nivel}`)
}

function calcularNivel(vitorias) {
    if (vitorias < 10) {
        return "Ferro"
        } else if (vitorias < 21) {
            return "Bronze"
        } else if (vitorias < 50) {
            return "Prata"
        } else if (vitorias < 80) {
            return "Ouro"
        } else if (vitorias < 90) {
            return "Diamante"
        } else if (vitorias < 100) {
            return "Lendário"
        } else {
            return "Imortal"
    }
}

function calcularSaldoVitorias(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas
    return saldoVitorias
}

