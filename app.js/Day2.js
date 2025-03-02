let content = document.getElementById('content');
let copyBody = content.cloneNode(true);
let contentMain = content;
let negationButton = document.getElementById('negation');
let sendButton = document.getElementById('send');
let enquete = document.getElementById('enquete');
let currentMessage = 1;

enquete.addEventListener('submit', function (event) {
    // Prevenir la actualización de la página
    event.preventDefault();

    let userName = document.getElementById('userName').value;
    let age = document.getElementById('age').value;
    let learningCode = document.getElementById('learningCode').value;
    let message1 = `Olá ${userName}!, você tem ${age} anos e já está aprendendo ${learningCode}`;
    let message2 = `Você gosta de estudar ${learningCode}`;
    let message3 = `Muito bom! Continue estudando e você terá muito sucesso en ${learningCode}!`;
    let message4 = `Ahh que pena... Mas pode aprender outras linguagens!`;

    contentMain.innerHTML = '<img src="/img/hi.webp" />' + message1;
    sendButton.type = 'button';
    sendButton.innerText = 'Continuar';
    negationButton.classList.remove('d-none');

    sendButton.addEventListener('click', function () {
        console.log(currentMessage);
        if (currentMessage === 1) {
            contentMain.innerHTML = message2;
            sendButton.innerText = 'SI';
            negationButton.innerText = 'NO';
            console.log(currentMessage);
        } else if (currentMessage === 2) {
            contentMain.innerHTML = message3;
            sendButton.classList.add('d-none');
            negationButton.innerText = 'Salir';
        }
        currentMessage += 1;

    });

    negationButton.addEventListener('click', function () {
        console.log(currentMessage);
        if (currentMessage === 1 || currentMessage === 3 || currentMessage === 4) {
            location.reload();
        } else if (currentMessage === 2) {
            contentMain.innerHTML = message4;
            sendButton.classList.add('d-none');
            negationButton.innerText = 'Salir';
        }
        currentMessage += 1;
    });

});

