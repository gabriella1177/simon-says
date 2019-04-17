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
        clearTimeout(playerTimer)
        scoreIncrementer();
        setTimeout(() => {
            computerTurn();
        }, 1000);
    }
}
//functions to toggle to light color when clicked
function greenClick() {
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
    yellowDiv.classList.add("yellow-light")
    setTimeout(() => {
        yellowDiv.classList.remove("yellow-light") 
    }, 100);
    if(isPlayersTurn === true) {
        checkColor(3);
    }
}

function blueClick() {
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
    }, 100);
    if(nextFlashCounter >= colorSequence.length) {
        playerTurn();
    }
}

function greenFlash() {
    greenDiv.classList.add("green-light")
    setTimeout(() => {
        greenDiv.classList.remove("green-light");
        nextFlash();
    }, 300);
    console.log('flashed green')
}
 function redFlash() {
    redDiv.classList.add("red-light")
    setTimeout(() => {
        redDiv.classList.remove("red-light");
        nextFlash();
    }, 300);
    console.log('flashed red')
}
 function yellowFlash() {
   
    yellowDiv.classList.add("yellow-light")
    setTimeout(() => {
        yellowDiv.classList.remove("yellow-light");
        nextFlash();
        console.log('flashed yellow')
    }, 300);
    
}
 function blueFlash() {
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
   }, 3000);
}

//select span of score and set the value to a variable
let span = document.querySelector('span');
let score = span.innerHTML;
//score incrementer function
function scoreIncrementer() {
    //var score value increments and DOM manipulation to change score for player
    score++;
    span.innerHTML = score
}
 
function clearArray(array) {
    while (array.length) {
      array.pop();
    }
  }

function reset() {
    score = 0;
    span.innerHTML = score
    clearArray(colorSequence);
    h2.style.display = "none";
}

const start = document.querySelector('#start'); //select start button
start.addEventListener('click', () => { //when player clicks 'start' button
    reset();
    computerTurn(); 
});

let h2 = document.querySelector('.h2');
function gameOver() {
    h2.style.display = "block"; //h2 is visible that says Game Over!
    //!!cancel game somehow

}