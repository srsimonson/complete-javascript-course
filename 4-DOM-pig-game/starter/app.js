/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

// Challenges
[ ] - Player loses entire score if they roll 2 6's in a row. (HINT: save previous score in dice roll.)
[ ] - Add input field to HTML where players can set the winning score themselves. (HINT: .value property)
[ ] - Add a 2nd dice. Player loses his score when 1 of them is a 1. (HINT: you will need CSS to position the 2nd dice, so look at the CSS for the first one.)

*/

let scores, roundScore, activePlayer;
let gamePlaying = true;

init();

// Function we pass into another function - callback function.
// Anonymous function. No name, can't be reused.
document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        let dice = Math.floor( Math.random() * 6 ) + 1;
        var diceDOM = document.querySelector('.dice')
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        if (dice !== 1 ) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){

    if (gamePlaying) {
        //when click hold...
        // Add current score to global score
        scores[activePlayer] += roundScore;

        // update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

        // Check if the player won the game. 
        if ( scores[activePlayer] >= 20 ) {
            document.querySelector('#name-' + activePlayer ).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
})

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [ 0, 0 ];
    roundScore = 0;
    activePlayer = 0;
    // document.querySelector("#current-" + activePlayer).textContent = dice;
    // document.querySelector("#current-" + activePlayer).innerHTML = '<em>' + dice + '<em>';
    // var x = document.querySelector('#score-0').textContent;

    // Change CSS target dice ID, with 'style'
    document.querySelector(".dice").style.display = 'none';

    // You can use querySelector or getElementById, which is faster.
    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
    document.getElementById('name-0').textContent = 'Player 1'
    document.getElementById('name-1').textContent = 'Player 2'
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}