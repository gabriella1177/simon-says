console.log('connected')

//select colored buttons
const greenDiv = document.querySelector(".green");
const redDiv = document.querySelector(".red");
const yellowDiv = document.querySelector(".yellow");
const blueDiv = document.querySelector(".blue");

//functions to toggle to light color when clicked
function greenClick() {
        console.log('clicked green')
        greenDiv.classList.add("green-light")
        setTimeout(() => {
            greenDiv.classList.remove("green-light") 
        }, 100);
    }

function redClick() {
    console.log('clicked red')
    redDiv.classList.add("red-light")
    setTimeout(() => {
        redDiv.classList.remove("red-light") 
    }, 125);
}

function yellowClick() {
    console.log('clicked yellow')
    yellowDiv.classList.add("yellow-light")
    setTimeout(() => {
        yellowDiv.classList.remove("yellow-light") 
    }, 125);
}

function blueClick() {
    console.log('clicked blue')
    blueDiv.classList.add("blue-light")
    setTimeout(() => {
        blueDiv.classList.remove("blue-light") 
    }, 125);
}

//toggle light class when color divs are clicked
 greenDiv.addEventListener('click', greenClick)
 redDiv.addEventListener('click', redClick)
 yellowDiv.addEventListener('click', yellowClick)
 blueDiv.addEventListener('click', blueClick)

 //functions to flash lighter color during game
 function greenFlash() {
    console.log('flashed green')
    greenDiv.classList.add("green-light")
    setTimeout(() => {
        greenDiv.classList.remove("green-light") 
    }, 300);
}
 function redFlash() {
    console.log('flashed red')
    redDiv.classList.add("red-light")
    setTimeout(() => {
        redDiv.classList.remove("red-light") 
    }, 300);
}
 function yellowFlash() {
    console.log('flashed yellow')
    yellowDiv.classList.add("yellow-light")
    setTimeout(() => {
        yellowDiv.classList.remove("yellow-light") 
    }, 300);
}
 function blueFlash() {
    console.log('flashed blue')
    blueDiv.classList.add("blue-light")
    setTimeout(() => {
        blueDiv.classList.remove("blue-light") 
    }, 300);
}

function randomNumber(){
    let num = Math.floor((Math.random() * 4) + 1);
    return num;
}
/*
    run through each case 1 through 4 corresponding with 
    a colorFlash function
*/
let colorSequence = [];
function randomColor() {
    let num = randomNumber();
    colorSequence.push(num);
}

//computer turn function
function computerTurn(){
    randomColor(); //get random color and add it to array
    console.log(colorSequence);
        for (let i = 0; i < colorSequence.length; i++) { //loop through array
            if(colorSequence[i] === 1){
                greenFlash();
            }
            if(colorSequence[i] === 2) {
                redFlash();
            } 
            if (colorSequence[i] === 3) {
                yellowFlash();
            }
            if(colorSequence[i] === 4) {
                blueFlash();
            }
    }
    
}

//player turn function (!!find a way to add timer)
function playerTurn() {
    for (var i = 0; i < colorSequence.length; ++i) {
        let colorDiv = document.querySelectorAll('div.col')[i]
        let playerClick = click.colorDiv; //event target
       if (playerClick === colorDiv) {
            scoreIncrementer();
       } else {
           //run gameOver function
       }
    }
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
  
//select reset button
const reset = document.querySelector('#reset');
//if reset button is clicked
reset.addEventListener('click', () => {
    greenFlash();
    redFlash();
    yellowFlash();
    blueFlash();
    score = 0;
    span.innerHTML = score
})

//game over function
function gameOver {
    
}
    //h2 is created that says Game Over!


const start = document.querySelector('#start'); //select start button
start.addEventListener('click', () => { //when player clicks 'start' button
    computerTurn();
})