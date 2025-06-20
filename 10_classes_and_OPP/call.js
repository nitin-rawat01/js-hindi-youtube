// video: call and this in javascript
// call, bind and apply
// Notes:
// callstack: The call stack in JavaScript is a mechanism that keeps track of function calls during the execution of a program. It operates on a "Last In, First Out" (LIFO) principle, which means the last function that is called is the first one to finish executing. 
// When a function is called, it is added to the top of the call stack. When that function finishes executing, it is removed from the top of the stack. If the function calls another function, that new function is added to the top of the stack, and so on.
// diagram
// function3
// function2
// funciton1
//global execution context.
// Each funciton has its own execution context(memory, call stack, default properties, this).



// call keyword practical example
function setUsername(username){
    // complex DB calls
    this.username =username;
    // return this.username = username; why this will not work: solution in chatgpt
}

function createUser(username, email, password){
    // setUsername(username): after called, it's execution context from callstack will also removed and all the  properties also removed(gone).
    // we need to hold the reference of that funciton(setUsername(username))
    // to hold reference of the function we use method: .call
    // we need those values..we need to give execution context...apne this ki value de rhe hai.
    // setUsername(username);
    setUsername.call(this, username);
    this.email = email;
    this.password = password;
    
}

// call keyword: Calls a method of an object, substituting another object for the current object.
// .call() gives the function a custom execution context where this points to the right object.

const chai =new createUser("chai", "chai@fb.com", "12334");
console.log(chai)
// hamra current execution context kisi or function ko pass kr deta hai.
