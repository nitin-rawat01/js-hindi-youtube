// Immediately Invoked Function Expressions  (IIFE)
// An IIFEE is a function in javascript that is executed as soon as it is defined.

// Why do need it?
// For database connection: file only for database connection, soon as a application start we want connection to a database, we use iife.
// To prevent global scope population: prevent global variables from polluting function scope.
// Note:  Variables defined inside an IIFE are not accessible from outside its scope which helps to avoid conflicts with other variables or functions (global scope pollution). Means IIFE keeps variables and functions private in it

// Interview Question: What is iife-> immediately invoked function expression + prevent global scope pollution (due to global variable).

// Syntax
/*
(function (){
 Your Code
})()
 In Short -> (function definition without name)(function/execution call)
 Or, with arrow function syntax:
 (() => {
    Your Code
    })()
    In short: (arrow function)(execution call)
*/
// Example:Regular Function
// This is a named iif
(function chai(){
    console.log('Database Connected')
})();

// Example:Arrow Function
// To write two or multiple IIFE one should be end with semicolon ;
// Above iife is invoked but it does not know where to stop the context...we need to end the line in javascript with semi colon
// This is unnamed iife
// Note:  IIFE written with function name is named IIFE and not with name are unnamed/anonymous.
(() => {
    console.log('Database Connection Established');
})();

// ; -> to end code. not put directly.

// passing parameter and argument in iife
((name) => {
 console.log(`DB CONNECTED TWO: ${name}`);
})('Hitesh');
// same as: functionName('argument);

// Notes Related to Immediately Invoked Function Expresions
/*
Why we use iife?
1. Avoiding Global Scope Pollution: Variables declared inside of the iffe are not added to the global scope. This helps in preventing naming conflicts with other scripts and libraries
2.Encapsulation:  It allows encapsulation of variables. Variables declared inside the IIFE are not accessible from the outside, providing a level of privacy.
3. Isolation: It helps in isolating code. Variables declared inside the IIFE do not interfere with variables in the outer scope, and vice versa.
4.  Module Pattern: IIFE is often used in creating a module pattern, allowing the creation of private and public methods within the same scope.

Notes from comments
We need IIFE to deal with two things:
1. To prevent any pollution to the global scope from the values inside our function - now, this holds true when working with the oudated var keyword or in instances where you mistakenly declare the functions and variables in the global scope instead of inside the intended function. If you take care of both these things, IIFE’s are not a strict requirement to prevent polluting the global scope. 
2. To call a function immediately - there can be instances where we need to immediately invoke a function but there can be other ways as well to immediately invoke the functions other than IIFEs.

Overall , IIFEs are a good code practice to prevent any potential pollution problems in cases we are exporting our code to other files and also the code looks clean.
Why do we need IIFEs?

Avoiding Global Scope Pollution: JavaScript variables can easily conflict if they are declared in the global scope. By using an IIFE, you create a private scope, avoiding conflicts with other code.

Encapsulation: IIFEs help in encapsulating code, making it modular and self-contained. This is especially useful in large codebases where maintaining clean and organized code is crucial.

Immediately Invoking Code: Sometimes, you want a function to run right away, without waiting for any events or conditions. IIFEs are perfect for this scenario.

Preserving State: Using IIFEs, you can preserve state within the function, which can be handy for things like event listeners or any code that needs a temporary scope.

Explanation of global scope population in detail.
Global Scope Pollution: In JavaScript, when you declare variables or functions in the global scope (outside of any function or block), they become accessible everywhere in your code. This can lead to several problems, especially in large codebases or when integrating multiple scripts. Here’s why:

Name Collisions: When different parts of your code (or different scripts) use the same variable names, they can unintentionally overwrite each other, causing unexpected behavior.

Unintentional Changes: Global variables can be modified by any part of your code, making it difficult to track changes and debug issues.

Memory Leaks: Variables in the global scope remain in memory for the entire lifecycle of the application, potentially leading to memory leaks and performance issues.

How IIFEs Help Avoid Global Scope Pollution: IIFEs (Immediately Invoked Function Expressions) help to mitigate these issues by creating a new, private scope for your code. Here’s how it works:

javascript
(function() {
  var privateVariable = 'I am private';
  console.log(privateVariable); // This works
})();

console.log(privateVariable); // ReferenceError: privateVariable is not defined
In the example above, privateVariable is only accessible within the IIFE and does not pollute the global scope. This means:

Encapsulation: Your code is encapsulated within the IIFE, preventing it from interfering with other scripts or parts of your application.

Local Scope: Variables and functions declared inside the IIFE are local to that function and are not accessible from the global scope.

Immediate Execution: The function executes immediately, so any setup or initialization code runs right away without leaving traces in the global scope.

Here’s a more practical example:

javascript
var globalVariable = 'I am global';

(function() {
  var localVariable = 'I am local';
  console.log(globalVariable); // Accessible
  console.log(localVariable); // Accessible
})();

console.log(globalVariable); // Accessible
console.log(localVariable); // ReferenceError: localVariable is not defined
In this example:

globalVariable remains accessible globally.

localVariable is only accessible within the IIFE, protecting it from global scope pollution.

By using IIFEs, you ensure that your code is modular, maintainable, and free from conflicts caused by global variables. It's a common best practice, especially when writing complex or large-scale JavaScript applications.

*/

