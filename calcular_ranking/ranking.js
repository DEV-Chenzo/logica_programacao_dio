function saldoVitorias(vitorias = 0, derrotas = 0) {
  let saldo = vitorias - derrotas;
  return saldo;
}

function calcularRanking(nivelRanking) {
  let ranking = nivelRanking;
  if (ranking <= 10) {
    return "Ferro";
  } else if (ranking >= 11 && ranking <= 20) {
    return "Bronze";
  } else if (ranking >= 21 && ranking <= 50) {
    return "Prata";
  } else if (ranking >= 51 && ranking <= 80) {
    return "Ouro";
  } else if (ranking >= 81 && ranking <= 90) {
    return "Diamante";
  } else if (ranking >= 91 && ranking <= 100) {
    return "Lendário";
  } else if (ranking >= 101) {
    return "Imortal";
  } else {
    return "Sem ranking";
  }
}

let saldo = saldoVitorias(80, 22);
let nivel = calcularRanking(saldo);

console.log(`O Herói tem de saldo de ${saldo} e está no nível de ${nivel}`);
