// key also called property name or identifiew
//We can imagine an object as a cabinet with signed files. Every piece of data is stored in its file by the key. It’s easy to find a file by its name or add/remove a file.

// An empty object (“empty cabinet”) can be created using one of two syntaxes: 
let user2 = new Object(); // "object constructor" syntax

// Usually, the figure brackets {...} are used. That declaration is called an object literal.
let user = {
    name:"John",
    age: 30,
    email: "johnGreat@gmail.com",
    "full Name": "John David", //multiword property name must be quoted
    loggedIn: "yes",
};  // "object literal" syntax
// to remove property we can use delete operator
delete user.email;
// The last property in the list may end with a comma: That is called a “trailing” or “hanging” comma. Makes it easier to add/remove/move around properties, because all lines become alike


// Square brackets: For multiword properties, the dot access doesn’t work:
console.log(user['full Name'])
// Square brackets provide a way to obtain a property name as a result of any expression - like from a variable 

let key  = prompt("Hey what you want to know about the user, name?: ");
console.log(user[key]); //john

// We can use square properties in object literals when creatign an object. That's called computed properties.


let fruit = prompt('Hey Enter a Name of Fruit: ');
let favorite = prompt('Hey Enter a favourite fruits: ');
let bag ={
    [fruit]: 5
}
// The meaning of a computed property is simple: [fruit] means that the property name should be taken from fruit.
bag[favorite] = 5;
console.log(bag); //{ mango: 5, apple: 5 }

// Property Value shorthand
// When properties have same name as variable , short version
function makeUser(name, age){
    return {
        name,
        age,
    }
}
let user4  = makeUser('Manoj', 56);
console.log(user4);



// Property Name Limitations: As we already know, a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.

// But for an object property, there’s no such restriction:
// these properties are all right
// In short, there are no limitations on property names. They can be any strings or symbols (a special type for identifiers, to be covered later).
let obj = {
  for: 1,
  let: 2,
  return: 3
};

alert( obj.for + obj.let + obj.return );  // 6

// Minor Catch: There’s a minor gotcha with a special property named __proto__. We can’t set it to a non-object value:

let obj2 = {}
obj.__proto__ = 5; //// [object Object] - the value is an object, didn't work as intended
console.log(obj2);
// __proto__ : use to set proto type of a object . take object only.

// Property existence test, “in” operator
// In js it's possible to access any property. There will no error if property does not ..it will show undefined.

// there is special operator "in" operator 
// syntax: "Key" in Obj: return boolean 
// for example 
console.log("does name exist in user?: ", "name" in user);

// Rare use case of in operator:It’s when an object property exists, but stores undefined:
let someone = {
    test: undefined,
}
//checking with compariosn 
console.log(someone.test); //it's undefined, so - no such property?
console.log("test" in someone); // true, the property does exist!

// In the code above, the property obj.test technically exists. So the in operator works right.  
// Situations like this happen very rarely, because undefined should not be explicitly assigned. We mostly use null for “unknown” or “empty” values. So the in operator is an exotic guest in the code.

// The "for..in" loop: To walk over all keys of an object, there exists a special form of the loop: for..in.
let nobody = {
    name: 'john',
    age: 30,
    isAdmin: true,
}

for(let key in nobody){
    console.log(key); //key of someone 
    console.log(nobody[key]); // values of someone
}
// Note that all “for” constructs allow us to declare the looping variable inside the loop, like let key here.

// Ordered like an object
// In case of integer properties ..keys are ordered in ascending order
//if keys are non-integer, then they are listed in the creation order
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};
for (let code in codes) {
 console.log(code); // 1, 41, 44, 49
}
// integer properties: The “integer property” term here means a string that can be converted to-and-from an integer without a change.
// So, "49" is an integer property name, because when it’s transformed to an integer number and back, it’s still the same. But "+49" and "1.2" are not:
// So, to fix the issue with the phone codes, we can “cheat” by making the codes non-integer. Adding a plus "+" sign before each code is enough.

