'use strict';

var gameField = document.querySelector("#game-winner");

// ------------------------------------------------------ 
// RULES: ------------------------------------------
// ------------------------------------------------------ 

/*
ROCK PAPER SCISSORS

1 - Rock
2 - Paper
3 - Scissors
*/


// FUNCTIONS: ------------------------------------------

// generates random integer - range <0, x>
var randomChar = x => {
    return Math.round(Math.random() * (x - 1)) + 1;
};

// evaluates who wins, player or robot or both
var whoWins = (x, y) => {
    // return "test" + x + y;
    if (x === y) {
        return "draw";
    } else if ((x === 1 && y === 3) || (x === 2 && y === 1) || (x === 3 && y === 2)) {
        return "player";
    } else if ((x === 1 && y === 2) || (x === 2 && y === 3)) {
        return "robot";
    } else {
        return "robot";
    }
};

// shows the robot's move
var aiMoveShow = x => {
    var aiBtns = document.querySelectorAll(".btn-game-robot");
    aiBtns[0].classList.remove("active");
    aiBtns[1].classList.remove("active");
    aiBtns[2].classList.remove("active");
    aiBtns[3].classList.remove("active");
    aiBtns[x - 1].classList.add("active");
};

var gameAnimation = x => {
    var container = document.querySelector("#robot-move");
    setTimeout(function () {
        container.classList.add("animated", "bounce");
    }, 150);
    setTimeout(function () {
        gameField.classList.add("animated", "rotateIn");
        gameField.style.display = "block"
    }, 50);
    gameField.style.display = "none";
    container.classList.remove("animated", "bounce");
    gameField.classList.remove("animated", "rotateIn");
    // container.classList.add("animated", "bounce");
};



// CODE: ------------------------------------------


var playerRock = document.querySelector("#rock");
var playerPaper = document.querySelector("#paper");
var playerScissors = document.querySelector("#scissors");



playerRock.addEventListener('click', function () {

    var aiMove = randomChar(3);
    aiMoveShow(aiMove);
    gameField.innerHTML = whoWins(1, aiMove);
    gameAnimation();

});

playerPaper.addEventListener('click', function () {

    var aiMove = randomChar(3);
    aiMoveShow(aiMove);
    gameField.innerHTML = whoWins(2, aiMove);
    gameAnimation();

});

playerScissors.addEventListener('click', function () {

    var aiMove = randomChar(3);
    aiMoveShow(aiMove);
    gameField.innerHTML = whoWins(3, aiMove);
    gameAnimation();

});



var aiMove;


// gameField.innerHTML = aiMove;