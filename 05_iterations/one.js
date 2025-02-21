// loops also called iterations.
// for loop: syntax
for (let i = 0; i <= 10; i++) { //{} -> block scope
    const element = i;
    if(element == 5){
        // console.log("5 is best number")
    }
    // console.log(element); //0 to 9
}
//note: selecting multiple i to change to i ->duplicate -> ctrl + d

// console.log(element); //not accessible out of its scope


// nested loop 
for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop: ${i}`)
    for (let j = 1; j < 10 ; j++) { // i can cause problem: mis-match
    // console.log(`Inner loop value: ${j} and inner loop ${i}`)
        // console.log(i + '*' + j + "=" + i*j); //print all table

    }
}
//outer loop: 1 inner loop: 10


// Array
myArray = ["flash", "batman", "superma"];

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element); 
}
// value after array: undefined.
// to stop infinite loop in terminal-> ctrl + c.
// index++: is vert important, need to change index for condition otherwise it can lead to infinite loop.

//Case: getting out of loop before condition turns false.
// Keywords: break and continue
//break: to break control flow we use break
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i: ${index}`);
}
//short to copy: shift + alt + down arrow
// continue: skip the condition for just one time. loop will continue after ward
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i: ${index}`);
}
 


 

