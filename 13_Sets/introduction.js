// sets: in built object intro es
// A JavaScript Set is a collection of unique values.
// they can store mulitple values
// its stores only unique (no duplicates)
// values can be any type: primitive values or object reference
// insertion order maintain like array but no duplicates
// faster lookup and deletion than array.
// can not access values from index (observation);
// no index 

// How to Create a Set
// You can create a JavaScript Set by:
    // Passing an array to new Set()
    // Create an empty set and use add() to add values.

// Creating a set by passing an array
    let setOne = new Set([1,2,3,4,5,5,6]);
    

// common method and properties
// add(value);
setOne.add(8);


//delete(); return: true: if value deleted and false: value not deleted
setOne.delete(4)

// has(value); check for given value
// console.log(setOne.has(4));


// set.clear(); clear all values
// setOne.clear();

// size
// console.log(setOne.size);


// forEach and for of
// That’s why when you use forEach on a Set, the callback gives you value, value (instead of key, value like Map):
// Both key and value are the same in a Set.
setOne.forEach((item, index) => console.log(index));
