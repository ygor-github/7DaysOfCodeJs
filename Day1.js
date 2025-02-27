// Función para manejar el formulario y evitar que se recargue la página
document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se recargue

    // Obtener los valores de los inputs
    let a = document.getElementById('valor1').value;
    let b = document.getElementById('valor2').value;

    // Obtener los tipos de las variables
    let typeOfa = typeof a;
    let typeOfb = typeof b;

    // Comparar los valores
    if (a == b) { // Comparación no estricta (solo valores)
        let valor = "têm o mesmo valor";
        if (typeOfa === typeOfb) {
            alert(`As variáveis ${a} e ${b} ${valor} e são do mesmo tipo.`);
        } else {
            alert(`As variáveis ${a} e ${b} ${valor}, mas têm tipos diferentes.`);
        }
    } else { // Si los valores no son iguales
        if (typeOfa === typeOfb) {
            alert(`As variáveis ${a} e ${b} não têm o mesmo valor, mas são do mesmo tipo.`);
        } else {
            alert(`As variáveis ${a} e ${b} não têm o mesmo valor, nem são do mesmo tipo.`);
        }
    }
});

// Función que se ejecuta cuando el usuario hace clic en el enlace
function registerform() {
    alert("Formulario interactivo cargado correctamente!");
}
