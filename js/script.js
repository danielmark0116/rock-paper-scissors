'use strict';

var gameField = document.querySelector("#game-winner");
var playerScoreField = document.querySelector("#player-score");
var robotScoreField = document.querySelector("#robot-score");
var roundCountField = document.querySelector("#round-count");

// playerScoreField.innerHTML = 0;
// robotScoreField.innerHTML = 0;

var playerScore = 0;
var robotScore = 0;
var roundCount = 1;

roundCountField.innerHTML = 1;


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
        playerScore++;
        playerScoreField.innerHTML = playerScore;
        return "player";
    } else if ((x === 1 && y === 2) || (x === 2 && y === 3)) {
        robotScore++;
        robotScoreField.innerHTML = robotScore;
        return "robot";
    } else {
        robotScore++;
        robotScoreField.innerHTML = robotScore;
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

// ANIMATIONS
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

// MAX round count and then:
var gameFinish = (maxRounds, roundNumber) => {
    if (maxRounds === roundNumber) {
        roundCountField.innerHTML = "finish";
    }
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
    roundCount++;
    roundCountField.innerHTML = roundCount;
    gameFinish(10, roundCount);

});

playerPaper.addEventListener('click', function () {

    var aiMove = randomChar(3);
    aiMoveShow(aiMove);
    gameField.innerHTML = whoWins(2, aiMove);
    gameAnimation();
    roundCount++;
    roundCountField.innerHTML = roundCount;
    gameFinish(10, roundCount);

});

playerScissors.addEventListener('click', function () {

    var aiMove = randomChar(3);
    aiMoveShow(aiMove);
    gameField.innerHTML = whoWins(3, aiMove);
    gameAnimation();
    roundCount++;
    roundCountField.innerHTML = roundCount;
    gameFinish(10, roundCount);

});



// var aiMove;


// gameField.innerHTML = aiMove;