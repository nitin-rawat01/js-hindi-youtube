// Control Flow or Logical Flow.
    //code run on conditional base.

// 1st Control Flow
// if statement -> syntax: if(condition){scope}; if -> keyword
// condition true -> code inside scope is executed otherwise not.
const isUserLoggedIn = true;

if(isUserLoggedIn){
    console.log('User is logged In');
}
//comparision operator -> < , >, <=, >=, ==, !==, ===, !==

if(2 ==="2"){
    console.log("executed"); //not executed-> condition is not true
}

// if-else: conditional code
// const temperature = 41;
// if(temperature < 50) {
//     console.log("Temperatur is less than 50");
// } else{
//     console.log("temperature is more than 50");
// }

// console.log("executed");

// Scope related concept in javascript
const score = 200;

if(score > 100){
    const power = "fly"
    // var power = "fly"; // this variable can be accessed outside of this scope
    console.log(`User Power: ${power}`);
} 

// console.log(`User Power: ${power}`); //error: cannot access "let power" variable outside of its scope. but "var power" can be accessed
// In javascript curly braces create a new scope and variable declared inside that scope cannot be accessed outside of that scope

// ShortHand Notation
const balance = 1000;

// if(balance > 500) console.log("test"); // implicit scope : only works for one line 
// if(balance > 500) console.log("test"), console.log("test2"); //not recommended.


//  if-else-if statement:
if(balance < 500){
    console.log("less than 500");
} else if(balance < 750){
    console.log("less than 750");
} else if(balance < 900){
    console.log("less than 900");
} else {
    console.log("less than 1200");
}

// Real Life Example;

const UserLoggedIn = true;
const debitCard =  true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
//Checking multiple condition
if(UserLoggedIn && debitCard) {
    console.log("Allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User Logged In");
}

