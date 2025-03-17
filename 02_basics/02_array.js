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
//     depth: It specifies, how deep the nested array should be flattened. The default value is 1   if no depth value is passed as you guess it is an optional parameter.
//Return Value: It returns an array i.e. depth levels flatter than the original array, it removes nesting according to the depth levels.

//Another use flat method

// Using flat() on sparse arrays
// A sparse array may contain empty or "hole"  items within it, meaning that we can skip one or multiple array items. In javascript spare array is an array in which not all the elements are defined or initialized.
let sparseArray = [1,4, , 5,7,88, , 7,  , 6];
let denseArray = sparseArray.flat();
console.log(denseArray); // [1,4,5,7,88,7, 6];

// Web Scrapping: is an automatic method to obtain large amounts of data from websites. Most of this data is unstructured data in an HTML format which is then converted into structured data in a spreadsheet or a database so that it can be used in various application.

//Data scraping: Data scraping, or web scraping, is a process of importing data from websites into files or spreadsheets.
//sometime we receive data in diff format..like nodelist, objects, string.
//to convert them into array: use Array

//isArray(): return true if argument is array   
//the Array.isArray() is static method determines if passed array is an array. 
//syntax: Array.isArray(value);
//value:the value to be checked
//Return value: true if value is an array; otherwise false; false is always return if value is "typed array"
console.log(Array.isArray("hitesh"));
console.log(Array.isArray([3,5,6,7]));
console.log(Array.isArray(new Array(5)));
console.log(Array.isArray(new Int16Array([15, 56]))); // typed array
//some false cases
console.log(Array.isArray(null));
console.log(Array.isArray(undefined));
console.log(Array.isArray(12));
console.log(Array.isArray("Array"));
console.log(Array.isArray(true));
//Note: When checking for array instances, Array.isArray() is preferred over instancesof because it work across realms.

//converting into array
//from
console.log(Array.from('Hitesh')); //[ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"}));  //return empty array
//cannot directly convert it...tell it before ..make arrays of keys or values.
// Array.from() lets you create Arrays from:
    // iterable objects (objects such as Map and Set); or, if the object is not iterable,
    // array-like objects (objects with a length property and indexed elements).
//to convert an object use: Object.keys, Object.values(), Object.enteries().
// Array.from() never creates a sparse array. If the arrayLike object is missing some index properties, they become undefined in the new array.
// Array.from(obj, mapFn, thisArg) has the same result as Array.from(obj).map(mapFn, thisArg)  except that it does not create an intermediate array, and mapFn only receives two arguments (element, index) without the whole array, because the array is still under construction.
// JavaScript Array Method
//Array.from(): The Array.from() method return an array from any object with length property.
//Array.from() is a static method creates a new, shallow-copied Array instances from an "iterable" or" array-like" object
//retrun an array from any iterable object
//syntax: Array.from(object/arraLike, mapFunction, thisValue);
    //object: The object to convert to an array./An iterable or array-like object to convert to an array.
    
    //mapFunction: optional A map function to call on each item. A function to call on every element of the array.If provided, every value to be added to the array is first passed through this function, and mapFn's return value is added to the array instead.The function is called with the following arguments:
            //element: The index of the current element being processed in the array.
            //index: The index of the current element being processed in the array.
    //this value: optional A value to use as thisfor the mapFunction
    const string = 'sahil';
    let arr = Array.from(string);
    
    console.log(arr);
    
    // using square Array.from to get multiple of array.
    const nums = [1,2,3,4];
    function square(ele){
        return ele*ele;
    }
    const squareNum  = Array.from(nums,square);
    console.log(squareNum);
    
    // getting array of values from object
    const person = {
        name: 'sahil',
        rollNo: 32,
        email: 'sahil@google.com',
        isPassed: true,
    }
    
    const values = Array.from(Object.entries(person), (x) => {
        return x;
    }, this)
    
    console.log(values)
    
    //Array from a set
    const set = new Set(["foo", "bar", "baz", "foo"]);
    const setArr =  Array.from(set);
    console.log(setArr);
    
    //Array from a map
    const map = new Map([
        [1,2],
        [2,3],
        [4,6]
        ])
    const mapArr = Array.from(map);
    console.log(mapArr); // [[1, 2], [2, 4], [4, 8]];
    
    //values and keys in map
    const mapper = new Map([
         ["1", "a"],
         ["2", "b"],
        ])
    const mapperKey = Array.from(mapper.keys());
    const mapperValue = Array.from(mapper.values());
    console.log(mapperKey, mapperValue);
    //you can also make array from node-list, array like objects (arguments)
    //sequence generator.


//Converting mulitple variables or array into array
// .of : returns a new array from sets of elements.(variables , arrays)
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
//read - isArray(), from(), of();