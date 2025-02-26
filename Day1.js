function comparar(a, b) {
  let typeOfa = typeof (a);
  let typeOfb = typeof (b);

  if (a == b) {
    let valor = "tem o mesmo valor";
    if (typeOfa == typeOfb) {
      console.log(`As variáveis ${a} e ${b} ${valor} e mesmo tipo`);
    } else {
      console.log(`As variáveis ${valor}, mas tipos diferentes`);
    }
  } else {
    if (typeOfa == typeOfb) {
      console.log(`As variáveis não tem o mesmo valor, mas tem o mesmo tipo`);
    } else { 'As variáveis não tem o mesmo valor e nem o mesmo tipo' }

  }
}

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