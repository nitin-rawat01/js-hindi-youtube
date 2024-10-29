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

////////////////
//memory and thred: diff and complex but not that much
//how memory works in javascript
//automatic garbase collection
//memory allocation in javascript
//two types of memory: stack(primitive) , heap(non-primitive type)
/*
Primitive dataType goes in stack memory; And it provides copy of that element.
So when we change something (through assigned variable) it gets changed in copy of element  not in original.


Opposite of this. Non primitive dataType get stored in HEAP memory. 
And it gives reference value to assigned elements. 
So when assigned variable makes changes it changes the both values(original and assigned one). 
*/




