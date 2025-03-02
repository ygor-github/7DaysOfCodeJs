let content = document.getElementById('content');
let negationButton = document.getElementById('negation');
let sendButton = document.getElementById('send');
let enquete = document.getElementById('enquete');

enquete.addEventListener('submit', function (event) {
    // Prevenir la actualización de la página
    event.preventDefault();
    let userName = document.getElementById('userName').value;
    let age = document.getElementById('age').value;
    let learningCode = document.getElementById('learningCode').value;
    let message1 = `Olá ${userName}!, você tem ${age} anos e já está aprendendo ${learningCode}`;
let message2 = `Você gosta de estudar ${learningCode}`;
let message3 = `Muito bom! Continue estudando e você terá muito sucesso en ${learningCode}!`;
let message4 = `Ahh que pena... Já tentou aprender outras linguagens?`;
let currentMessage = 0;
let contentMain = content;

    content.innerHTML = '<img src="/img/hi.webp" />' + message1;
    sendButton.type = 'button';
    sendButton.innerText = 'Continuar';
    negationButton.classList.remove('d-none');

});


function nextMessage(){
if (currentMessage === 0){
alert('Boton clicado SI');
content.innerHTML = `Você gosta de estudar ${learningCode} ?`;
 sendButton.innerText = 'SI';
    negationButton.innerText = 'NO';
};


sendButton.addEventListener('click', nextMessage);
negationButton.addEventListener('click', nextMessage);

/*
sendButton.addEventListener('click', handleButtonClick);
negationButton.addEventListener('click', handleButtonClick);
let message2 = `Você gosta de estudar ${learningCode} ?\nResponda com o número 1 para SIM ou 2 para NÃO.?`;
function handleButtonClick(event){
    if (EventTarget === sendButton){
        content.innerText =message2;
    }

}
*/
// let confirm = prompt(`Você gosta de estudar ${learningCode} ?\nResponda com o número 1 para SIM ou 2 para NÃO.?`);
// if (confirm == 1) {
//     alert(`Muito bom! Continue estudando e você terá muito sucesso en ${learningCode}!`);
// } else {
//     alert(`Ahh que pena... Já tentou aprender outras linguagens?`);
// }



