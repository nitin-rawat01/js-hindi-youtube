// we need to understand data structures: how we are storing data: array, objects , etc.
//  array

// declaring array
const myArr = [0, 1, 2, 3, 4, 5];
//inside we have elements, elements can be of diff types
//Array: data types
// The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

// Important Points about Array.
// Array in js are resizeable and can contain a mix of differnt data types.
// Javascript Arrays are not associative arrays. array elements cannot be accessed using        
    //arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
        //example myarr = [1,2,3,45];
            //accessing value inside array
            //myarr['one']: not applicable, use myarr[0] // result-> undefined
// JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on
//Asked in Interview: 
//when we do copy operation in array it create shallow copies.
//JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
//shallow copies:A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent
// In the context of the first line, properties refer to the individual key-value pairs that make up an object in JavaScript.
// So when it says "properties share the same references," it means that when you make a shallow copy of an object, the properties (the keys and their associated values) in the copied object will still point to the same references in memory as the original object. 

//Second type of array
const Heroes = ['shaktiman', 'naagraj'];

//second method to create an array
const myArr2 = new Array(1,2,3,4);
//inside array we get length property and prototype(there is another prototype inside)
console.log(myArr[0]);

//Arrays Methods
//push: push new elements in array at the end, need parameter
myArr.push(6);
myArr.push(7);
// console.log(myArr);

//pop: remove last element of array, no parameter required
myArr.pop();
// console.log(myArr);

//unshift: add element at the start, need parameter
myArr.unshift(0);
myArr.unshift(9);
console.log(myArr); //[9, 0, 0, 1, 2, 3, 4, 5, 6 ]
//problem: this method shift all the elements..if we have multiple values than this operation will cause time...and turn out to be effective
//but use when needed.
//that's why we decrease value of i in loop to add element at the start instead of using unshift

//shift: delete first element of an array, no parameter required
myArr.shift();
// console.log(myArr);[0,0,1,2,3,4,5,6]

// Questionair methods in array: you ask question about array and method will answer in true & false.
//includes: does array include given element or not.
console.log(myArr.includes(9)); //false, result data type:boolean..we can use this in comparision 

//indexOf(): give index of the element inside of array, it element does not exist it return -1.
console.log(myArr.indexOf(9)); //-1
console.log(myArr.indexOf(3)); // 3 is at index 4

//Important Method
//join(): add all the element of an array into string
//join(): convert array into string with values are comma separted and bind our array
const newArr = myArr.join(' '); 
console.log(myArr);
console.log(newArr); 
console.log(typeof newArr); //string 

// slice and splice method: asked in interview

//slice
console.log('A: ', myArr);
const myn1 = myArr.slice(1, 3);
console.log('slice: ', myn1); //original array is still same 
console.log('B: ', myArr);

//splice
const myn2 = myArr.splice(1, 3);
console.log('B: ', myArr); //original array is now changed/manipulate
console.log('splice: ', myn2);


// Q: diff between slice and splice ?
// ans: common answer: splice includes range slice does not
// good ans: splice manipulat the original array

// Note: When study array ...notice/ know which operation change/manipulate the original array.






