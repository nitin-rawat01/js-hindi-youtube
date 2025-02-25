// While and do-while loop in javascript
let index = 0;

// while (index <= 10) {
//     console.log(`Value of index: ${index}`);
//     index = index + 2;
// }



let myArr = ["flash", "batman", "superman"];
let arr = 0

while (arr < myArr.length) { // equal to -> loop will cross the actual element.
    // console.log(`Value is ${myArr[arr]}`);
    arr = arr + 1;
}
//note: code readibility is top most priority.
//note: end of the day output is matter.


//do-While loop: loop will run atleast once and then condition is checked.

let score = 11;
do {
    console.log(`score is ${score}`);
    score++;
} while (score <= 10);


