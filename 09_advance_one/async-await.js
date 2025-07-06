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
thirdFunc();

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
    let img = document.createElement('img');
    img.src = githubUser.avatar_url
    img.className = "promise-avatar-example";

    //wait for 3-sec 
    await Promise((resolve, reject) => setTimeout(resolve, 3000));
    
    img.remove();

    return githubUser;
    
}
showAvatar();