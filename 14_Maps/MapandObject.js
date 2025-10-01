// Object.entries: Map from Object
// When a Map is created, we can pass an array (or another iterable) with key/value pairs for initialization, like this:
// array of [key, value] pairs
let map = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
    ]);
console.log(map);

// To create Map from object, use built in method Object.entries(obj); 
// Object.entries(obj) -> return [key, value];
let obj = {
    name: "john",
    age: 30
};
let mapObj = new Map(Object.entries(obj));
console.log(mapObj);

// Object.fromEntries: Object from Map
// Object.fromEntries: Given an array of [key, value] pairs, it creates object from them:

let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
    ])
console.log(prices); // { banana: 1, orange: 2, meat: 4 }

// we can use Object.fromEntries(obj) to get a plain object from map
// E.g. we store the data in a Map, but we need to pass it to a 3rd-party code that expects a plain object.
let mapTwo = new Map();
mapTwo.set('banana', 1);
mapTwo.set('orange', 2);
mapTwo.set('meat', 4);
let objTwo = Object.fromEntries(mapTwo.entries());
// done!
// obj = { banana: 1, orange: 2, meat: 4 }
console.log(objTwo);

// A call to mapTwo.entries returns an iterable of key/value pairs, exactly in the right format for Object.fromEntries.
// we could also take this shortcut
let objThree = Object.fromEntries(mapTwo);
// obj = { banana: 1, orange: 2, meat: 4 }
console.log(objThree);

// That's the same, because Object.fromEntries expects an iterable object as the argument. Not necessarily an array, And the standard iteration for map returns same key/value pairs as map.entries(). So we get a plain object with same key/values as the map. 



