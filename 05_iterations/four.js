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
    console.log(key);
    console.log(programming[key]);
}

//In short: for-in loop over keys.

// for