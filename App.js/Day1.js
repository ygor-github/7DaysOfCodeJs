function comparar() {
  alert(`A seguinte função compara duas variáveis e verifica se elas tem o mesmo valor e o mesmo tipo.`);
  let a = prompt("Digite o valor da primeira variável");
  let b = prompt("Digite o valor da segunda variável");

  if (a == b) {
    if (typeof(a) === typeof (b)) {
      alert(`As variáveis ${a} e ${b} tem o mesmo valor e mesmo tipo`);
    } else {
      alert(`As variáveis ${a} e ${b} tem o mesmo valor, mas tipos diferentes`);
    }
  }
}
/*

} else {
if (a === b) {
  alert(`As variáveis ${a} e ${b} não tem o mesmo valor, mas tem o mesmo tipo`);
} else {
  alert(`As variáveis ${a} e ${b}  não tem o mesmo valor, mas sim o mesmo tipo`);
}
}
}

*/

/* if (COMPARAR O numeroUm e a stringUm) {
console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (COMPARAR O numeroTrinta e a stringTrinta) {
console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (COMPARAR O numeroDez e a stringDez) {
console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
} 
*/