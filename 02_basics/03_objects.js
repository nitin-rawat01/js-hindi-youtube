// Objects: Objects are used to store keyed collections of various data and more complex entities.
//collection of key: value pair also called property of object
// Methods to create object: object literalls and constructor method

// 1st method: constructor method
let User = Object.create({});
//correction:
//create method: The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.
// const person = new Object();
// person.name = "hitesh"
// person.email = "hitesh@google.com"
// const person2 = Object.create(person);
// console.log(person2); prototype of person2 contains properties of person 
//syntax: 
//Object.create(proto) proto :The object which should be the prototype of the newly-created object.
//Object.create(proto, propertiesObject)

//Actual Method to create an object Object keyword


//empty object is created without any property


//2nd method: object literalls -> {}
//object created by object literalls method creates singleton object...means object is one of its kind
let jsUser = {
    name: 'hitesh', //key:value note: system process key as a string like ->  "name"
    //value: string, num, function, bool, object, array
    "fullName": "Hitesh Choudary", //can not access using dot notation use bracket notation
   "full name": "Hitesh Choudary",
    age: 18,
    location: 'jaipur',
    email: 'hitesh@google.com',
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Saturday']
};



// Accessing Objects
// 1st method: called dot notation
console.log(jsUser.email);

// 2nd method: bracket notation
console.log(jsUser["email"]);

//expirement
console.log(jsUser["fullName"]);
console.log(jsUser.fullName)
console.log(jsUser["full name"]);
console.log(jsUser["full name"]);
//result: no difference in result  when  access fullName with dot notation or bracket notation
//difference will occure when there is space in key name like "full name" then dot notation can not be used to access key's value.

// symbol data type in javascript
//declaring symbol
const mySym = Symbol("key1");

//using symbol as a key in object
const User1 = {
    //can not use symbol like this 
    mySym : "myKey1",
    //to use declared symbol as a key define in square brackets
    [mySym]: mySym

}
console.log(User1.mySym); "myKey1"
console.log(typeof User1.mySym); "string"
console.log(User1[mySym]); //Symbol(key1) this is the only way to access symbol key.
console.log(typeof User1[mySym]); //symbol

// console.log(typeof (JsUser[mySym)) is giving string Because the value you've assigned to the Symbol key in the JsUser object is a string So, when you fetch the value of this key and check its type, it tells you it's a string.  and if you pass like this  const mySym = Symbol("user1");   const JsUser = {    [mySym]:mySym,} now it will give typeOf Symbol

// If you want to determine that the property uses a Symbol key, you can check the property keys of the object and see if any of them are Symbols. Here's an example of how you can do this:   
// The Object.getOwnPropertySymbols() static method returns an array of all symbol properties found directly upon a given object. 
  if (Object.getOwnPropertySymbols(User1).includes(mySym)) {

        console.log("the property has a Symbol key.");

      } else {

        console.log("the property does not have a Symbol key");

      }

//Basics of Objects
//changing values of objects
jsUser.email = "hitesh@chatgpt.com";
// freeze the value of objects:   
// Object.freeze(jsUser);
//no value can be changed after this ...this will not show any error but changes will not propogate.
jsUser.email = "hitesh@microsoft.com";
console.log(jsUser);
console.log(User1);

//adding function to the object
//javascript function is treated as  first class citizen
// In a given programming language design, a first-class citizen[a] is an entity which supports all the operations generally available to other entities. These operations typically include being passed as an argument, returned from a function, and assigned to a variable.

jsUser.greeting = function(){
    console.log('Hello JS User');
}


console.log(jsUser.greeting); //function reference
console.log(jsUser.greeting()); //console output and undefined
// referencing name key of jsUser inside the greeting function
//when we want to refer the same object inside the function of the object we use this keyword 
jsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`); //by using this we can access all the property.
}
console.log(jsUser.greeting2());
// Singleton: Objects
// Object Literal: Naturally supports Singleton pattern by creating a single instance and providing global access through a closure. It’s a straightforward approach for ensuring only one instance.

// Constructor: By default, allows the creation of multiple instances. To implement Singleton behavior with a constructor, additional logic is needed to ensure only one instance is created and managed.

// Thus, while object literals inherently create a single instance, constructors require extra steps to achieve the same Singleton behavior

