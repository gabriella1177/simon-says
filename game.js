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

//select reset button
const reset = document.querySelector('#reset');
//if reset button is clicked
reset.addEventListener('click', () => {
    greenFlash();
    redFlash();
    yellowFlash();
    blueFlash();
    //modify span back to 0
})

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

const start = document.querySelector('#start'); //select start button
let gameOver = false;
let computerTurn = true;
start.addEventListener('click', () => { //when player clicks 'start' button
    while(!gameOver){
        if(computerTurn === true) { //inside while loop if flashing through array
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
            computerTurn = false; 
        }
        else { //inside while loop if it's players turn with a timer
            gameOver = true;
        }
    }
})
    




    //  if player does click where div.value === num
    //     then score increments
    // if player does not click where div.value === num
    //     then gameOver = true
    //     and an h2 is created that says Game Over!