console.log('connected')

//select colored buttons
const greenDiv = document.querySelector(".green");
const redDiv = document.querySelector(".red");
const yellowDiv = document.querySelector(".yellow");
const blueDiv = document.querySelector(".blue");

//function to toggle green light
function greenLight() {
    console.log('clicked green')
    greenDiv.classList.toggle("green-light")
  }

//function to toggle red light
function redLight() {
    console.log('clicked red')
    redDiv.classList.toggle("red-light");
  }

//function to toggle yellow light
function yellowLight() {
    console.log('clicked yellow')
    yellowDiv.classList.toggle("yellow-light");
  }

//function to toggle blue light
function blueLight() {
    console.log('clicked blue')
    blueDiv.classList.toggle("blue-light");
  }

//toggle light class when color divs are clicked
 greenDiv.addEventListener('click', greenLight)
 redDiv.addEventListener('click', redLight)
 yellowDiv.addEventListener('click', yellowLight)
 blueDiv.addEventListener('click', blueLight)
