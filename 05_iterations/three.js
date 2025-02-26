// High Order Array Loops, for-of, for-in.
//These loops are array specific.

// common scenario: objects inside of an array
//[{}, {}, {}] -> in each iterartion need to get some value from object.    

// for-of loop: the javascript for-of statement loop through the values of iterable object.
// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more
//iterator: array,object and string.
const arr = [1,2,3,4,5];

for (const num of arr) { //object: kis cheez ki upper loop lagana hai.
    // console.log(num);
}
//it will automatically end the loop.

//  for-of on string
const greetings = "Hello World!";
for(greet of greetings){
    // console.log(`Each character is ${greet}`);
    //note: if we want to ignore space we can use continue key word.
}

// Maps: like array.
// Map object holds key-value pair and remember the original insertion order of the keys. Any value (both objects and primitive value) may be used as either a key or a value.
// Map objects are collection of key-value pairs. A key in the Map may only occurs once; it is unique in the Map's collection.
//In short: no duplicate values are there in map.
const map = new Map();

// setting value in map
//Map.set(key, value)
map.set('In', 'India');
map.set('USA', 'United States of America');
map.set('FR', 'France');
//trying to duplicate the values
map.set('In', 'India'); // no two same keys can appear in map.
// in map keys are unique but values can be duplicate.
console.log(map);

// Applying loop on map.
for (const key of map) {
    console.log(key); // array of single [key, value]
}

//getting separate key and value 
for (const [key, value] of map) { //destructing of array
    console.log(key, ':-', value);
}

//Applying for of loop on object
const myObj = {
    'game1': 'NFS',
    'game2': 'Spider-Man'
}

// for (const [key, value] of myObj) { 
//     console.log(game1, game2);
// } myObj is not iterable.

// Summary : for of loop works on array and map but not on object.

