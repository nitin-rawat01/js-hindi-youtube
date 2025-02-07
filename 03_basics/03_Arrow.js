// This keyword: tell us about current context.
// arrow function -> this -> object

const user = {
    username: 'hitesh',
    price: 999,
    // show welcome message to the user. Message with username.
    // Note: cannot directly refer the "username"variable inside of welcomeMessage();
    //if we want to refer to the current context (yellow curly braces) whether it is "usrname" or "prize" we use "this" keyword
    //this create current context.basically use "this" to access the variable of current context.
    welcomeMessage: function (){
        console.log(`${this.username}, welcome to website`);
        console.log(this); // this will print the current context.
    }
}
// user.welcomeMessage(); //current context printed. variable and values
// user.username = 'sam' //change the current context( change the values of variables)
// user.welcomeMessage(); //sam, we have use value of username which is avaiable in the current    context ..we do not hardcoded the value.
// note: context: kiske bare me baat ho rhi hai 

console.log(this); //{} -> current context is empty, we are inside of the node environment, this is refering to an empty object..because we have no context in global

// console.log(this); // global object inside  the browser in window object..that's why we can capture event like click, form submit.




function chai(){
    let username = "hitesh";
    //console.log(this); //bhot sari values..confusion
    console.log(this.username); //undefined this only works inside of object not inside of function.
}
chai();
// same to same but different
// const chaiOne = function(){
//     let username = "hitesh-ch";
//     console.log(this.username);
// }
// chaiOne(); //undefined

// Arrow Function
const masalaChai = () => {
    let username = 'hitesh'
    // console.log('line 44: ', this.username); //undefined
    console.log('line 45: ', this); //empty object // no proper explanation given.

}
masalaChai()

/* 
Some Explanation from Youtube.
The 'this' keyword inside a function refers to the object that the function is a property of or the object that the function is called on.  However, the behavior of the this keyword inside an arrow function is different from regular functions.
In an arrow function the this keyword is lexically scoped, meaning it takes on the values of this keyword in the surronding code.  The this keyword in an arrow function does not get rebound when the function is invoked, unlike regular functions. It keeps the same value as the this keyword in the surrounding code.
 this in arrow is lexical this and in regular function this refers to its object if it is property of one or else it refers to global window
*/


// Arrow Function: 
// Basic Arrow Function Syntax.
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3,4));

//Implicit Return Arrow Function 
// An implicit return is a way of returning a value from a function without explicitly using the return keyword. 
// This can be done by using arrow functions, which have a shorthand syntax that allows you to omit the return keyword when the function only has one expression.
// implicit: not expressed in a direct way but understood by the people involved
let add = (num1, num2) => num1 + num2;
// let add = (num1, num2) => {return  num1 + num2}; //if using curly braces need to use "return"
// let add = (num1, num2) => (num1 + num2);

console.log(add(3,5)) //8

// Another use of paranethesis
// let sum = (num1, num2) => {username: 'hitesh'}; // undefined
let sum = (num1, num2) =>   ({username: 'hitesh'}) ; //return object
console.log(sum(4,5))
// Explicit return: need to use return keyword.
// Use of Arrow: in various loop method, event listener etc.