import GoblinCell from './GoblinCell';
import GoblinGame from './GoblinGame';
import GoblinGameField from './GoblinGameField';

function createGoblinControl() {
  const controls = document.querySelector('.controls');
  const taskField = document.querySelector('.task-field');

  const button = document.createElement('button');
  button.classList.add('control');
  button.textContent = 'Goblinslayer';
  controls.insertAdjacentElement('beforeEnd', button);

  button.addEventListener('click', () => {
    taskField.innerHTML = '';

    const gameField = new GoblinGameField(4, 4, GoblinCell);

    const game = new GoblinGame(gameField);

    game.start();
  });
}

function main() {
  createGoblinControl();
}

main();
