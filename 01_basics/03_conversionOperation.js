// conversion and operation.
// let score = "33" //
// let score = "33abc" //not a pure number
// let score = null // convert into 0
// let score = undefined // convert it into nan
// let score = true // convert it into 0
let score = "hitesh" // nan


//sometime we dont know the type and format  of the value we recieve.
console.log(typeof score)
console.log(typeof(score))

//conversion
//data type: capital format
//class based
let valueInNumber = Number(score); //string to number
console.log(typeof valueInNumber);
console.log(valueInNumber) //nan:not a number (special type) 
//note: be careful with javascript because it will convert strint/not pure number into number type but value will be nan(not a number); 

/* notes: basic conversion
 "33" => 33
 "33abc" => value: NaN, type: Number
 true/false => 0/1
*/

//conversion: value into boolean
// let isloggedIn = true; //direct boolen value

// let isloggedIn = 1; //number to boolean : 1 => true, 0 => false
// let isloogedIn = ""; // false
let isloggedIn = "hitesh"; // true


let booleanIsLoggedIn = Boolean(isloggedIn);
console.log(typeof(booleanIsLoggedIn));
console.log(booleanIsLoggedIn);

/* notes
 1  => true; 0 => false converting 1 into boolean
 empty string => false, string =>  true
*/

// conversion: string
let someNumber  = 33

let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof stringNumber);

// -----Operations---------------------------
let value = 3;
let negValue = -value;
console.log(negValue);
//Basic operations(Arithmatic Operations)
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2); power
// console.log(2/3);
// console.log(2%2);

//operations on string
let str1 = "hello";
let str2 = " hitesh";
let str3 = str1 + str2;
console.log(str3); //hello hitesh

//problem area
// console.log(1 + "2"); //12
// console.log("1" + 2); // 12
// console.log("1" + 2+ 2); //122
// console.log(1+ 2+ "2"); //32


//note: when js conversion : do not depend on these above example
//note: rule: string first: everything will be treated as a string
//note: string at last ..phle conversion ho jayega.
//note: do not write code like this in real life.
console.log(3+4*5%3); 

//tricky conversion
console.log(+true); // output 1 // increment of a boolean
// console.log(true+); // error
console.log(+""); // 0

let num1, num2, num3
num1 = num2 = num3 = 2+2;// bad coding practise

// precedence operator
let gameCounter = 100;
// gameCounter++; //post fix operator
++gameCounter; // pre fix operator
console.log(gameCounter); //101









