// comparison of datatypes in javascript
//comparison around number
console.log(2>1); //true
console.log(2>=1); //true
console.log(2<1); //false
console.log(2 == 1); //false
console.log(2 != 1); //true

//problem area: when comparing same data type
//rule: always compare values of same data types.
//note: comparing values of diff data types is not allowed in typescript.
//note: this type of comparison not always give predictable result.

console.log("2" > 1); //true //javascript automatically convert "2" into 2.
console.log("02" > 1); //true

//comparison of null
console.log(null > 0); //false  converting null into 0
console.log(null == 0); //false
console.log(null >= 0); //true converting null into 0
// note: The reason is that an equality check == and comparison > < >= <= work differently. 
//comparison converts the null to a number, treating it as 0. That's is way (3) null >= 0 is true
// and (1) null > 0 is false
//note: comparison operator and equality operator way of working is diff in javascript.

//comparison of undefined
console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false
//note: undefined gives false in case comparison and equality.
// note: comparison and equality check in javascript are two diff things.
//note: comparison operator(>, <, >= etc) and equality operator(==, ===) work diff in javascript.

//strict check: ====; check values and data types
console.log("2" === 2 ); //false

// note: Avoid comparison of like : null with numbers and undefined with numbers.
//clean code is priority.





