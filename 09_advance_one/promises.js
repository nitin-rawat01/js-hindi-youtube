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
        let error = true;
        if(!error){
            resolve({});
        }
    }, 2000)
})


