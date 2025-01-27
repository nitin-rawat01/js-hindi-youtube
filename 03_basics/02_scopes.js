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
// {} -> this is scope. if-else, function and loop -> they have there own scope{}, they are separate entity and have no relation with global scope. But Everything in global scope can be accessed in scope. But thing in scope should not be leadked outside of it's scope.

// Nested Scope
// Nested Scope: funciton inside of a function: How scope will work in this situation.

function one(){
    const username = 'hitesh'
    console.log('two is executed first');
    function two(){ //one is kind a global for two.
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); //line by line execution ..that's why two() is not run.

    two();
}
console.log('one is executed first');
one(); //first one will executed than two() inside of one will execute.

// closure: child function can access the variable of parent function.
// if-else scope
if(true){
    const username = 'hitesh'
    if(username === 'hitesh'){
        const website = 'youtube';
        console.log(username + ' ' + website);
    }
    // console.log(website); //cannot access..outside of its scope
}

//console.log(username); //outside of its scope.

// ++++++++++++++++++++++++ interesting ++++++++++++++++++++++++
console.log(addOne(5));

function addOne(num){ //basic function
    return num + 1;
}

addOne(5);


console.log(addTwo(5)); //throws an error: cannot access 'addTwo' before initialization.
const addTwo = function (num){ // some time also called expression, variable holding function expresion
    return num + 2;
}
addTwo(5);
// Note: In javascript variable are powerful they can hold many things like , json value, function etc.
// two ways to create a function 
// Hoisting in Function: In case of second function execution context is created where you can not access function before initialization

