// Js behaviour: prototypial behaviour.
// JavaScript default behaviour: prototypial behaviour.

// new, this , classes, prototype inheritance: prototype behaviour

// grand parent object
// parent object 
// object // this keep going on until we hit null.
// // this is called prototypial inheritance.

function mulitplyBy5(num){
    return num*5;
}

mulitplyBy5.power = 2;

console.log(mulitplyBy5(5));
console.log(mulitplyBy5.power);
console.log(mulitplyBy5.prototype); // {}

// note: Everything in JavaScript is an object.
// note: function, function bhi hai aur object bhi hai.
// note: function working/functionality wo function ki tehra behave krti hai lakin ap chaiye to kisi ko ek object ki tehra bhi behave kr wa skta hai.
// note: function technically reference object ko bhi krta hai.


function createUser(username, score){
    // username = username //create confusion between variable(inside function) and parameter
    this.username = username;  // this set current context
    this.score = score;
}
// note: this keyword is also connected to prototype.
// this: jisne bhi bulaya hai uske pas jao.

// creating functionality/method
createUser.prototype.increment = function (){
    this.score++; // this -> for context.
}
createUser.prototype.printMe = function (){
    console.log(`price is ${this.score}`);
}


// const chai = createUser("chai", 25);
// const tea = createUser("tea", 250); // without new keyword we cannot access above two methods(properties);

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

chai.printMe();


