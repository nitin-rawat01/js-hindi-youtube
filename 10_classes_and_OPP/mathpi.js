// Interview related question: object
// note: you can also stop the object/array from iterable
// can you change the value of Math.PI?
console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI);

// getOwnPropertyDescriptor = ye appko object ke kuch hidden chizo ke bare me btati hai.
// want to know object property
const descriptort = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptort);
// conclusion: you can not change the value of PI in math object

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvialable: true, 
    orderChai: function(){
        console.log('chai nhi bni');
    }
}
console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai)); // undefined
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for(let [key, value] of Object.entries(chai) ){
    if(typeof value !== 'function'){ // stopping from printing function 
    console.log(`${key}, :${value}`)
    }
}



// changin properties specificaiton
// stopping name from being enumerable
Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false,
    
})
for(let [key, value] of Object.entries(chai) ){
    if(typeof value !== 'function'){ // stopping from printing function 
    console.log(`${key}, :${value}`)
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

