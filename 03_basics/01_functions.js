// to learn function: function + memory management(call stack and function scope)
//function: piece of code which do a specific task. create a package of our code..which we can use many times

//This is definition of function 
function sayMyName(){ //{}: scope of the function, we write definition of function 
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");    
}
// This is reference of function : use of onclick dom manipulation
sayMyName;
// This is execution of function 
// sayMyName();

// Function to add two numbers
// function addTwoNumbers(number1, number2){ // number1 and number2 are parameter
//     console.log (number1 + number2);
// }

//learning about return 
function addTwoNumbers(number1, number2){ // number1 and number2 are parameter
    let result = number1 + number2;
    // console.log("Hitesh");

    // return result;
    return number1 + number2;
    console.log("Hitesh"); //not going to execute because code after return statement will not get executed: rule of function definition.
}


//execute the function
addTwoNumbers(); // output: NaN
addTwoNumbers(3, 4); //7 , 3 and 4 are arguments
//Problem: In case input is not a number
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

// Type of Parameters in Function 