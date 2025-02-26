// for-each loop
const coding = ['js', 'ruby', 'java', 'python', 'cpp'];
// few loops are diretly added to the array as a property.
//kuch loop directly array ke andr property me add kr diye jaate hai.
// for each: loop by default injected in prototype of array.


// for each are higher order function: method.
//callback function: has no name, 
//with regular function as a callback.
// coding.forEach( function  (item) {
//     console.log(item);
// } )

//with arrow function as a  callback
coding.forEach( (item) => {
    // console.log(item); 
})

//taking function reference.
function printMe(item) {
    console.log(item);
}

coding.forEach(printMe); // just give reference and not execute the function printMe() -  wrong 

coding.forEach( (item, index,  arr) => {
        console.log(item, index, arr);
})

// Dealing with common scenario with forEach: [{}, {}, {}]
// use case: when receive data from database: array with each value being an object
const myCoding = [
    {
        languageName: 'JavaScript',
        languageFileName: 'js'
    },
    {
        languageName: 'Java',
        languageFileName: 'java'
    }, {
        languageName: 'Python',
        languageFileName: 'python'
    }
]


myCoding.forEach((item, index, arr) => {
    console.log(item.languageName);
} )
