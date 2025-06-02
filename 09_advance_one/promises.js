// everything in javascript is an object reference/ prototype ref.

// Asynchronous operations
// : file ascess
// : some calculation on data
// : crptography (password encryption)
// : network call
// : mobile dev(camera, microphone access).

// promise: operation completed in future.

// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// promise -> is an object representing eventual completion or failure of an asynchronous operation.
// to create another instances of a object in javascript is same as taking instances of a class.
// new -> get instances
// A Promise is in one of these states:

//     pending: initial state, neither fulfilled nor rejected.
//     fulfilled: meaning that the operation was completed successfully.
//     rejected: meaning that the operation failed.

// promise: create and cosumption
// promise: mostly consume

// creating promises
const promiseOne = new Promise(function(resolve, reject){
    // promise two part: resolve, reject
    // Do an asyn task
        // DB calls, cryptography, network
    
    setTimeout(function(){
        console.log('Async task is completed');
        resolve(); // execute -> connect to .then
    }, 1000);
}); // get object

// consumption of promise
promiseOne.then(function (){
    // automatically receive argument.
    console.log("Promise is Consumed");

}) // .then direct relation/connection with resolve


// second method
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task two');
        resolve();
    }, 1000)
}).then(function(){
    console.log('Async two resolve');
})

// third promise
const promiseThree = new Promise(function (resolve, reject){
    setTimeout(function(){

        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// fourth promise
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"hitesh", password: "123"});
        } else{
            reject('Error! Something went wrong')
        }
    }, 2000)
})
//consuming promise
// chaining of .then
const username = promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Promise is either resolve or rejected'));
console.log('username: ', typeof username); // return -> promise object

//promise five
const promiseFive = new Promise(function(resolve, reject){
     setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"javaScript", password: "123"});
        } else{
            reject('Error! JS went wrong')
        }
    }, 2000)
})

// async await: same as .then .catch but wait for asynchronous operation to be completed, if operation is not completed then it gives error

async function consumePromiseFive(){
   try {
    const response =  await promiseFive; // promise object (eventual completion of object )
   console.log(response);
   } catch (error) {
    console.log(error);
   }
}
consumePromiseFive();


// handling api with async await and .then .catch
// async function getAllUsers(){
//   try {
//     // fetch: object return -> promise
//     const response =  await fetch('https://jsonplaceholder.typicode.com/users');
//     //converting into json: it takes time to convert into json..this is a asyn operation
//     const data = await response.json();
//     console.log(data);
    
//   } catch (error) {
//     console.log("E:", error)
//   }
// }
// getAllUsers();


// .then .catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
} )
// first .then will complete only then next .then will run
.then((data) => {
    console.log('last .then')
        console.log(data);
}).catch((error) => console.log(error));

// another api: https://jsonplaceholder.typicode.com/users
// promise: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise