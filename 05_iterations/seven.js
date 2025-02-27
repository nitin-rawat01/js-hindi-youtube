// Map: return new Array of modified values. 
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.map( (num) => num+10);
// const newNums = myNums.map( (num) => {return num+10});

console.log(newNums);


// chaning 
const newNums2 = myNums
                .map( (num) => num*10) //[10, 11, and so on]
                .map((num) => num + 1) //  return everything
                .filter( (num) => num >=40) // true or false
// remember: last method should always return an array.

console.log(newNums2);