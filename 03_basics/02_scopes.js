// Scope start with: let, var and const
//  {} -> curly braces is scope almost in every programing language.
//Note: in object , {} they are object declaration/ object literal. {} curly braces are scope in fucntion , if-else etc.

let a  =300; 
if(true){
    //These variable/ memory allocation has scope only in between {} braces.
    // this is block scope..anything outside of an this scope is global scope.
    // values of global scope are available inside of block scope but block scope variable are not available outside of it's scope.
    let a = 10; //totally independent of above variable a.
    // if we just write a = 10; this will change the value of above a variable but when we use let keyword we declare a variable a just inside of this funciton.
    const b = 20;
    var c = 30; // only c is available outside of this scope.
    console.log('a inside of if:', a);
}

// console.log(a); error: a is not defined
// console.log(b); error: b is not defined  
console.log(c);  // 30: problem
console.log('Outside a: ', a);

// Ask in Interview: note: global scope of a browser is different from global scope of a node.

// Scope Level and Mini-Hoisting In Javascipt: Second Video
// Topics in Scope: Nested scope, closure(technique): must know dom 
