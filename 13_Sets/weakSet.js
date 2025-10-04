// WeakSet: A JavaScript WeakSet is a collection of values where the values must be object
// weakset is similar to a normal set, but it can only store objects (not primitive values if you try to add primitive values you will get TypeError).
// It was introduced in ES6 (like Set, Map, WeakMap).
//A WeakSet holds weak reference to its values.
// It means that if an object stored in a WeakSet is no longer referenced anywhere else in your code, it can be garbage collected.
// Create a WeakSet
let mySet = new WeakSet();

// Create an object
let myObj = {fname: "John", lname: "Doe"}
// Add the obj
mySet.add(myObj);

// Do I have myObj in the mySet?
let answer = mySet.has(myObj);
console.log(answer);

// Key features
// 1. only stores object
// 2. No duplicates (like Set)
// 3. garbage collection : Unlike a regular Set, a WeakSet does not prevent its values from being garbage collected.
// If a value (an object) has no references in a program, it becomes eligible for garbage collection.
// When the value is garbage collected, its is removed from the WeakSet.
    // Example
    let ws = new WeakSet();
    let obj = {id: 1};
    ws.add(obj);
    
    obj = null; // // now object is eligible for garbage collection
 // WeakSet will remove it automatically (memory safe)
 
 // 4. Not Iterable: WeakSets are not enumerable.
 // You cannot iterate over the values with for loops, forEach(), or values().
 // No .keys(), .values(), .entries().
 // You cannot access the size. WeakSets have no size property.
 // Reason: This is because the contents might disappear anytime due to garbage collection.
 
 // 5. Common Methods
 // new WeakSet() Creates a new WeakSet Object
 // add(object) Adds object to WeakSet
 // delete(object)	Removes a WeakSet object
 // has(object)		Returns true if an object is present, and false otherwise.
 
//  WeakSet does not have:

// A size property
// A spread operator (...)
// A clear() method
// Any logic methods (union, difference, intersection)
// Any iteration methods (forEach, keys, values, entries)
// The above is by design: Objects may disappear in garbage collection, it makes no sense to iterate over or count them.
 
//  Example
let weakset = new WeakSet();
let obj1 = {name: "Alice"}
let obj2 = {name: "Bob"}

// adding obj to weakset
weakset.add(obj1);
weakset.add(obj2);

// check if object exists
console.log(weakset.has(obj1)); // true
// deleting object
console.log(weakset.delete(obj2));


// When to use WeakSet: Useful when you want to keep track of objects without preventing them from being garbage-collected.
// Example: tracking DOM elements without creating memory leaks.
let weakSet = new WeakSet();

function trackElement(el) {
  weakSet.add(el);
}
console.log(weakSet);
 //// Later if `el` is removed from DOM and no references remain → it gets GC automatically
 
//  Example 2: Tracking Object: A WeakSet is similar to a Set, but it only stores objects, and holds them weakly. If there are no other references to an object, it gets garbage collected automatically.
// This makes it handy for tracking objects without storing extra data (like counts).
const person = new WeakSet();

// Visitor Object
const John = {name:"John", age:40};
const Paul = {name:"Paul", age:41};
const Ringo = {name:"Ringo", age:42};
const George = {name:"George", age:43};

// Track Visits
track(Paul);
track(Ringo);
track(Paul);

// Function to Track Visitor
function track(visitor) {
    if(person.has(visitor)) {
        console.log(`${visitor.name} is visiting again.`)
    } else {
        person.add(visitor);
        console.log(`${visitor.name}, age: ${visitor.age}, is visiting for the first time`)
    }
}
// Note: If you want to count the visit as well use WeakMap instead.
// Automatic Cleanup: If you remove all references to a visitor object:
//   John = null; this works but show error because john is const.
 // // At this point, the object { name: 'John', age: 40 } can be garbage collected.
// Once garbage collection runs, it will automatically be removed from activeUsers.
// (Note: you cannot programmatically observe this removal immediately due to GC timing)
 