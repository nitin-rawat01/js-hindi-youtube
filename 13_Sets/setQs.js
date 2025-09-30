// Problems related to sets 
// Remove duplicates from an array
let arr = [1, 2, 2, 3, 4, 4, 5];
let noDuplicate = [...new Set(arr)];
console.log(noDuplicate);

// Check if all elements in an array are unique
let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 2, 3];
function unique(arr){
    return arr.length === new Set(arr).size;
}

console.log(unique(arr1)); // true
console.log(unique(arr2)); // false

// find the intersection of two arrays
let arr3 = [1, 2, 3];
let arr4 =  [2, 3, 4];

let setB =  new Set(arr4);
let intersection = [...new Set(arr3)].filter(item => setB.has(item));
console.log(intersection);

// find the union of two arrays
let arr5= [1,2,3];
let arr6= [3,4,5];
let union = [...new Set([...arr5, ...arr6])];
console.log(union);

// find the difference of two arrays(elements in A but not in B)
let arr7 = [1, 2, 3];
let arr8 = [2,4];
let setC = new Set(arr8);

let difference = [...new Set(arr7)].filter(item => !setC.has(item));
console.log(difference);


// Count the number of distinct elements in an array
let arr9 = [10, 20, 10, 30, 20, 40];
console.log([...new Set(arr9)].length);

// Check if two strings have the same set of characters
let string1 = "abc";
let string2 = "abz";

let setS = new Set(string1);
let setM = new Set(string2);
let isEqual = setS.size === setM.size && [...setS].every(ch => setM.has(ch));

console.log(isEqual? "Strings are Equal": "Strings are not Equal");


// find the first repeating character in an array
let arr12 = [5, 3, 4, 3, 5, 6];
let set12 = new Set(arr12);
console.log(set12);

let norepeat = [...set12].find((ele) =>{ 
    console.log(ele);
  return  arr12.indexOf(ele) && arr12.lastIndexOf(ele)
    
});
console.log(norepeat);

// find the first repeating character in an array
let arr14 = [5, 3, 4, 3, 5, 6];
let seen = new Set();
let firstRepeat = null;

for (let num of arr14) {
  if (seen.has(num)) {
    firstRepeat = num;
    break;
  }
  seen.add(num);
}

console.log('chat gpt solution', firstRepeat);

// check if a string has all unique characters
// hello -> false
// world -> true
let str23 = 'hello';
let str25 = 'world';
function unique(str){
    let setOne = new Set(str);
    if(str.length === setOne.size){
        return 'Strings has unique characters';
    }
    return 'Strings does not has unique characters';
}
console.log(unique(str25));
