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
 

    let resultMessage = `Olá ${userName}!, você tem ${age} anos e já está aprendendo ${learningCode}`;
    content.innerHTML = '<img src="/img/hi.webp" />' + resultMessage;
    
    sendButton.type = 'button';
    sendButton.innerText = 'Continuar';
    negationButton.classList.remove('d-none');

});

sendButton.addEventListener('click', handleButtonClick);
negationButton.addEventListener('click', handleButtonClick);
let message2 = `Você gosta de estudar ${learningCode} ?\nResponda com o número 1 para SIM ou 2 para NÃO.?`;
function handleButtonClick(event){
    if (EventTarget === sendButton){
        content.innerText =message2;
    }

}

// let confirm = prompt(`Você gosta de estudar ${learningCode} ?\nResponda com o número 1 para SIM ou 2 para NÃO.?`);
// if (confirm == 1) {
//     alert(`Muito bom! Continue estudando e você terá muito sucesso en ${learningCode}!`);
// } else {
//     alert(`Ahh que pena... Já tentou aprender outras linguagens?`);
// }



