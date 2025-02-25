let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';


function comparar(a,b){
  let typeOfa = typeof(a);
  let typeOfb = typeof(b);
  if(a == b){
    console.log(`As variáveis ${a} e ${b} tem o mesmo valor, mas tipos diferentes,o primeiro parametro ${a} é um ${typeOfa} e o segundo ${b} é um ${typeOfb}`)}
  else {
   console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
  }
}

comparar(numeroUm,stringUm);
