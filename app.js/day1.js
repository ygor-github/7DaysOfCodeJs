let value1 = document.getElementById('value1');
let value2 = document.getElementById('value2');
let comparar = document.getElementById('btnComparar');
let limpiar = document.getElementById('btnLimpiar');
let resultado = document.getElementById('resultado');

// Función para manejar el formulario y evitar que se recargue la página
let form = document.getElementById('form1');
form.addEventListener('submit', function (event) {
    // Prevenir la actualización de la página
    event.preventDefault();

    // Obtener los valores de los inputs
    let a = value1.value;
    let b = value2.value;

    // Función para determinar si una cadena es un número
    function isNumeric(value) {
        return !isNaN(value) && value.trim() !== ''; // Asegura que no sea solo un espacio vacío
    }

    // Convertir a número si es posible
    let aNumeric = isNumeric(a) ? parseFloat(a) : a;
    let bNumeric = isNumeric(b) ? parseFloat(b) : b;

    // Obtener tipos originales
    let typeOfa = typeof aNumeric;
    let typeOfb = typeof bNumeric;

    console.log('Botón clicado');


    if (aNumeric == bNumeric) {
        let valor = "têm o mesmo valor";
        if (typeOfa === typeOfb) {
            resultMessage = `Resultado: ( ${a} ) e ( ${b} ) ${valor} e são do mesmo tipo.`;
        } else {
            resultMessage = `Resultado: ( ${a} ) e ( ${b} ) ${valor}, mas têm tipos diferentes.`;
        }
    } else {
        if (typeOfa === typeOfb) {
            resultMessage = `Resultado: ( ${a} ) e ( ${b} ) não têm o mesmo valor, mas são do mesmo tipo.`;
        } else {
            resultMessage = `Resultado: ( ${a} ) e ( ${b} ) não têm o mesmo valor, nem são do mesmo tipo.`;
        }
    }



    // Mostrar el resultado
    document.getElementById('resultado').innerText = resultMessage;

    comparar.disabled = true;
    limpiar.disabled = false;
    value1.disabled = true;
    value2.disabled = true;


    // Mostrar el resultado en el div
    resultado.innerText = resultMessage;
});

limpiar.addEventListener('click', function () {
    document.getElementById('form1').reset();
    comparar.disabled = false;
    limpiar.disabled = true;
    resultado.innerHTML = "Clica en comparar para ver o resultado";
    value1.disabled = false;
    value2.disabled = false;


});