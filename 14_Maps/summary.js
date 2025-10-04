// In short, use a Map when you need a persistent key-value store and care about the size or iteration order. Use a WeakMap when you want to attach metadata to an object and want that metadata to be automatically cleaned up from memory when the object itself is no longer needed.

// In short (for interview)

// Map: keys can be any type, iterable, not garbage-collected automatically.

// WeakMap: keys must be objects, not iterable, automatically garbage-collected → useful for private data & memory-sensitive caching.

// Tasks
// Task 1
// Create a function unique(arr) that should return an array with unique items of arr.
function unique(arr) {
//   return [...new Set(arr)];
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O

// Task Two: Filter Anagram
// Anagrams are words that have the same number of same letters, but in different order.
// For instance:
// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Write a function aclean(arr) that returns an array cleaned from anagrams.
let arrTwo = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr){
    let map = new Map();
    
    for(let word of arr){
        let sorted = word.toLowerCase().split('').sort().join('');
        map.set(sorted, word);
    }
    return Array.from(map.values());
}
console.log(aclean(arrTwo));

// Task 3: We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.
let map = new Map();

map.set("name", "John");

// let keys = map.keys();

// Error: keys.push is not a function
// keys.push("more");

// Fix
let keys = Array.from(map.keys());
keys.push("more");
console.log(keys);
