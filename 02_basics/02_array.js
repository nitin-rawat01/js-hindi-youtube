// Basics of array: use in react and node.js
const marvel_heros = ['thor', 'ironman', 'spiderman']
const dc = ["superman", "flash", "batman"]

//can push merge two array? -> short answer -> no

// marvel_heros.push(dc);

//console.log(marvel_heros); //return array(dc) inside of an array(marvel_heros)
//array can take any type of entry data -> num, string, boolean, array and objects
//console.log(marvel_heros[3]); //["superman", "flash", "batman"]
//console.log(marvel_heros[3][1]); //flash 

//using concat: concat combine(merge) two or more array without modifying the original array. It return new array.

let newConcatArray = marvel_heros.concat(dc);
console.log('use of concat:', newConcatArray);
//reason we dont use concat to merge
// concat() method help us achieving a desisered output, like merging the two array, but the problems with concat are, It complicated to concat more then one array simultaneously and also It takes extra space and do the merging operation.
// concat: it confusing to merge more than one array, take extra space  and do the mergin operation.

//Using Spread Operator to merge two array: spread Operator -> ...
// spread: cheeso ko spread kr diya
const all_new_heros = [...marvel_heros, ...dc];
// after ... it is no longer an array ..array elements become individuals ..and we put all those individuals into a single array
// console.log(...marvel_heros); //thor ironman spiderman
// console.log('use of spread Operator', all_new_heros);

// rare use of array
//flat method:The flat() method concatenates sub-array elements.
// The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//syntax: array.flat(depth) //dept-> number(1,2,3 etc) or can use infinity.
//depth-> optional(how deep should a nested array flatened) default is 1 
const another_array = [1, 2, 3, [4, 5, 6], 7,[6, 7,[4, 5]]];

const real_anothe_array =another_array.flat(Infinity); //try to avoid infinity
console.log(real_anothe_array); //[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


//Data scraping: Data scraping, or web scraping, is a process of importing data from websites into files or spreadsheets.
//sometime we receive data in diff format..like nodelist, objects, string.
//to convert them into array: use Array
//isArray(): return true is argument is array
console.log(Array.isArray("hitesh"));

//converting into array
console.log(Array.from('Hitesh')); //[ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"}));  //return empty array
//cannot directly convert it...tell it before ..make arrays of keys or values.

//Converting mulitple variables or array into array
// .of : returns a new array from sets of elements.(variables , arrays)
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
//read - isArray(), from(), of();