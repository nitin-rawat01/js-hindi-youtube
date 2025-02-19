// // JavaScriptinfo: Object methods, "this"
// Obects: are usually created to represent entities of a real world, like users, orders and so on.
let user = {
    name: "John",
    age: 30,
   callName: function (){
        console.log(this.name);
    },
  }
  // user.callName();
  // And, in the real world, a user can act: select something from the shopping cart, login, logout etc.
  // Actions are represented in JavaScript by functions in properties.
  // Method examples: user says hello
  
  user.sayHi = function (){
      console.log("Hello!");
  }
  //user.sayHi(); //calling a object method
  // Note: A function that is a property of an object is called its method.
  // We could also use pre-declared function as a method: like 
  /*
  first declare a function
  function sayHi(){
      console.log("Hello!");
  }
  then added as a method: we can use same name
  user.sayHi = sayHi;
  */
  // When we write our code using objects to represent entities, that’s called object-oriented programming, in short: “OOP”.
  
  // Method Shorthand: ditch the function keyword
  //you can add proeprties in object later like this.
  // do not add properties in object like this...
  console.log(user);
  user = {
      name: 'hitesh',
      age: 34,
      sayBye(){
          console.log("Bye!");
      },
  }
  
  //user.sayBye();
  // To tell the truth, the notations are not fully identical. There are subtle differences related to object inheritance (to be covered later), but for now they do not matter. In almost all cases, the shorter syntax is preferred.
  
  // "this" in methods:
  // it's common that an object method needs to access the information stored in the object to do its job.
  // For instance, the code inside user.sayHi() may need the name of the user.
  // To access the object, a method can use the "this" keyword.
  // The value of "this" is the object "before dot", the one used to call the method
  user.callName = function (){
      console.log(`Hello ${this.name}`);
  }
  
  user.callName();
  // Here during the execution of user.sayHi(), the value of this will be user.
  // Technically, it’s also possible to access the object without this, by referencing it via the outer variable:
  user.callAge = function (){
      console.log(`Your Age is ${user.age}`)
  }
  user.callAge();
  // But such code is unreliable 
// Why not to use object.property in method.
let mainUser = {
    name: 'john',
    age: 45,
    sayHello(){
        console.log(`Hello ${user.name}`); //leads to error
    }
}
let admin = mainUser;
//admin === user -> true ; both are pointing to the same object

mainUser = null; //overwrite to make things obvious
//admin is pointing to object and user is equal to null
// inside sayHello() user is null which leads to error
//Avoid error by using "this" which always point to current context and not to the fixed object
//admin.sayHello(); //error

// "this" is not bound
// "this" unlike most other programing language can be used with any function, even if it's not method of an object.
function greet(){
    console.log(this);
}
// console.log(this); //empyt object
// greet(); // global object

// for example: same function is assigned to different object
let user1 = {name: 'jaun elia'}
let user2 = {name: 'mirza galib'}
// use the same function in two objects
function sayHi(){
    console.log(this.name);
}
// these calls have different this
// "this" inside the function is the object "before the dot"
user1.sayHi = sayHi; //jaun elia (this === user1)
user2.sayHi = sayHi; //mirza galib (this === user2)
user1.sayHi();
user2.sayHi();
//rule: if obj.function() is called then "this" is obj during the call of f.

// The consequences of unbound this
//In JavaScript this is “free”, its value is evaluated at call-time and does not depend on where the method was declared, but rather on what object is “before the dot”
// The concept of run-time evaluated this has both pluses and minuses. On the one hand, a function can be reused for different objects. On the other hand, the greater flexibility creates more possibilities for mistakes.

// Arrow functions have no "this"
// Arrow function is special:they don't have their own "this". if we reference "this" from such a function, it's taken from outer normal function
//For instance, here arrow() uses this from the outer user.sayHi() method:

let user3 = {
    firstName: 'faze ahmed',
     sayHi(){
         let  arrow = () => {
            console.log(this.firstName);
    }
    arrow();
     }
}
user3.sayHi();
// if we use only use arrow function without normal function it will show undefined.

//That’s a special feature of arrow functions, it’s useful when we actually do not want to have a separate this, but rather to take it from the outer context. 

// Summary
// Functions that are stored in object properties are called "methods"
//Methods allow objects to "act" like object.doSomething();
// Methods can reference the object as this
// The value of this is defined at run-time.
// When a function is declared, it may use "this", it may use this, but that "this" has no value until the function is called.
// A function can be copied between objects.
// When a function is called in the “method” syntax: object.method(), the value of this during the call is object.
// Please note that arrow functions are special: they have no this. When this is accessed inside an arrow function, it is taken from outside.
  