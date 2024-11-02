//data types: interview perspective 
//two category: primitive and non primitive.officially
//concept in c: call by value and call by ref.
//diff: how the data stored in memory and how you can access the data. officially

//Primitive
//primitve data types are call by value..means when we copy them ..we don't get the reference of the original data..we get copied value..all the changes are to copy version.
//7 types: string, number, boolean, null, undefined, Symbol: kisi bhi value ko unique banane ke liye symbol use hota, BigInt(scientific value, big values).
//examples
const score = 100; //number
// const score:number = 100; in typescript
const isLoggedIn = false; 
const outsideTemp = null;
let userEmail; //value: undefined.
//declaring symbol
const id = Symbol('123'); //return symbol
const anotherId = Symbol('123');
console.log(id === anotherId); //false

const bigNumber = 32434235463721342n //to store  this value data type use by js behind the scene is bigInt. last me n

//javascript dynamically type language or statically type language.
// ans. dynamically type
    

//non-primitive/refernce-types
//values wo hai jinka memory me inka  reference directly apko allocate kiya ja skta hai.
//types: Array, Objects, Functions. 
const heroes = ["shaktiman", "naagraj", "doga"];
//{}: object
let myObj = {
    name: "hitesh",
    age: 22
}

//function: in js we can treat a funciton as a variable
const myFunction = function(){
   
}

//useful: to findout about the datatype of variable: use typeof
//typeof: operator
console.log(typeof bigNumber);
console.log(typeof outsideTemp); // type: object asked in interview
console.log(typeof score); //number
console.log(typeof myFunction); //return type: function(is called function object)
console.log(typeof myObj); //object
console.log(typeof heroes); // object
console.log(typeof id); //symbol

//////////////////how memory works in javascript/////////////////

//working of memory: early days from language like c. where reserve and free memory is programmer responsiblity.
//In modern and mid-modern programming language ..memory allocation is not given instead we get //automatic garbage collection.

//memory allocation in javascript
//two types of memory: stack(primitive) , heap(non-primitive type)
//In primitive data types stack memory is use.
//In non-primitive data types heap memory is use.
//When stack memory is used we get the copy of the variable declared.
//When we use heap, we get reference of the original value(obj, funciton), any changes will change the original value.
/*
Primitive dataType goes in stack memory; And it provides copy of that element.
So when we change something (through assigned variable) it gets changed in copy of element  not in original.


Opposite of this. Non primitive dataType get stored in HEAP memory. 
And it gives reference value to assigned elements. 
So when assigned variable makes changes it changes the both values(original and assigned one). 
*/
let myYoutubeName = "hiteshchoudarydotcom"
let anotherName = myYoutubeName;
anotherName = "chaiaurcode" //hum ne ref to myYoutuveName ka diya ..to uske andr kya value hogi ?
console.log(myYoutubeName); //hiteshchoudarydotcom
console.log(anotherName); //chaiaurcode

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne;
userTwo.email = "hitesh@gmail.com";
console.log(userOne);

/* summary
Primitive data types go to stack..and we get only copy of the value in stack.
Non-primitive data types go to heap..and we get the ref of the original value..changes are made in original value.

*/
