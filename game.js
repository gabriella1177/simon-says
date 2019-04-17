console.log('connected')

//select colored buttons
const greenDiv = document.querySelector(".green");
const redDiv = document.querySelector(".red");
const yellowDiv = document.querySelector(".yellow");
const blueDiv = document.querySelector(".blue");

// //event targets for each div
// greenDiv.addEventListener('click', (e) => {
//     console.log(e);
// })
// redDiv.addEventListener('click', (e) => {
//     console.log(e);
// })
// yellowDiv.addEventListener('click', (e) => {
//     console.log(e);
// })
// blueDiv.addEventListener('click', (e) => {
//     console.log(e);
// })

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
    }, 100);
}

function yellowClick() {
    console.log('clicked yellow')
    yellowDiv.classList.add("yellow-light")
    setTimeout(() => {
        yellowDiv.classList.remove("yellow-light") 
    }, 100);
}

function blueClick() {
    console.log('clicked blue')
    blueDiv.classList.add("blue-light")
    setTimeout(() => {
        blueDiv.classList.remove("blue-light") 
    }, 100);
}

//toggle light class when color divs are clicked
 greenDiv.addEventListener('click', greenClick)
 redDiv.addEventListener('click', redClick)
 yellowDiv.addEventListener('click', yellowClick)
 blueDiv.addEventListener('click', blueClick)

 //functions to flash lighter color during game
 let counter = 0;
function nextFlash() {
    let color = colorSequence[counter];
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
    console.log(counter);
    counter++;
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
    randomColor(); //get random color and add it to array
    console.log(colorSequence);
    nextFlash();
    }

//player turn function (!!find a way to add timer)
function playerTurn(e) {
    console.log(e.target)
    // for (var i = 0; i < colorSequence.length; ++i) {
    //     let colorDiv = document.querySelectorAll('div.col')[i]
    //     let playerClick = click.colorDiv; //event target
    //    if (playerClick === colorDiv) {
    //         scoreIncrementer();
    //    } else {
    //        //run gameOver function
    //    }
    // }
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
    clearArray(colorSequence);
    h2.style.display = "none";
})

const start = document.querySelector('#start'); //select start button
start.addEventListener('click', (e) => { //when player clicks 'start' button
    computerTurn();
});

let test = document.querySelector('#test');
test.addEventListener('click', (e) => {
    computerTurn();
});

let h2 = document.querySelector('#gameover')
function gameOver() {
    //h2 is visible that says Game Over!
    h2.style.display = "block";
}

// queryselectorall
// loop
// addeventlistener to each
// onclick
// e.target
// start.addEventListener('click', computerTurn)