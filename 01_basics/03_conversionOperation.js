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
