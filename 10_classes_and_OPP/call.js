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
    this.username = username;
}

function createUser(username, email, password){
    
    setUsername(username);
    this.email = email;
    this.password = password;
    
}