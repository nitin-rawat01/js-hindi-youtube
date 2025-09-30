// every(): iterates over each element in array
// return true -> if provided function returns true for all elements.
// return false -> if the function return false any element.
//  In short -> Array Every tells you whether every element in your array passes your test. If every element passes, Every returns true. If just one element in the array fails, Every will return false.
// As soon as Every finds a false result, it will short-circuit the loop and continue no more - giving us a performance boost.
// every only returns a boolean value.
// systen -> arr.every(callback, thisArg);
 
let arr = [56, 92, 18, 88, 12, 92,13];
console.log(arr.lastIndexOf(92));
console.log(arr.indexOf(92));
let value = arr.every(isEven);
function isEven(element, index, array){
    return element % 2 == 0;
}

console.log(value);