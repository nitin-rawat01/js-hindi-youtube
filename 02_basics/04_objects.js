// Singleton Objects
// Declaring objects with the help of constructor
const tinderUser = new Object(); //Return: exactly object , //singleton object // internal they are same
// const tinderUser = {}; non singleton object : imp from interview point of view

//Adding properties
 tinderUser.id = "123abc";
 tinderUser.name = "Sammy"
 tinderUser.isLoggedIn = false
 
// Another Object: object inside of an object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: 'hitesh',
            lastname: 'choudary'
        }
    }
}
// Accessing Values: dot notation
console.log(regularUser.fullname.userfullname.firstname);

//Optional Chaining:purpose: provide protection , usecase: when we receive response from api
// how it works: if fullname exist then go for userfullname...help us to avoid if-else
console.log(regularUser.fullname?.userfullname.firstname);

console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isLoggedIn: false }

//Merging Objects
const obj1 = {1: "a", 2:"b"}
const obj2 = {3:"a", 4:"b"};
const obj4 = {5:"a", 6: "b"};

//wrong way to merge objects: create objects inside of an objects
//const obj3 = {obj1, obj2}; // {obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' }}

//using assign method of Object
// he Object.assign() static method copies all enumerable own properties from one or more source 
//  objects to a target object. It returns the modified target object.
// syntax: Object.assign(target, source); //target will be modified
// const obj3 = Object.assign(obj1, obj2); //obj1 will be modified and will be same
const obj3 = Object.assign({}, obj1, obj2); //copy all the values to empty objects //read documentation // since target is an empty object obj1 and obj2 will remain same.
const obj5 = Object.assign({}, obj1, obj2, obj4); 

console.log(obj3);
console.log(obj1);

//third method: spread operator
const obj6 = {...obj1, ...obj2};
 console.log(obj6);



 //Values from database: most of the time we receive array of objects from data base
 const users = [ //array ka object 
    {
        id: 1,
        email: "hot@gmail.com"
    },
    {
        id: 1,
        email: "hot@gmail.com"
    }, 
    {
        id: 1,
        email: "hot@gmail.com"
    }
 ]
 //accessing first value of first object
 //array[0] -> object.key -> value
 users[1].email;


 console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isLoggedIn: false }

//objects methods : Very Important
//getting all the keys of an objects
console.log(Object.keys(tinderUser)); //return array's keys of object
//now we can apply loop to the array //[ 'id', 'name', 'isLoggedIn' ]

//getting all the values
console.log(Object.values(tinderUser));

//getting all the key-value pair
console.log(Object.entries(tinderUser));

//to check if object includes the property or not 
console.log(tinderUser.hasOwnProperty("isLoggedIn")); //true
console.log(tinderUser.hasOwnProperty("isLogged")); //false

//to check more important objects method : create objects on browser console
//note: you can close the looping of the objects by using some methods 
