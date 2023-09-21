'use strict';
var currentScore1 = Number('');
var currentScore2 = Number('');
var totalScore1 = Number('');
var totalScore2 = Number('');
var dice = '';


function rollDice(){
    dice = Math.trunc((Math.random() * 6) + 1);
    return dice;
}

function diceImage(){
    document.querySelector('.dice').src = 'dice-' + dice + '.png';
}

function calcCurrentScore(){
    if(dice === 1){
        if(document.querySelector('.player--0').classList.contains('player--active')){
        currentScore1 = 0;
        playerEndTurn();
        } else if(document.querySelector('.player--1').classList.contains('player--active')){
            currentScore2 = 0;
            playerEndTurn();
        }
    } else if(document.querySelector('.player--0').classList.contains('player--active')){
    currentScore1 = currentScore1 + dice;
    return currentScore1;
    } else{
        currentScore2 = currentScore2 + dice;
        return currentScore2;
    }
}

function playerOneEnd(){
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
    totalScore1 = currentScore1 + totalScore1;
    currentScore1 = 0;
    return currentScore1;
    return totalScore1;
}

function playerTwoEnd(){
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
    totalScore2 = currentScore2 + totalScore2;
    currentScore2 = 0;
    return currentScore2;
    return totalScore2;
}

function playerEndTurn(){
    if(document.querySelector('.player--0').classList.contains('player--active')){
        playerOneEnd();
    } else{
        playerTwoEnd();
    }
}

function addCurrentScore(){
    if(document.querySelector('.player--0').classList.contains('player--active')){
    totalScore1 = totalScore1 + currentScore1;
    return totalScore1;
    currentScore1 = 0;
    return currentScore1;
    } else if (document.querySelector('.player--1').classList.contains('player--active')){
        totalScore2 = totalScore2 + currentScore2;
        return totalScore2;
        currentScore2 = 0;
        return currentScore2;
    }
}

function displayCurrentScore(){
    document.querySelector('#current--0').textContent = currentScore1;
    document.querySelector('#current--1').textContent = currentScore2;
}

function displayTotalScore(){
    document.querySelector('#score--0').textContent = totalScore1;
    document.querySelector('#score--1').textContent = totalScore2;
}

function checkGameOver(){
    if(totalScore1 >= 25){
        alert('Player 1 wins!');
        gameReset();
    } else if(totalScore2 >= 25){
        alert('Player 2 wins!');
        gameReset();
    }
}

function gameReset(){
    currentScore1 = 0;
    currentScore2 = 0;
    totalScore1 = 0;
    totalScore2 = 0;
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    displayCurrentScore();
    displayTotalScore();
}

document.querySelector('.btn--roll').addEventListener('click', function(){
    rollDice();
    diceImage();
    calcCurrentScore();
    displayCurrentScore();
})

document.querySelector('.btn--hold').addEventListener('click', function(){
    playerEndTurn();
    displayTotalScore();
    displayCurrentScore();
    checkGameOver();
})

document.querySelector('.btn--new').addEventListener('click', function(){
    gameReset();
})