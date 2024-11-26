//define number in javascript
//in js number -> integer and float
const score = 400 //js automatically detect this as number
// console.log(score); //400 : automatically define number

//we can explicitly defining number data type in javascript by using Number object.
//we got many predefined objects in javascript: String, Number etc
const balance = new Number(100.567546); //100% number

// console.log(typeof balance); //[Number: 100] specificaly cast number
// console.log( balance); //object // properties available through prototype

//Methods of numbers

//converting into string
// console.log( balance.toString().length);
// note:you can use string methods after converting number into string

//precision values methods: toFixed() and toPrecision();

//toFixed():The toFixed() method converts a number to a string.
//The toFixed() method rounds the string to a specified number of decimals(after point).
// console.log(balance.toFixed(2)); 
console.log(Math.round(500.65)); //501 //round before decimal point

//toPrecision():Converts number into string: ASKED IN INTERVIEW
//The toPrecision() method formats a number to a specified length.
// A decimal point and nulls are added (if needed), to create the specified length.
//Be careful when use. 
const otherNumber = 23.8966;
// console.log(otherNumber.toPrecision(1));//precise number from left to right upto given number of digit.
//be sure of the number of value before decimal.

//toLocaleString():return a number as a string using a locale languange format
const hundreds = 1000000;
////number format is based on indian number system
// console.log(hundreds.toLocaleString('en-IN'));

//for competitive programming and DSA 
//function se object create hota hai javascript me ?
// Anwser: Yes

//Number keyword: function (we create object from this Number function with new keyword).
//concept: maxValue(kitni maximum value number me le skte hai...not talking about bigInt) and minValue.
// concept: max-value and min-value: Means maximum and minimum value which can be used/taken in js as a Number
//note :not talking about bigInt
//Number: we have number as a data type with many properties attached
/* from console in dev tools
 Number
ƒ Number() { [native code] }
Number.: give us many values
//max value of number in javascript
Number.MAX_VALUE -> 1.7976931348623157e+308 
// min value of number in javascript
Number.MIN_VALUE -> 5e-324
//Maximum safest interget value that can be stored.
Number.MAX_SAFE_INTEGER 
9007199254740991
*/

//++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++
// maths library comes with js by default
console.log(Math);//object with many properties
//properities: .pi, .sqrt : values
//methods: sin, cosine, floor , etc
console.log(Math.abs(-4)); //absolute value: -ve to +ve only not vice versa

console.log(Math.round(4.3)); //4.3 -> 4 and 4.6 -> 5
console.log(Math.ceil(4.2));  //4.2 -> 5
console.log(Math.floor(4.9)); //  4.9 - > 4
//round in most used
console.log(Math.sqrt(25)); //5
console.log(Math.pow(5,2)) ; //25 pow(base, power)

//find max and min value
console.log(Math.max(4,5,7,8,9));
//to check max value inside an array
console.log(Math.max(...[4,5,7,8,9])); //using spread opertor

//min value
console.log(Math.min(4,5,7,8,9));  //4

//Most use case of math library 
//Math.random: values between 0-1
console.log(Math.random()); 
//use cases: kuch range se kuch range ke beeche ki value chaiye example: dice game: number between 1-6 or other value: 1-10

//Getting random values between 1-10
console.log((Math.random()*10) + 1);
//+1 will remove value like 0.04

//trick: defining formula to get number between 10-20
//special case /trick : number between 10-20(including 10)
//trick to define min and max with formula
const min = 10;
const max = 20;

console.log(Math.floor(Math.round()* (max - min +1) + min)); //+1 avoid 0 value
//breakdown 
//some time we define min and max
//max-min give us the range in this case is 10
//max - min + 1: +1 to avoid zero case.
//outside the bracket: +min: we +min to set the minimum value we need..value cannot go below minimum value.


