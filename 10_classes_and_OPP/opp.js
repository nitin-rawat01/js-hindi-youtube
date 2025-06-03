
// Object Literal (literally ek object banana hai)
// In javascript this is base unit.
// Object literal is the basic unit.

const user = { // literally ek object
    //Properties
    username: 'hitesh',
    loginCount: 8,
    signedIn: true,

    //methods
    getUserDetails: function () {
        console.log('Got User details from Database');
        //  console.log(`username: ${username}`); // error: username is not defined
        // Reason: it does not knwo about which username we are talking about
        // function is placed on call stack..created a function execution context...function does not know about user variable..to get values outside of the function execution cotenxt we use this keyword.
        console.log(`username: ${this.username}`); 
        console.log(this)
    }
    // this keyword: current context
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this) ; // {} nothing inside global object
// About this , prototype in js 
// let myArr = [1,2,3];
// let myArr2 = [1,2,3,4,5,6];
// How map method know on which array have to apply loop..what is the current context(array?)
// this keyword is used for current context..
// map is inside prototype

// now if we have to create second user ..we have copy paste. bad mthod


// constructor function
// new -> constructor function
// new ->create new context 
// constructor function allows to create mulitple instances from single object literal.
// In some situation(promise or date) we need new instance..does not want to affect the old values(this, etc)..keep your context(execution context). 
// const promiseOne = new Promise();
// const date = new Date();

// function -> global execution context, ek hi bar run hota hai
function User(username, loginCount, isLoggedIn){
        // this.username: variable
        this.username = username
        this.loginCount = loginCount
        this.isLoggedIn = isLoggedIn

        // methods
        this.greeting =  function(){
            console.log(`welcome ${this.username}`)
        }
        // return this is implicitly define
        // return this;
}

// creating object 
// const userOne = User('hitesh', 12, true);
// const userTwo = User('chai aur code', 11, true); // this will overwrite the value of userOne
// console.log(userOne);

const userOne = new User('hitesh', 12, true);
const userTwo = new User('chai aur code', 11, true);
console.log(userOne);
console.log(userTwo);

// note: when we use new keyword an empty object is created which is called instance.
// step1: new object is created.
// step 2: new key word called constructor function.... constructor function pack all the arguments inside of it  and give them back

//step 3:  all the arguments injects inside this keyword
// step 4: get all the value in function 


// summar:
// object create
// all the properties will pass on to the object
// 

console.log(userOne.constructor); // function User
// constructor property is the reference to User function itself.
// function User -> constructor
// instanceOf
console.log(userOne instanceof User); // true