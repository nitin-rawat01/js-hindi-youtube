// use modern syntax of string.
const name = "hitesh" //declaring string //behind the scene: invoke object
const repoCount = 50

//concatenate string in javascript
// console.log(name + repoCount + " Value") // not recommended: old method

//Modern Way of string: called string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //modern method 
//back tick -> string interpolation ->use placeholder(inject variable)

//second method for declaring string

const gameName = new String('Hitesh-hc'); //new-> create object
// also run this on chrome dev tools
console.log(gameName); //return-> String{'hitesh'} 0:h ,1:i(key:value pair) , length property , lots of diff method inside prototye, type: object.

// console.log(gameName[0]); //h
// console.log(gameName.__proto__); //access prototype //return -> {} empty object(but not empty) run this on dev tools


// console.log(gameName.length); 
//all the methods inside prototype directly..don't need to write __proto__
//String Methods
console.log(gameName.toUpperCase()); //HITESH original string doesnot change because reason mention in stack and heap

//to find which char is at which position //pass number
console.log(gameName.charAt(2)); //t at second index

//to find position of char
console.log(gameName.indexOf('t')); //t is at second index

//Note: try to go through string methods

//divide string into sub-string
const newString = gameName.substring(0,4); //last value is not included
console.log(newString);

//slice: The slice() method returns the extracted part in a new string
const anotherString = gameName.slice(-8,4); //also pas -ve value //slice(indexstart, indexEnd)
//negative start index: the index is counted from the end of the string.
console.log(anotherString); //ite

//trim method: remove starting and end space
const newStringOne = "   hitesh    "//this type of string is very common eg: in input form:user sometime add extra spaces.in email or username;
console.log(newStringOne.trim()); //hitesh (no starting and end space)

//replace method: 
const url = "https://hitesh.com/hitesh%20choudary"//browser: dont understand spaces
//browser convert: histesh choudary -> hitesh%20choudary :url encoding
//URL encoding converts characters into a format that can be transmitted over the Internet.

console.log(url.replace('%20', '-')); //https://hitesh.com/hitesh-choudary url now usable

//note: more familiarity with string will help in frontend and backend

//includes
console.log(url.includes('hitesh')); //true

//split method: converting string into array
const lastString = 'hitesh-hc-com';
//split into diff part based on - split(separtor, limit);
console.log(lastString.split('-')); // output[ 'hitesh', 'hc', 'com' ]








