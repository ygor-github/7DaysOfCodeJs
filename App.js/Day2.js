function registerform() {
    let name = prompt('Digite seu nome');
    let age = prompt('Quantos anos você tem?');
    let learningLaguage = prompt('Qual linguagem de programação você está aprendendo?');
    if (name&&age&&learningLaguage) {
        alert(` "Olá ${name}, você tem ${age} anos e já está aprendendo ${learningLaguage}!"`);
        let confirm = prompt(`Você gosta de estudar ${learningLaguage} ?\nResponda com o número 1 para SIM ou 2 para NÃO.?`);
        if (confirm == 1) {
            alert(`Muito bom! Continue estudando e você terá muito sucesso en ${learningLaguage}!`);
        } else {
            alert(`Ahh que pena... Já tentou aprender outras linguagens?`);
        }
       
    }else{
       
        alert('Por favor, preencha todos os campos');
    }
}
