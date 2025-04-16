// to learn function: function + memory management(call stack and function scope)
//function: piece of code which do a specific task. create a package of our code..which we can use many times

//This is definition of function 
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");    
}
// This is reference of function : we use function reference in onclick dom manipulation
sayMyName;
// This is execution of function 
// sayMyName();

// Function to add two numbers
// function addTwoNumbers(number1, number2){ // number1 and number2 are parameter
//     console.log (number1 + number2);
// }

//learning about return 
function addTwoNumbers(number1, number2){ // number1 and number2 are parameter: input when writing function definition is called parameter.
    let result = number1 + number2;
    // console.log("Hitesh");

    // return result;
    return number1 + number2;
    console.log("Hitesh"); //not going to execute because code after return statement will not get executed: rule of function definition.
}


//execute the function
addTwoNumbers(); // output: NaN
addTwoNumbers(3, 4); //7 , 3 and 4 are arguments, actually value passed when calling a function.

//Problem: In case input is not a number: to handle these problems we use check in a way of if-else statement.
addTwoNumbers(3, "4"); //34 
addTwoNumbers(3, "a"); //3a//type- string

//Storing execution of function inside of an variable
//you can store the value return by the function ..if function does not return anything it will return undefined.
const result = addTwoNumbers(3, 5);
console.log(result);


function loginUserMessage(username = "sam"){ //setting default value of parameter
    // ! - convert true to false and false to true
    //In JS some values are considered false: null, undefined, empty string, 0 etc.
    if(!username){ //username === undefined is equivalent to !username
        console.log('Please Enter a Username');
        return
    }
    return `${username} just logged in`
}
console.log( loginUserMessage());//if no value is passed ..it will show undefined. output undefined just logged in
console.log( loginUserMessage("Hitesh")); //Hitesh will overwrite sam

// Second Video
// Type of Parameters in Function 
// Case 1: Shopping Cart Example 
//Situation: unaware of the number of  parameters
//Note: Always give your function meaning ful name  
//to let function handle multiple parameters: use rest operator
// symbol for rest and spread operator is same: ...
function caculateCartPrice(val1, val2, ...num1){ // rest operator: pack the inputs into a bundle
    return num1;
}
console.log(caculateCartPrice(200, 300, 400, 500)); //output: [400, 500]

//passing object in a function 
const user = {
    username: 'hitesh',
    price: 199
}
function handleObject(anyobject){ //do not use name of the actual object in parameter.
    console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`);
    //note: when handling object we need to check for type safety
        //1st check: check for values available in object
        //2nd check: argument is an object/ data type of object..you can check it through if else
}

// handleObject(user);
//you can directly pass the object as argument
handleObject({
    username: 'sam',
    price: 399
});

//passing array in function 
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
//you can directly pass the array as argument
console.log(returnSecondValue([200, 400, 100, 600]));
