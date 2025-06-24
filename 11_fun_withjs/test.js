// v8 engine: inside node 
// const myArr = []
// %DebugPrint(myArr)

// Array Types
// 1. Continious Array
// 2. Holey Array
// Array - optimization
// Array Types
// SMI - small integer
// Packed element
// Double (float, string, function)

// Based on elements and there position javascript internally optimize the array.

// Elements in Array
// string, numbers inside of an array are called elements of array.

// methods of array: based on elements every methods have its own 
// implmentation
// forEach for string have diff optimization
// forEach for num have diff optimization.
// continuous array optimizaiton
// holey array optimization.

// Arrays: CONTINUOUS ELEMENTS
const arrTwo = [1,2,3,4,5]; // Packed_SMI_ELEMENTS: Most optimize

arrTwo.push(6.0) // Packed_Double_Elements
// can not return to Packed_SMI_ElEMENTS

arrTwo.push('7'); // PACKED_Elements

arrTwo[10] = 11; // HOLEY_ELEMENTS (include multiple types)

console.log(arrTwo); //[ 1, 2, 3, 4, 5, 6, '7', <3 empty items>, 11 ] elements empty spaces make the array less optimize..introduce holes
console.log(arrTwo.length);
// very costly operation
console.log(arrTwo[9]); // accessing empty position 
console.log(arrTwo[19]); // accessing empty position // bound check

// how array find value of an index
//for arrTwo[19] bound check: easy
    // accessing elements bigger than length of array

// for arrTwo[9];
    // bound check
    // hasOwnProperty(arrTwo, 9);
    // hasOwnProperty(arrTwo.prototype, 9);
    // hasOwnProperty(Object.prototype, 9);
// holes are very expense in js
    
const arrThree = [1,2, 3,4,5]; 
console.log(arrThree[8]) ; //bound check: out of bound
console.log(arrThree[2]); // two steps

// Highest Optimize: CONTINOUS
// SMI > DOUBLE > PACKED 

// HOLES 
// H_SMI > H_DOUBLE > H_PACKED
//PACKED: CONTAIN EVERY DATA TYPE: NUM, STRING 
// IF DOWN GRADE CAN NOT UPGRADE, EVEN AFTER DELETING ELEMENT

const arrFour = new Array(3);
// just 3 holes. HOLEY_SMI_ELEMENTS
arrFour[0] = '1' // HOLEY_ELEMENTS(H_PACKED) DOWNGRADE
arrFour[0] = '2' // HOLEY_ELEMENTS(H_PACKED) DOWNGRADE
arrFour[0] = '3' // HOLEY_ELEMENTS(H_PACKED) DOWNGRADE

// BETTER APPROACH
const arrFive = []; // empty array:  SMI
arrFive.push('1'); // PACKED_ELEMENTS
arrFive.push('2'); // PACKED_ELEMENTS
arrFive.push('3'); // PACKED_ELEMENTS

const arrSix = [1,2,3,4,5];

arrSix.push(NaN); // PACKED DOUBLE
arrSix.push(Infinity); // PACKED DOUBLE

// Recommendations: for,for-of, for-in, forEach use internal by default method of javascript.


// Summary:
// There are two types of arrays: holey arrays and continuous arrays. These arrays can contain three types of elements: SMI (Small Integer), Packed Element, and Double.

// 1. **Holey Array**: A holey array is an array that contains missing or empty elements. For example, [1, 2, , 4] is a holey array because it has a missing element. Holey arrays are less optimized for performance.

// 2. **Continuous Array**: A continuous array is an array that does not contain missing or empty elements. For example, [1, 2, 3, 4] is a continuous array because it has no missing elements. Continuous arrays are more optimized for performance.

// In terms of optimization, continuous arrays are more efficient and optimized for various operations compared to holey arrays.






