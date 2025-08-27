// Código para determinar o nível de um herói com base na experiência (xpHeroi)

// Definindo o nome do herói e sua experiência

let nomeHeroi = "Superman";
let xpHeroi = 9800;

// Verifica o nível do herói com base na experiência (xpHeroi) Utilizando if para determinar o nível do herói
if (xpHeroi <= 1000) {
  console.log("O herói " + nomeHeroi + " está no nível Ferro");
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
  console.log("O herói " + nomeHeroi + " está no nível Bronze");
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
  console.log("O herói " + nomeHeroi + " está no nível Prata");
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
  console.log("O herói " + nomeHeroi + " está no nível Ouro");
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
  console.log("O herói " + nomeHeroi + " está no nível Platina");
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
  console.log("O herói " + nomeHeroi + " está no nível Ascendente");
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
  console.log("O herói " + nomeHeroi + " está no nível Imortal");
} else if (xpHeroi >= 10001) {
  console.log("O herói " + nomeHeroi + " está no nível Radiante");
} else {
  console.log("Nível de herói desconhecido");
}
