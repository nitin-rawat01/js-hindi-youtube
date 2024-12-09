// Singleton Objects
// Declaring objects with the help of constructor
const tinderUser = new Object(); //Return: exactly object , //singleton object
// const tinderUser = {}; non singleton object : imp from interview point of view

//Adding properties
 tinderUser.id = "123abc";
 tinderUser.name = "Sammy"
 tinderUser.isLoggedIn = false
 
// another object
// const regularUser = {
//     email: 
// }

 console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isLoggedIn: false }


