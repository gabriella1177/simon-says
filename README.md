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

Let's Play Simon Says was designed with discrete functions in mind. Upon starting the game, a series of functions run in a specific order by calling each other in the right order. For example, the computer turn function calls the player turn function and the player turn function will call the game over function when appropriate. I used "set timer" to create the right timing. Also, in order to accomodate the callback functions, I relied on counters inside the next flash and color check functions rather than loops so that the current color in the sequence could be referenced outside the scope of those functions. 

The button flashes are simulated by toggling CSS classes that add a lighter radial-gradient than the default class colors. Each button click works the same way but with the difference of including the check-color function callback during each button click. The check color function compares the value of the button clicked with the corresponding array value and calls the score incrementer function where appropriate (if the player clicks correctly) otherwise it calls the game over function. To create the sounds I utilised the built-in audio class and created new audio objects. I run the play method on those corresponding objects during each click and flash. 

A random number generator creates the color sequence by returning a number between 1 and 4 and storing it in the color sequence array which is called upon to display the correct order of light flashes during the computer's turn. Each number corresponds with a primary-colored button. At the start of the player's turn, they must click each corresponding color in the correct order of the array to win the round and the game continues until the incorrect button is clicked or the sequence is not finished before the timer runs out (the timer increases with each round to give the user ample time to click the correct sequence). If the player's score is higher than the current high score, the high score display will update and they will get an alert congratulating them. Otherwise, the player will get a game over alert.


## Ideas for Enhancement

To make the game more accessible, I could add key stroke functionality that correspond with the buttons. A player who was visually-impaired would be able to play the game by listening to the button tones.

I would like to add a persisting high score using local storage in the browser. As of now, the prevailing high score will reset when the page is refreshed.

Currently, the game is not as responsive as I'd like it to be on smaller windows.

I could also add other levels of difficulty that include more buttons.

## Authors

* **Gabriella De Francesco** - [GitHub](https://github.com/gabriella1177)

## Acknowledgments

* Thank you [FreeCodeCamp](https://www.freecodecamp.org/) for hosting and sharing "Simon" sounds


