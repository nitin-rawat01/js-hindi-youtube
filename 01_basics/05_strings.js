// use modern syntax of string: use template literals when using string
//no difference between using single or double quote.
const name = "hitesh" //declaring string //behind the scene: invoke object
const repoCount = 50

//concatenate string in javascript
// console.log(name + repoCount + " Value") // not recommended: old method

//Modern Way of string: called string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //modern method 
//back tick -> string interpolation ->use placeholder(inject variable)

//second method for declaring string
//use javascript object
const gameName = new String('Hitesh-hc'); //new-> create object, String ->contructor
//same value ...behind the scene- invoke object.
// also run this on chrome dev tools
console.log(gameName); //return-> String{'hitesh'} 0:h ,1:i(key:value pair) , length property , lots of diff method inside prototye, type: object.

console.log(gameName[0]); //h
console.log(gameName.__proto__); //accessing prototype of object //return -> {} empty object(but not empty) run this on dev tools


// console.log(gameName.length); 
//all the methods inside prototype directly..don't need to write __proto__
//String Methods
console.log(gameName.toUpperCase()); //HITESH original string doesnot change because reason mention in stack and heap video

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

/* revision: Extra Notes
// Strings in Javascript
//two ways to declare string in javascript
//first: usign string literals and template literals
//second: string constructor
let name = "hitesh";
let gameName = new String('hitesh-hc');
console.log(name); //type: string
console.log(gameName); //type: object
console.log(gameName.__proto__);//accessing prototype of object

//various property and methods of string
//length property of string: return no. of char
console.log(gameName.length);

//accessign particular character of string using index.
console.log('char from index value:', gameName[7]); //h
//using charAt();
console.log('char at method:', gameName.charAt(7)); //h

//upper-lower case
console.log( 'Upper case:', gameName.toUpperCase());
console.log('Lower Case' ,gameName.toLowerCase());

//getting index of character
//indexOf:return index position of first matching value
//return -1 incase of value not found
console.log('Index value of t: ', gameName.indexOf('t'));

//divide string into sub-string or extract part of string
//syntax: substr(start, length)
console.log('substr() method:', gameName.substr(2,4));

//divide string or extract part of string 
//slice(start, end); end position does not include;
//A negative number selects from the end of the string.
//slice method is also available for array
console.log(gameName.slice(4,6));
console.log([2,3,55,23,4].slice(2,4)); 

//includes: check whether sub-string is part of string or not
//return boolean
console.log(gameName.includes('nas'));

//converting string into array
//convert full string into array of single element
console.log('string into array', gameName.split());
console.log('Array of individual chars:', gameName.split(''));
//join method convert array into string
//reverse method reverse array

//remove white space from start and end of string: trim
//there are lot of other trim methods:trimStart();
gameName = "    hitesh-hc  ";
console.log('without trim:', gameName.trimRight())
console.log('with trim:', gameName.trim());

//replace method: replace particular part of stirng with another string
//replace first matching string
//replace('toReplaceString', 'replacewith');
const url = "https://hitesh.com/hitesh%20choudary";
console.log(url.replace('20', '-'))
*/






