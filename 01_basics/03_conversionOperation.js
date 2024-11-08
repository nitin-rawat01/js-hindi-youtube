// conversion and operation.
//converting string into number
// let score = "33" // string will easily convert into number

//Cases when conversion not happen succesfully
// converting not pure number into number
// let score = "33abc" //not a pure number 
    // note: javascript still convert 33abc into number for number conversion
    // note: but it's value in NaN(not a number)
    // note: type: number and value: NaN
    // be carefull when dealing with nan

//converting null into number in javascript
// let score = null 
    //note: js convert null into 0 for number conversion
    //type: number and value: 0

//converting undefined into number in javascript
// let score = undefined 
    // note: we got value of NaN
    // type: number and value: NaN

//converting boolean value into number
// let score = true 
    // note: in case of true value, converted into 1
    // note: value is 1 and type is number and vice-versa for false

//converting string value into number
let score = "hitesh" 
    //note:in case of string , value is NaN
    //note: value is NaN, type is Number

    /* summar: basic conversion
 "33" => 33
 "33abc" => value: NaN, type: Number
 true/false => 0/1
*/


//sometime we dont know the type and format  of the value we recieve.
console.log(typeof score) 
console.log(typeof(score))

//conversion
//data type: capital format
//Number: class based
let valueInNumber = Number(score);
console.log(typeof valueInNumber); //number
console.log(valueInNumber) //nan:not a number (special type) 

//note: be careful with javascript because it will convert strint/not pure number into number type but value will be nan(not a number); 



//conversion: value into boolean
//direct boolean value
// let isloggedIn = true; //direct boolen value

//converting number into boolean
//we have Boolean for conversion into boolean value same as we have Number and String
// let isloggedIn = 1; 
    // note: 1 is converted into true in boolean, 0 is converted into false
    // number to boolean : 1 => true, 0 => false

//converting empty string into boolean
// let isloogedIn = ""; 
    //note: empty string is converted into false
    //note:value of empty string in boolean is false

//converting  string into boolean
let isloggedIn = "hitesh"; 
 //note:  string is converted into true
    //note:value of string in boolean is true

/* notes: summary
 1  => true; 0 => false converting 1 into boolean
 empty string => false, string =>  true
*/

let booleanIsLoggedIn = Boolean(isloggedIn);

console.log(typeof(booleanIsLoggedIn));
console.log(booleanIsLoggedIn);



// conversion: string
//number into string
// let someNumber  = 33
    //note: converted into 33 as a string

//number into boolean
let someNumber = true;
    // note: converted into true as a string

//browser give value in string-  we need to convert it into boolean, number , object and array.

//converting diff value into string
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
let str3 = str1 + str2; //+ use to concatenate string
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
//notes
//increment operator first convert the operand into numeric value. "10" => 10
//post fix: return the value(before increment) first and then increment the value; 
    //  x++; x is return first and then x is increment

//pre fix: increment first and then value(after increment) is return.
//increment operator applied to reference eg variable does not applied to direct value like ++10.
//The increment operator can only be applied on operands that are references (variables and object properties; i.e. valid assignment targets). ++x itself evaluates to a value, not a reference, so you cannot chain multiple increment operators together.









