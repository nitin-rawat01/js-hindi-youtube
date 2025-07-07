// async-await:
// async before function means one simple thing: a function always returns a promise.  Other values are wrapped in a resolved promise automatically. 
// For instance, this function returns a resolved promise with the result of 1; let’s test it:
// async

async function f(){
    return 1;
}
console.log(f()); // promise , state: fullfilled, result -> 1

// …We could explicitly return a promise, which would be the same:

async function newF(){
    return Promise.resolve(1);
}

console.log(newF()); // promise, state: pending/fullfilled
// So, async ensures that the function returns a promise, and wraps non-promises in it

// Await: works only inside async function : The keyword await makes JavaScript wait until that promise settles and returns its result.
// The await operator is used to wait for a Promise and get its fulfillment value.It can only be used inside an async function or at the top level of a module.
// syntax:
// await expression; expression -> A Promise, a thenable object, or any value to wait for.

async function thirdFunc(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("done");
        }, 1000)
    })
    console.log(promise); // promise in pending state
    let result = await promise; // wait unitl promise resolve (*)

    console.log(result);

}
// The function execution "pauses" at the line * and resumes when the promises settles, with result becoming its result. So the code above shows “done!” in one second. 
// thirdFunc();

// Let's emphasis: the "await" literally suspends the function execution until the promise settles, and then resumes it with the promise result.  That doesn’t cost any CPU resources, because javascript engine can do other jobs in the meantime:  execute other scripts, handle events, etc.

// It’s just a more elegant syntax of getting the promise result than promise.then. And, it’s easier to read and write.

// note: Can’t use await in regular functions
// If we try to use await in a non-async function, there would be a syntax error:


async function showAvatar(){
    // read our json
    // let response = await fetch('/article/promise-chaining/user.json');
    // let user = await response.json();
    
    // get user from github
    let githubResponse = await fetch('https://api.github.com/users/hiteshchoudhary');
    let githubUser = await githubResponse.json();
    console.log( githubResponse)
    
    // creating img element and storing img .
    // let img = document.createElement('img');
    // img.src = githubUser.avatar_url
    // img.className = "promise-avatar-example";

    //wait for 3-sec 
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
    
    // img.remove();

    return githubUser;
}
// showAvatar();
// Modern browsers allow top-level await in modules. In modern browsers, await on top level works just fine, when we’re inside a module. 

let response = await fetch('https://api.github.com/users/hiteshchoudhary');
let user = await response.json();

// console.log(user);

// If we’re not using modules, or older browsers must be supported, there’s a universal recipe: wrapping into an anonymous async function.

(async () => {
    let response = await fetch('https://api.github.com/users/hiteshchoudhary');
let user = await response.json();

console.log('async inside  of an iffe',user);
})();


// await accepts "thenables"
// Like promise.then, await allows us to use thenable objects (those with callable then method).
// The idea is that a third-party object may not be a promise, but promise-compatible: if it supports .then, that’s enough to use it with await.

class Thenable {
    constructor(num){
        this.num = num;
    }

    then(resolve, reject){
        console.log("Inside of class", resolve);
        setTimeout(resolve(this.num*2), 1000); // (*)
    }
}

async function fourth(){
    // wait for 1 second, then result becomes 
    let result =  await new Thenable(34);
    console.log(result);
}
// fourth();
// if await gets a non-promise object with .then, it calls that method providing the built-in-functions resolve and reject as arguments (just as it does for a regular Promise executor). Then await waits until one of them is called (in the example above it happens in the line (*)) and then proceeds with the result.

// Async class methods
// To declare an async class method, just prepend it with async:
class Waiter {
    async wait() {
        return await Promise.resolve(1);
    }
}

// new Waiter().wait().then(console.log('async-in-class ',response));

// Error handling: In real situations, the promise may take some time before it rejects. In that case there will be a delay before await throws an error.
// we can catch that error using try..catch, the same way as a regular throw.

async function fifth(){
    try {
        let response = await fetch('http://no-such-url');
    } catch (error) {
        console.log('Error:', error);  // TypeError: fetch failed
    }
}
// in the case of error, the control jumps to the catch block. we can also wrap multiple lines
// fifth();

async function sixth(){
    try {
        let response = await fetch('http://no-such-url');
        let user = response.json();
    } catch (error) {
        console.log('Both Error', error);
    }
}
// sixth();

// handling error through .catch
async function seventh(){
        let response = await fetch('http://no-such-url');
}
// seventh().catch(error => console.log("Error in Seventh Function: ",error));// (*) TypeError: fetch failed

// async/await and promise.then/catch
// When we use async/await, we rarely need .then, because await handles the waiting for us. And we can use a regular try..catch instead of .catch. That’s usually (but not always) more convenient.

// But at the top level of the code, when we’re outside any async function, we’re syntactically unable to use await, so it’s a normal practice to add .then/catch to handle the final result or falling-through error, like in the line (*) of the example above.

// async/await works well with Promise.all
// When we need to wait for multiple promise, we can wrap them in Promise.all and then await

// wait for the array of results
// let results = await Promise.all([
//   fetch(url1),
//   fetch(url2),
// //   ...
// ]);

//In the case of an error, it propagates as usual, from the failed promise to Promise.all, and then becomes an exception that we can catch using try..catch around the call.
// Summary
// The async keyword before a function has two effects:

// Makes it always return a promise.
// Allows await to be used in it.
// The await keyword before a promise makes JavaScript wait until that promise settles, and then:

// If it’s an error, an exception is generated — same as if throw error were called at that very place.
// Otherwise, it returns the result.
// Together they provide a great framework to write asynchronous code that is easy to both read and write.

// With async/await we rarely need to write promise.then/catch, but we still shouldn’t forget that they are based on promises, because sometimes (e.g. in the outermost scope) we have to use these methods. Also Promise.all is nice when we are waiting for many tasks simultaneously.


async function loadjson(url){
    let response = await fetch(url);
    if(response.status === 200){
        let json = await response.json();
        return json;
    }
     throw new Error(response.status);
}
loadjson('https://javascript.info/no-such-user.json').catch(error => console.log(error));