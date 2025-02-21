// Concept of truthy value and falsy value:
//truthy values: A truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy.
// That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, NaN, and 
// document.all.
// JavaScript uses type coercion in Boolean contexts.

const userEmail = []; // value of string -> true , empty string -> false [] -> true

if(userEmail){ // no comparision
    console.log('Got user email')
} else{
    console.log("Don't have user email");
}

//truthy and falsy values
 //falsy values -> false, 0, -0, BigInt 0n, "", null, undefined, NaN. 
 //truthy values -> "0", 'false', " ", [empty array], {empty object}, function(){} empty function.
  //every other values are true


// How to check array
if(userEmail.length === 0){
    console.log("Array is Empty");
}

// Check for empty object
const emptyObj = {}

if(Object.keys(emptyObj).length ===0){
    console.log("Object is Empty");
}

/*
note: some extra comparision
    false == 0
    true
    false == ''
    true
    0 == ''
    true
*/

// Nullish Coalescing Operator (??): null and undefined
// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
let val1;
// val1 =  5??10;
// val1 = null??10;
// val1 = undefined??15;
val1 = null ?? 10 ?? 20;
console.log(val1); //10
//use case: when call database, we get two values, so may be we get null or undefined.


//Terniary Operator 
// syntax-> condition? true:false;
const iceTeaPrice = 100;
iceTeaPrice <= 80? console.log("less than 80"): console.log("more than 80");

// Summary: 
// we want to execute code on condition basis.
// comparision: >, <, <=, >=, ==, !=, ===, !==
// scope: can not access variabe outside of if block
//if, else if: to check multiple condition
// &&, || -> to check multiple condition at the same time
// switch -> to check multiple equal condition.
//truthy and falsy values
//check for empty array and object
//Nullish coalescing operator: ??
// terniary operator.



