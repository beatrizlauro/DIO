function calculoSaldoVitorias(vitorias, derrotas){
    return (vitorias - derrotas);
}

let saldoVitorias = calculoSaldoVitorias(134, 40);
let nivel;

if(saldoVitorias < 10){
    nivel = "Ferro";
} else if(saldoVitorias <= 20){
    nivel = "Bronze";
} else if(saldoVitorias <= 50){
    nivel = "Prata";
} else if(saldoVitorias <= 80){
    nivel = "Ouro";
} else if(saldoVitorias <= 90){
    nivel = "Diamante";
} else if(saldoVitorias <= 100){
    nivel = "Lendário";
} else if(saldoVitorias > 100){
    nivel = "Imortal";
}

console.log(`A heroína tem saldo de ${saldoVitorias} pontos e está no nível ${nivel}.`);