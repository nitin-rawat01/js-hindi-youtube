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
    
}


