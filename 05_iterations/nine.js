// reduce in JavaScript
const myNums = [1,2,3,];
// syntax
/*
 const initialValue = 0; // this initialValue will be the value of accumalator only at the start of the loop
const sumWithInitial = array1.reduce( 
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
//currentValue: value of array
//accumulator: it is an empty variable, in the beggining it's value depends on the initialValue of the reduce parameter.
 */



const myTotal = myNums.reduce( function(acc, currVal){
    console.log(`acc: ${acc} and currVal: ${currVal}`);
    return acc + currVal;
}, 0)

// console.log(myTotal);

// use case: shopping cart: add prices 
const myTotal1 = myNums.reduce((acc, curr) => acc+ curr, 0);
console.log(myTotal1)


// shopping cart example
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999,
    },
    {
        itemName: "data science course",
        price:12999,
    }
    
]

//create a function to add the price of the courses.

const priceToPay = shoppingCart.reduce(function(acc, curr){

    return acc + curr.price
}, 0)
console.log(priceToPay);