console.log('connected')

//select colored buttons
const greenDiv = document.querySelector(".green");
const redDiv = document.querySelector(".red");
const yellowDiv = document.querySelector(".yellow");
const blueDiv = document.querySelector(".blue");

//function to check clicked color against array color
let checkColorCounter = 0
function checkColor(clickedColor){
    let color = colorSequence[checkColorCounter]
    if (color === clickedColor) {
        checkColorCounter++;
    } else {
        gameOver();
    }
    if(checkColorCounter >= colorSequence.length){
        console.log(playerTimer)
        clearTimeout(playerTimer)
        scoreIncrementer();
        setTimeout(() => {
            console.log('checkColor timer');
            computerTurn();
        }, 1000);
    }
}
var greenAudio = new Audio();
greenAudio.src = "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3";


var redAudio = new Audio();
redAudio.src = "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3";


var yellowAudio = new Audio();
yellowAudio.src = "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3";


var blueAudio = new Audio();
blueAudio.src = "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3";


//toggle sound button
let muteOn = false;
const mute = document.getElementById('toggleSound');
mute.addEventListener("click", () => {
    mute.classList.toggle('active');
    if(mute.classList.contains('active') === true) {
        muteOn = true;
    } else {
        muteOn = false;
    }
})
//functions to toggle to light color when clicked
function greenClick() {
    if (muteOn === false) {
        greenAudio.play();
    }
    console.log('clicked green')
    greenDiv.classList.add("green-light")
    setTimeout(() => {
        greenDiv.classList.remove("green-light") 
    }, 100);
    if(isPlayersTurn === true) {
            checkColor(1);
    }
}

function redClick() {
    if(muteOn === false){
        redAudio.play();
    }
    console.log('clicked red')
    redDiv.classList.add("red-light")
    setTimeout(() => {
        redDiv.classList.remove("red-light") 
    }, 100);
    if(isPlayersTurn === true) {
        checkColor(2);
    }
}

function yellowClick() {
    console.log('clicked yellow')
    if(muteOn === false){
        yellowAudio.play();
    }
    yellowDiv.classList.add("yellow-light")
    setTimeout(() => {
        yellowDiv.classList.remove("yellow-light") 
    }, 100);
    if(isPlayersTurn === true) {
        checkColor(3);
    }
}

function blueClick() {
    if(muteOn === false) {
        blueAudio.play();
    }
    console.log('clicked blue')
    blueDiv.classList.add("blue-light")
    setTimeout(() => {
        blueDiv.classList.remove("blue-light") 
    }, 100);
    if(isPlayersTurn === true) {
        checkColor(4);
    }
}

//toggle light class when color divs are clicked
 greenDiv.addEventListener('click', greenClick)
 redDiv.addEventListener('click', redClick)
 yellowDiv.addEventListener('click', yellowClick)
 blueDiv.addEventListener('click', blueClick)

 //functions to flash lighter color during game
 let nextFlashCounter = 0;
function nextFlash() {
    let color = colorSequence[nextFlashCounter];
    nextFlashCounter++;
    if(nextFlashCounter > colorSequence.length) {
        playerTurn();
    } else {
        setTimeout(() => {
            if(color === 1){
                greenFlash();
            }
            if(color === 2) {
                redFlash();
            } 
            if (color === 3) {
                yellowFlash();
            }
            if(color === 4) {
                blueFlash();
            }  
        }, 300);
    }
}

function greenFlash() {
    if (muteOn === false) {
        greenAudio.play();
    }
    greenDiv.classList.add("green-light")
    setTimeout(() => {
        greenDiv.classList.remove("green-light");
        nextFlash();
    }, 300);
    console.log('flashed green')
}
 function redFlash() {
    if(muteOn === false){
        redAudio.play();
    }
    redDiv.classList.add("red-light")
    setTimeout(() => {
        redDiv.classList.remove("red-light");
        nextFlash();
    }, 300);
    console.log('flashed red')
}
 function yellowFlash() {
    if(muteOn === false){
        yellowAudio.play();
    }
    yellowDiv.classList.add("yellow-light")
    setTimeout(() => {
        yellowDiv.classList.remove("yellow-light");
        nextFlash();
        console.log('flashed yellow')
    }, 300);
    
}
 function blueFlash() {
    if(muteOn === false) {
        blueAudio.play();
    }
    blueDiv.classList.add("blue-light")
    setTimeout(() => {
        blueDiv.classList.remove("blue-light");
        nextFlash();
    }, 300);
    console.log('flashed blue')
}

function randomNumber(){
    let num = Math.floor((Math.random() * 4) + 1);
    return num;
}

let colorSequence = [];
function randomColor() {
    let num = randomNumber();
    colorSequence.push(num);
}

//computer turn function
function computerTurn(){
    isPlayersTurn = false;
    console.log('test')
    randomColor(); //get random color and add it to array
    nextFlashCounter = 0;
    nextFlash();
    }

//player turn function 
let isPlayersTurn = false;
let playerTimer;
function playerTurn() {
    checkColorCounter = 0;
    isPlayersTurn = true;
    playerTimer = setTimeout(() => {
       gameOver();
    }, 3000 + score * 300);
   console.log(playerTimer)
}

//select span of score and set the value to a variable
let gameScoreSpan = document.querySelector('#gameScoreSpan');
let score = gameScoreSpan.innerHTML;
//score incrementer function
function scoreIncrementer() {
    //var score value increments and DOM manipulation to change score for player
    score++;
    gameScoreSpan.innerHTML = score
}
 
function clearArray(array) {
    while (array.length) {
      array.pop();
    }
  }

function reset() {
    score = 0;
    gameScoreSpan.innerHTML = score
    clearArray(colorSequence);
    highScoreAlert.style.display = "none";
    gameOverAlert.style.display = "none";
}

const start = document.querySelector('#start'); //select start button
start.addEventListener('click', () => { //when player clicks 'start' button
    reset();
    computerTurn(); 
});

const gameOverAlert = document.getElementById('gameover-alert');
const highScoreAlert = document.getElementById('highscore-alert');
let highScoreSpan = document.querySelector('#highScoreSpan');
function gameOver() {
    if(highScoreSpan.innerHTML < score){
        gameOverAlert.style.display = "block";
        highScoreAlert.style.display = "block";
        highScoreSpan.innerHTML = score;
    } else {
        gameOverAlert.style.display = "block";
    }
    setTimeout(() => {
        reset();
    }, 4000);

}