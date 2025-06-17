// class keyword: can not be variable and filename.
// ES6
// syntactical sugar

// syntax: contructor base
// class User{
//     // constructor: contsructor when we initialize object from class. When we use "new" keyword.
//     constructor(username, email, password){
//         // this -> context
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     // methods: no "function" keyword
//     encryptPassword(){
//         return `${this.password }abx`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// object
// const chai = new User('chai', 'chai@gmail.com', '123');
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// behind the scene
// User -> function but can behave like object
function User(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
}   

// adding more properties in User funciton 
User.prototype.encryptPassword = function (){
        return `${this.password }abx`
}
User.prototype.changeUsername = function (){
        return `${this.username.toUpperCase() }`
}

const tea = new User('tea', 'tea@gmail.com', '12234');

console.log(tea.encryptPassword());
console.log(tea.changeUsername());