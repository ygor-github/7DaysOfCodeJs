/* Script of Day 3 */

let gameContent = document.getElementById('gameContent');
let game = document.getElementById('game');
let play = document.getElementById('play');
game.addEventListener('submit', function (event) {
	event.preventDefault();
	let nickName = document.getElementById('nickName').value;
	messageWelcome = `<h4>Olá ${nickName}!</h4>\n <p>Seja Bem-Vindo ao Jogo!</p>\n\n <div class="mb-3">
  <label for="areaSelecionada" class="form-label">Você quer seguir para:</label>
  <select class="form-select" id="areaSelecionada" name="areaSelecionada">
    <option selected disabled>Selecione uma opção</option>
    <option value="front-end">Área de Front-End</option>
    <option value="back-end">Área de Back-End</option>
  </select>
</div>`;

	gameContent.innerHTML = messageWelcome;
	play.type = 'button';
	play.innerText = 'Continuar';

	let currentQuestion = 1;
	play.addEventListener('click', function () {
		if (currentQuestion === 1) {
			alert('Pregunta 3');
		}
	})
});
