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


// In JavaScript, the call() method is a predefined function available on all Function instances. It allows you to invoke a function with a specified this value and arguments provided individually.
// Setting this context:
// The primary purpose of call() is to explicitly set the this value within the function being called. This is particularly useful when borrowing methods from one object to be used with another, or when you need to control the this context in scenarios where it might otherwise be implicitly determined.

//syntax: function.call(thisArg, arg1, arg2, ..., argN)
// thisArg: The value to be used as this when the function is executed. If thisArg is null or undefined, this will default to the global object (e.g., window in browsers, or global in Node.js) in non-strict mode, and undefined in strict mode.

// Common use cases:

    // Function borrowing: Reusing a method defined on one object for another object.
    // Controlling this: Explicitly defining the this context for a function, especially in event handlers or callback functions.
    // Applying array-like objects to functions: While apply() is more common for this, call() can also be used if the number of arguments is known and fixed.

