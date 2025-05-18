# Projects Related to DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# Solution Code

## Project 1
 
```javascript
//we need to select all the buttons and body
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

//we can apply loop to buttons(nodelist);
//nodelist -> forEach
buttons.forEach(function (button) {
  //mouseover, click , refresh-> events
  //e-> event object
  button.addEventListener('click', function (e) {
    console.log(e); //mouse event
    console.log(e.target); //html span element
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## Project- 2
```javascript
// taking input from the user
//perform calculation and display it.
//select form because submit button is inside of it.
// Calculate button is submit button ..submit the form.
//event -> submit(not click because it is a form);
const form = document.querySelector('form');
//form submit in two ways-> get or post.
//values goes to url or server.
//we need to stop the form to send values to the server.preventing default behaviour.

//this use case will give empty values
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  //getting values: Height and Weight
  //select values when we enter the form(event); because we want to get the values when we click the Calculate button.taking value only after the event.
  // values we received in string.

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
// use Number instead of parseInt.
  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please Give a Valid ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please Give a Valid Height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    result.innerHTML = `<span>${bmi}</span>`;
  }
});


```
## Project 3 Solution Code

```javascript
//Getting clock
const clock = document.getElementById('clock');

// Show fix time
// console.log(date.toLocaleTimeString());

// Display digital clock
//syntax: setInterval(funciton(){}, time(millisecond));

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```
## Project 4
```javascript
// In form we got two options to submit a form: button(type="submit") and input(type="submit");

//1st Step:Generating random number
let randomNumber = parseInt(Math.random() * 100 + 1);

//2nd Step: Gathering values
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

//startegies:
//storing user guess and used it for display.
let prevGuess = [];
// number guesses made
let numGuess = 1;
//when numGuess becomes 10 we will disable the submit button.

// game status
let playGame = true;

//defining game logic.
//checking if user can play game
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
//1st function: validate user guess
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    //if guess is valide
    prevGuess.push(guess);
    // if user can play game or not
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

//check guess: low, high or match
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You Guess it right!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Your guess is Too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Your guess is Too high`);
  }
}

//clean values, display guesses to the user, show remaining guess.
//cleanUpGuess
function displayGuess(guess) {
  //updating input field to be empyt: clean up field
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

//Pass message.
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
// end game
function endGame() {
  userInput.value = '';
  //preventing user to enter more guess
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  //ref will be used in newGame();
  p.innerHTML = '<h2 id = "newGame">Start New Game</h2>';

  startOver.appendChild(p);
  playGame = false;
  newGame();
}

//start new game
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    //generating new random number
    randomNumber = parseInt(Math.random() * 100 + 1);
    //removing prev guess
    prevGuess = [];
    //restarting number of guess.
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    //removing attribute from user.
    userInput.removeAttribute('disabled');

    //remove child
    startOver.removeChild(p);
    //turning on the game at last
    playGame = true;
  });
}

````

# Project 5 solution

```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', function (e) {
  // copy table from w3 school
  insert.innerHTML = `
  <div class="color">
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>

</table>
  
  </div>
  `;
});

```
# Project 6 Solution

```javascript
// generate a random color
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;

const startChangingColor = function () {
  if (!intervalId) {
    // intervalId === null
    intervalId = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  // clearing up the memory space
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);

// We are checking intervalId is not null then only start the interval otherwise it would create the multiple instances of the setInterval which would change the background color much faster and the stop button would not be able to clear all intervals if initially we have clicked on start button multiple times and then we click on stop button.
// we are setting interval to none to save memory space and checking intervalID for the problem you mentioned in your comment.
// I think the 'Stop' button not 'seemingly' working at 29:10 is not because of indexId value being changed from null to the reference of setInterval() but because of that prior to clicking the 'Stop' button, the 'Start' button was clicked multiple times hence multiple setInterval() methods are running simultaneously. The indexId has the reference of only the last setInterval() and the references of the previously started intervals have been lost. Clicking on 'Stop' clears that process but the other prior started setIntervals continue to run hence it appears that 'Stop' did not work at all. The check if(!intervalId) ensures that if an interval is already executing, another interval should not start. Great series overall! Enjoyed watching and doing the projects myself alongside



```

