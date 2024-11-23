//Pass-By Value and Pass-By Reference
// In js when function is called, the arguments' value can be passed by two way pass by value and pass by reference.
// Primitive data type are passed by value.
// Non-primitive data type are passed by reference.
//non-primitive: objects, function, array.

// Pass by value in Javascript
// Pass by value in JavaScript means that a copy of the actual parameter’s value is made in memory i.e., a new memory allocation is done, and all the changes are made in that new value (i.e., copied value). The original value and the copied value are independent of each other as they both have a different space in memory i.e., on changing the value inside the function, the variable outside the function is not affected.

// In simple language, we can understand it as, in a pass-by value, the function receives a copy of the variable, which is independent of the originally passed variable.
// Pass by value in JavaScript requires more space as the functions get a copy of the actual content therefore, a new variable is created in the memory.

// when variable is created, equal operator notice whether you are assigning that variable to a primitive type or non -primitive type value and then works accordingly.
// Note: When we use the = operator, there is a function call (behind the scenes) where pass by value (or reference) in JavaScript is done.
let num1 = 10;
// When we assign a variable a primitive value, the equals operator sets up a space (location/address) in the memory (let's say at address 2001) to store the data of that variable (num1) to that address.

let num2 = num1;
//now we set num2 equal to num1..equals operator create a new space is created for num2 and copy of value of num1 is stored in new space.
console.log(num2, num1); //10, 10
num1 = 20;
console.log(num2, num1); // 10, 20
// Now, if we change the value of num1, then num2 will have no effect as it has its own separate space in memory and now it has nothing to do with the value of num2 as they both have different spaces (address) in memory.
function multiplication(temp){
    temp *= 50;
    return temp;
}
let num = 30;
let result = multiplication(num);
console.log(result);
console.log(num);
// we passed the variable num to the multiplication function. Javascript automatically copies the value of variable num to variable tmp. So, here tmp is a new variable that is allocated a new space in the memory and is independent of num.
// Now all the changes made by the function multiplication are done directly to the variable tmp; thus the value of num remains unaffected.

// Pass by Reference in JavaScript
// Unlike pass by value in JavaScript, pass by reference in JavaScript does not create a new space in the memory, instead, we pass the reference/address of the actual parameter, which means the function can access the original value of the variable. Thus, if we change the value of the variable inside the function, then the original value also gets changed.
// It does not create a copy, instead, it works on the original variable, so all the changes made inside the function affect the original variable as well.
let obj1 = {website: "Scaler Academy"}
let obj2 = obj1;
console.log(obj1); // {website: "Scaler Academy"}
console.log(obj2); // {website: "Scaler Academy"}

obj1.website = "Scaler Topics";
console.log(obj1) //{website: "Scaler Topics"}
console.log(obj2) //{website: "Scaler Topics"}
//Pass by Reference in Object (with Function)
let originalObject = {
    name:"Scaler Academy",
    rating: 4.5,
    topic: 'Javascript'
}

function demo(tempObj){
    tempObj.rating = 5;
    return tempObj.rating;
}
console.log('Original Object rating', originalObject.rating);
console.log('Demo Object rating', demo(originalObject));
console.log('Original Object rating', originalObject.rating);
// From the above example, we can see that on changing the value tmpObj, the value of originalObj also gets changed. The reason for this is that when we call demo and pass the object, then originalObj is passed by its reference, so the local parameter tempObj will point to the same object which we defined, i.e., the originalObj.
// So, in this case, we are not dealing with two independent copies instead, we have variables that are pointing to the same object, so, any changes made to this object will be visible to the other variable.

//Pass by Reference in an Array (with Function)
let orgArray = ["scaler", "academy", "is", "the"];

function pushArray(tempArr){
    tempArr.push('best');
    console.log(tempArr);
}
console.log(orgArray);
pushArray(orgArray);
console.log(orgArray);

//same concept as compare to obj




///////////////
//Pass by value and pass by reference in javascript
//When you create a varialbe in js, it reserves  a space in computer's memory. And this space will hold the value assigned to that variable.
let x = 10; // a variable x is declared and assigned a value of 10
// The variable x is like a label attached to this memory space where 10 is stored.
// js is primarily pass by value language.
//pass by value means when a variable is assign to another variable , the value stored in a variable is copied to new variable. both variable are independent of each other,each occupying its own memory space.
let a =10;
let b = a;
a = 20;
console.log(a); // 20
console.log(b); //10
// In this example, we first declare a variable a and set it equal to 10. We then declare another variable b and set it equal to a. At this point, both a and b are 10. However, when we change the value of a to 20, b remains 10 because the value was passed by value - meaning the value 10 was copied to b when it was declared, and changes to a do not affect b.

//Pass by reference.
//use pass by ref when dealing with objects
//objects stored in memory space separately and variable of object hold the ref or adress of that object
// when we assign a variable to another variable ..object value does not get copied ..reference to the object is get copied...due to which change in one variable changes the obj..because they are pointign to the same obj
//When an object is created in JavaScript, it is stored in a memory space, and the variable associated with it stores the memory address or reference where the object is stored.

let person = {name: 'salman'};
let actor = person;
actor.name = 'sharukh';
console.log(person);
console.log(actor);