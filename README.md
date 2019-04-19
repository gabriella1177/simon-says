# Let's Play Simon Says

Test your memory with this fun game! The computer is Simon and your job is to do what Simon Says! First, watch the colored buttons light up. Then, repeat the exact sequence before the time runs out. The sequence gets longer every turn so your challenge is to keep up. If you can beat your previous high score, you win. If not, try again.

## Getting Started

--Fork and clone this repo

### Prerequisites

No pre-reqs to get started (links to Bootstrap, jQuery, Popper and Google Fonts are included in the HTML head)

## Built With

* [Bootstrap](https://getbootstrap.com/) - open-source toolkit for HTML/CSS/JS
* [jQuery](http://jquery.com/) - JS library
* [Popper](https://popper.js.org/) - JS library
* [Google-Fonts] (https://fonts.google.com/)

## Approach

Let's Play Simon Says was designed with discrete functions in mind. Upon starting the game, a series of functions runs in order to callback to each other in the right order. I used timers to run each function at the right time. A random number generator returns a number between 1 and 4 that corresponds with the primary-colored buttons and that number is stored in the color sequence array which is called upon to display the correct order of light flashes during the computer's turn. At the start of the player's turn, they must click each corresponding color in the correct order of the array to win the round and the game continues until the incorrect button is clicked or the sequence is not finished before the timer runs out (the timer increases with each round to give the user ample time to click the correct sequence).

## Authors

* **Gabriella De Francesco** - [GitHub](https://github.com/gabriella1177)

## Acknowledgments

* Thank you [FreeCodeCamp](https://www.freecodecamp.org/) for hosting and sharing "Simon" sounds


