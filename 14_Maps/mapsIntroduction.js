// Maps in Javascript
// A Map in Javascript is in-built objects that let you store key-value pairs. It is similar to objects with some key difference.
// Main difference: maps allows keys of any type (not just strings or Symbols), and it maintains the order of insertion.

// Key Features of Maps
// 1. In maps, keys can be objects, functions, or primitive values (like numbers, strings, booleans).
// Objects keys -> string or symbols.
// Example
let map = new Map();
map.set('name', 'Nitin');   // string key
map.set(1, 'One');          // number key
map.set(true, 'Yes');       // boolean key
map.set({id: 101}, 'Object as key'); // object key
console.log(map);
//2. Insertion order is preserved
// When you loop through a map, it gives values in the order you inserted them.

// 3. Size property:  Maps have a built-in .size property (unlike objects where you need Object.keys(obj).length).
console.log(map.size);

// 4, Better performance for frequent additions/removals
// Maps are optimized for key-value operations.

// Basic Map methods
// set(key, value): Add or update an entry
let myMap = new Map();
myMap.set("language", "javascript");
myMap.set("Framework", "React");

// get(key): Retrieve the value for a key
let one = myMap.get("language");
console.log(one); // javascript
console.log(myMap.get("language"))

// has(key): check if key exists. return boolean value.
let isFramework = myMap.has("Framework");
console.log(isFramework); // true

// delete(key): Remove a specific key
// returns boolean: true(if key exist) or false(if key does not exits)
myMap.set("style","CSS")
//let removedKey = myMap.delete("html"); // false
let removedKey = myMap.delete("style"); // true
console.log(removedKey);


// clear(): Remove all entries
// returns -> undifined
let clearMap = myMap.clear();
console.log(myMap);


// size: Get total number of entries
console.log(myMap.size);







