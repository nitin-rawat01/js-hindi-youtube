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
