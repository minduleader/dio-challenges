const nome = "Arthur"

console.log(`No momento você tem 0 de XP`)

for (let xp = 0; xp < 11000; xp += 1001) {  
    if (xp < 1000) {
        nivelHeroi = "Ferro"
    } else if (xp < 2001) {
        nivelHeroi = "Bronze"
    } else if (xp < 5001) {
        nivelHeroi = "Prata"
    } else if (xp < 7001) {
        nivelHeroi = "Ouro"
    } else if (xp < 8001) {
        nivelHeroi = "Platina"
    } else if (xp < 9001) {
        nivelHeroi = "Ascendente"
    } else if (xp < 10001) {
        nivelHeroi = "Imortal"
    } else {
        nivelHeroi = "Radiante"
    }

    if (xp > 0) {
        console.log(`Ganhou 1001 de XP, totalizando ${xp} de XP`)
    }
    console.log(`O Herói de nome **${nome}** está no nível de **${nivelHeroi}**`)
}
