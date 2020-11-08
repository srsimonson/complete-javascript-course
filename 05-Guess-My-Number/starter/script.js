'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore = 0;
let guess;

document.querySelector('.check').addEventListener('click', gameLogic);
document.querySelector('.again').addEventListener('click', reset );

function gameLogic () {
    guess = Number(document.querySelector('.guess').value);

    // No input
    if (!guess) {
        displayMessage('No Number');

    // Correct answer
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        displayMessage('Correct!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    // Incorrect answer
    } else if ( guess !== secretNumber) {
        if (score > 1) {
            displayMessage ((guess > secretNumber ? 'lower...' : 'higher...'));
            score--;
            document.querySelector('.score').textContent = score;
        }
    }
};

function reset () {
    score = 20;
    guess = '';
    secretNumber = Math.trunc(Math.random()*20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
};

function displayMessage (message) {
    document.querySelector('.message').textContent = message;
}