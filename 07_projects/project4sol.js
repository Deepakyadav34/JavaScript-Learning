let randomNum = parseInt(Math.random() * 100 + 1);
// console.log(randomNum)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];

let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (guess < 1) {
    alert('please enter a valid number');
  } else if (guess > 100) {
    alert('please enter a valid number');
  } else if (isNaN(guess)) {
    alert('please enter a valid number');
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over!!! Random Number was: ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }

  function checkGuess(guess) {
    if (guess === randomNum) {
      displayMessage(`You Guessed it Right`);
      endGame();
    } else if (guess < randomNum) {
      displayMessage(`Number is too low`);
    } else {
      displayMessage(`Number is too high`);
    }
  }

  function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `;
  }

  function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
  }

  function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);

    playGame = false;
    newGame();
  }

  function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNum = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numGuess} `;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);

      playGame = true;
    });
  }
}
