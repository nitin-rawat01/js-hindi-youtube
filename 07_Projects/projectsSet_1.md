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
