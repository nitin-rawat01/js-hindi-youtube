// Garbage Collection
// JavaScript employs a memory management mechanisms knwon as Garbage Collection
// The primary functions are:
    // Ensuring efficient use of memory storage
    // Reclaim memory occupied by variables that are no longer use.
    // Preventing memory leaks

/////////////////////////////////////////////////
// A WeakMap is a special type of Map in JavaScript.
// A JavaScript WeakMap is a colletion of key/value pairs where the keys must be object.

// Difference Between Map and WeakMap:In a regular Map, if you use an object as a key, that key maintains a strong reference to the object. Even if you remove all other references to that object in your code, the Map's reference prevents the object from being garbage collected (freed from memory)
// Example of WeakMap
// create a weakmap
let myMap = new WeakMap();
// create a obj
let myObj = {fname:"John", lname:"Doe"};
// set a weakmap value
myMap.set(myObj, "player");
// get the WeakMap value
console.log(myMap.get(myObj));

// Key Characteristics of WeakMap
// 1. Keys must be objects: Unlike Map, where keys can be any type, WeakMap keys can only be objects (not strings, numbers, or booleans).
 //The keys must be objects or non-registered symbols.
//This restriction is tied to the garbage collection mechanism; primitives are not garbage collected in the same way as objects.
// Example
let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "value");
console.log(weakMap);
// weakMap.set("name", "Nitin"); ❌ Error: key must be object
//2. Keys are weakly held
// Unlike a regular Map, a WeakMap does not prevent its keys from being garbage collected.
// If the object used as a key has no other references in your code, it will be garbage collected automatically.
// When the key is garbage collected, its key-value pair is removed from the WeakMap.

// Memory Efficiency: This feature is crucial for preventing memory leaks when you use objects to store extra data that shouldn't live longer than the object itself.
// This makes WeakMap useful for cases where you want temporary storage tied to objects without preventing them from being freed.
let myWeakMap = new WeakMap();
let myObjKey = {fname:"John", lname:"Doe"};

myWeakMap.set(myObjKey, "secret");
console.log(myWeakMap);
myObjKey = null;
// now myObj (and its values) in myMap can be garbage collected
console.log(myWeakMap);

// 3. Not iterable: WeakMaps are not enumerable.
// You cannot loop through a WeakMap (no .forEach(), no for…of).
// This is because keys might disappear anytime due to garbage collection.

// 4. Tracking Objects: The entries in weakmap are weakly held: if the object key becomes unreable, its maping is removed automatically.
// This is perfect for tracking data about objects without preventing garbage collection.

// creating weak map to store visit counts
const visitsCount  = new WeakMap();

// Creating visitors
let John = {name:"John", age:40};
const Paul = {name:"Paul", age:41};
const Ringo = {name:"Ringo", age:42};
const George = {name:"George", age:43};


// tracks visits
track(Paul);
track(Ringo);
track(Paul);
track(Paul);
track(John);

// Function to track visitors
function track(visitor){
    let count = visitsCount.get(visitor) || 0;
    count++;
    visitsCount.set(visitor, count);
    console.log(`${visitor.name} + ", age " + ${visitor.age} + ", has visited " + ${count} + " time(s)`)
}

// 5. Limited Methods
//  new WeakMap()	Creates a new WeakMap object
// .set(key, value) → add/update entry, stores a value associated with a key object.
// .get(key) → get value by key  or undefined if the key objects is gone.
// .has(key) → check if key  object exists
// .delete(key) → remove entry

// 6. When to use weakmap

// Private data for objects: You can use WeakMap to store metadata or private properties for objects without modifying them directly.
let privateData =  new WeakMap();

function User(name){
    privateData.set(this, {age: 25});
    this.name = name;
}

let user1 = new User("'Nitin");
console.log(user1); // User { name: "'Nitin" }
console.log(privateData.get(user1).age);
// Memory sensitive caches: Store extra information about the object, but automatically remove it when objects are no longer needed.

// A weakmap is best used when you want to attach data to an object without forcing that object to stay in memory longer than neccessay.
// Common Use Case: Storing Private/Metadata
// Imagine you have a complex DOM element (or a complex object) and you want to store some metadata about it, but only while the element exists in the document:

// const elementData = new WeakMap();

// const myElement = document.getElementById('footer');

// Attach data to the DOM element
// elementData.set(myElement, {
//     clicks: 0,
//     creationTime: Date.now()
// });

// Later, when the element is removed from the DOM:
// myElement.remove();

// Since there are no more references to the element, 
// it will be garbage collected. Crucially, the data 
// in the WeakMap will ALSO be cleaned up automatically! 

// This prevents memory leaks.
