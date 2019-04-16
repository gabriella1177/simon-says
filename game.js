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
})

function randomNumber(num){
    Math.floor((Math.random() * 4) + 1);
    return num;
}
/*
    run through each case 1 through 4 corresponding with 
    a colorFlash function
*/
let colorSequence = [];
function randomColor() {
    randomNumber(num);
    if(num === 1){
        greenFlash();
    }
    if(num === 2) {
        redFlash();
    } 
    if (num === 3) {
        yellowFlash();
    }
    if(num === 4) {
        blueFlash();
    }
    colorSequence.push(num);
}

const start = document.querySelector('#start'); //select start button
let gameOver = false;
while(!gameOver){
     start.addEventListener('click', () => { //when player clicks 'start' button
     randomColor() //get random color and add it to array
        for (let i = 0; i < colorSequence.length; i++) { //loop through array
            if(num === 1){
                greenFlash();
            }
            if(num === 2) {
                redFlash();
            } 
            if (num === 3) {
                yellowFlash();
            }
            if(num === 4) {
                blueFlash();
            } 
        }
     })
     //if player does click where div.value === num
        //then score increments
    //if player does not click where div.value === num
        //then gameOver = true
        //and an h2 is created that says Game Over!

}