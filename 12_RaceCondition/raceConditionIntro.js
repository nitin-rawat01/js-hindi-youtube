// In javascript, race condition occurs when two or more operations execute asynchronously and access or modify shared resources (like a variable, UI state, or database) in an unpredictable order — leading to unexpected or incorrect results.
//  Simple Explanation:
// A race condition happens when your code depends on timing — and things run in the wrong order.
// Key note: JavaScript is single threaded, but it handles asynchrounous operations (like network requests, timers, file reads, etc.)  via the event loop. Because of this, race conditions typically arise in asynchronous code, not in normal synchronous code.

// Race Condition in JS: Hitesh Choudary
// Race Condition: 
// In case of async functions: we don't have controll which function will finish the execution/work.
// single resource/variable
// 2-3 async function , changing the single resources/variables
// we dont know which async function will change the value first.
// in case of fetch api ..which network call will return first is not under our controll...we have to manage the case.


let counter = 0;

function incrementCounter(value){
   return  new Promise(resolve => {
        setTimeout(() => {
           counter = counter + value;
        console.log(`counter is incremented to ${counter}`);
        resolve(); 
        }, Math.random() * 100);
    })
}

async function startRace(){
    console.log("Starting race")
    await Promise.all([
        incrementCounter(5),
        incrementCounter(10)
        ]);
console.log(`Final counter value: ${counter}`);
}


startRace();

// In this example, incrementCounter is called twice. Depending on which setTimeout finishes first, the counter might be incremented by 5 then 10, or 10 then 5. While in this specific addition example the final sum will always be 15, if the operation were more complex (e.g., appending to an array where order matters, or performing calculations based on the current value before updating), the outcome could be different.

