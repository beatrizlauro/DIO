/* Objetivo:
Criar uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói,
depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
*/ 

let nomeHeroina = "Black Widow";
let experience = 1928;
let liga;

if (experience < 1000){
    liga = "Ferro";
} else if (experience <= 2000){
    liga = "Bronze";
} else if (experience <= 5000){
    liga = "Prata";
} else if (experience <= 7000){
    liga = "Ouro";
} else if (experience <= 8000){
    liga = "Platina";
} else if (experience <= 9000){
    liga = "Ascendente";
} else if (experience <= 10000){
    liga = "Imortal";
} else{
    liga = "Radiante";
}

console.log("A heroína de nome " + nomeHeroina + " está no nível " + liga + ".");