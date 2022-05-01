const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guessesLeft");
let game;

window.addEventListener("keypress", (e) => {
  game.makeGuess(e.key);
  render();
});

const render = () => {
  puzzleEl.innerHTML = "";
  guessesEl.textContent = game.statusMessage;

  game.puzzle.split("").forEach((letter) => {
    const letterEl = document.createElement("span");
    letterEl.textContent = letter;
    puzzleEl.appendChild(letterEl);
  });
};

const startGame = async () => {
  const puzzle = await getPuzzle("1");
  game = new Hangman(puzzle, 5);
  render();
};

document.querySelector("#reset").addEventListener("click", startGame);

startGame();
