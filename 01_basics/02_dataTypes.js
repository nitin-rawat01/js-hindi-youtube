// Datatypes and ECMA Standards
//  "use strict": literalls :treat all js code as newer version
//js engine will treat entire code as per new standards.: "use strict"

//alert in node
//alert(3+3) // we are using nodejs, not browser

//writing code: space, semi-colon etc.
//js ignore extra space
console.log(3 +
    3
) //code readibility that should be high

console.log('hitesh');

//documentation: mdn(written by mozilla)
//original documentation: tc39.es
//ecma orginaztion: define standards 

//data type: global object, numbers and data.

//Example of data types
let name = "hitesh" //string
let age = 28 // Number
let isloggedIn = true // boolean
let state; // undefined

//data types in javascript
//primitive data types
//number => 2^53
//bigInt // trading, stockmarket, reddit, facebook
//string: use double quote to define string: ""
//boolean => true/false: detailsAvailabe, isloggedIn , response from server

//null: standalone value, also a data type // representation of empty value//we intentionally define null/empty
//undefined =>  let state: variable declare, value is not defined but null is represenation of empty value. 
// symbol: mostly used in react and figma. In react it is used to define uniqueness of the component. In short for uniqueness.(unique)


// Object

console.log(typeof null); // output: object: some called it as a error in a language.
console.log(typeof undefined); // output: undefined: because undefined is a type in javascript

//it change the way js is executed it changes to use strict operating context.
/* 
The "use strict" directive was new in ECMAScript version 5.

It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.

The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

With strict mode, you can not, for example, use undeclared variables.
When strict mode is enabled, the JavaScript engine enforces additional constraints. This means you may be able to catch some common errors that would have otherwise gone unnoticed. It also helps you write cleaner and more secure code.
*/
// "use strict";
// (function doWork(){
//     "use strict";
//     x = 10;
//     console.log(x);
// })();

// console.log(x);
//without using "use strict" x will end as a global variable
//you can set either entire program to strict mode or scope it to specific function 
//"use strict" at the top of script file or at function body
//"use strict":prevents
// prevent using variable property or an object without declaring it is not allowed
//deleting a variable, funciton, or an argument, is not allowed 
    // x = 3.14
    //delete x; cause an error
//defining a property more than once is not allowed
    // eg var x = {p1: 10, p1:20}; cause an error.
    
//duplicating a parameter name,
//function (x,x); cause an error

//octal numeric literals and escape characters are not allowed:

