// Using for in loop to iterate over object key.

const myObj = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "swift by apply"
}
for (const key in myObj) {
    // console.log(key); // print keys
    //console.log(`${key} shortcut is for ${myObj[key]}`); // print values    
}

//for in loop for array.

const programming = ['js', "rb", "py", "java", "cpp"];
for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
}

//In short: for-in loop over keys.

// for map 
const map = new Map();
// setting value in map
//Map.set(key, value)
map.set('In', 'India');
map.set('USA', 'United States of America');
map.set('FR', 'France');
for (const key in map) {
   console.log(key); // nothing happen// map is not iterable 
} 

// Summart
// loop over object -> used "for in" loop 
// loop over array -> used "for of" loop