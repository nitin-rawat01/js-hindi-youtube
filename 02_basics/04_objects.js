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
// console.log(regularUser.fullname.userfullname.firstname);

//Optional Chaining:purpose: provide protection , usecase: when we receive response from api
// how it works: if fullname exist then go for userfullname...help us to avoid if-else
// console.log(regularUser.fullname?.userfullname.firstname);

// console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isLoggedIn: false }

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

// console.log(obj3);
// console.log(obj1);

//third method: spread operator
const obj6 = {...obj1, ...obj2};
//  console.log(obj6);



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


//  console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isLoggedIn: false }

//objects methods : Very Important
//getting all the keys of an objects
// console.log(Object.keys(tinderUser)); //return array's keys of object
//now we can apply loop to the array //[ 'id', 'name', 'isLoggedIn' ]

//getting all the values
// console.log(Object.values(tinderUser));

//getting all the key-value pair
// console.log(Object.entries(tinderUser));

//to check if object includes the property or not 
// console.log(tinderUser.hasOwnProperty("isLoggedIn")); //true
// console.log(tinderUser.hasOwnProperty("isLogged")); //false

//to check more important objects method : create objects on browser console
//note: you can close the looping of the objects by using some methods 

//Object de-structure and JSON API intro
//de-structuring of objects 
// In react: receive object -> need to destructure object -> get values (we can also directly access the values)

const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

//getting values of object
console.log(course.courseInstructor);

//note: above approach is bad if we have to use value of courseInstructor multiple times throughout the code. It make our program bulky

//to make code clean we have another syntax
const {courseInstructor:instructor} = course;
//now value of courseInstructor is store in instructor variable
//syntax: const {keytoExtracted:variable name} = object;
console.log(typeof instructor);
console.log(course);
//this is called object destructuring 

//Use of destructuring of objects in react
//creating props in react
// const navbar = ({prop}) => { //props by default,  we receive props by default

// }
// navbar(company = "hitesh")

// API Concepts
//api: values from backend and how we write
//before api values: xml structure
//now api values: json
// json: {} object but no name but object has name
//key and value both are string in json
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//we recieve api in json -> {}
//but sometime we receive api in array format and we have many objects inside of that array
[
    {},
    {},
    {},
    {},
]
//we have to spend time to understand the response from the api..or we can say it takes time to understand json
//website: json formatter : help us to understand json 
//for practise go to : randomuser.me -> to format the json /to understand the api -> json formatter
//json: javascript object notation
// all the api is in json format






