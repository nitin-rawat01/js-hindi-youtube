// "use strict"
// Task one: Creates a Calculator
// Create an object calculator with three methods:
/* 
read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
*/
//not going to work because node have to prompt method.
//let calculator = {
   //read(){
    // setting object property values
    // this.a = Number(prompt('Enter first Number: '));
    //this.b =  Number(prompt('Enter second Number: ' ));
   //},
    // sum(){
    //     return this.a + this.b;
    // },
    // mul(){
    //     return this.a* this.b;
    // }
 // };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );



// Second Task
//Task of Mulitple chaining of object methods
// There’s a ladder object that allows you to go up and down:
let ladder = {
    step: 0,
    up(){
        this.step++;
        return this; // Returning the object itself
        // return this; (If removed, chaining will break)
    },
    down(){
       this.step--;
       return this;
    },
    showStep(){ // shows the current step
    console.log(this.step);
     return this; // Returning `this` to continue chaining
    }
}
// Now, if we need to make several calls in sequence, we can do it like this:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

// Modify the code of up, down, and showStep to make the calls chainable, like this:
ladder.up().up().down().showStep().down().showStep(); 

// Why does method chaining work?
// Method chaining works because each method returns the object (this), allowing further calls.
// If we don’t return this, chaining won’t work:

// Benefits of Method Chaining
// ✔ Cleaner Code: No need to write multiple separate function calls.
// ✔ Improved Readability: Methods are executed in a logical sequence.
// ✔ Fluent API Style: Commonly used in libraries like jQuery and Lodash.

//third task
// Here the function makeUser returns an object.

// What is the result of accessing its ref? Why?
function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
//   console.log( user.ref.name ); // What's the result? // undefined // error:if "use strict"
  
  
//   Explanation: 
// That’s because rules that set "this" do not look at object definition. Only the moment of call matters.
// Here the value of this inside makeUser() is undefined, because it is called as a function, not as a method with “dot” syntax.
// The value of this is one for the whole function, code blocks and object literals do not affect it.
// So ref: this actually takes current this of the function.
function makingUser(){
    return {
        name: 'john',
        ref() {
            return this;
        }
    };
}
let user2 = makingUser();
console.log(user2.ref().name) ; //john