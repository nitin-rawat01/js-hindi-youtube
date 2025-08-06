const input = document.querySelector("input")
const defaultText = document.getElementById("default")
const debounceText = document.getElementById("debounce")
const throttleText = document.getElementById("throttle")

const updateDebounceText = debounce((text) => {
    debounceText.textContent = text
})

const updateThrottleText = throttle((text) => {
    throttleText.textContent = text;
})

input.addEventListener("input", (e) => {
    defaultText.textContent = e.target.value;
    updateDebounceText(e.target.value);
    updateThrottleText(e.target.value);
})

function debounce(cb, delay = 1000) {
    let timerId;
    return (...args) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            cb(...args)
        }, delay)
    }
}

function throttle(cb, delay = 1000) {
    let shouldWait = false;
    // waitingArgs are the arguments we call when we are actually waiting
    let waitingArgs;

    const timeeoutFunction = () => {
            // if do not have any waiting arguments
            if(waitingArgs == null){
            shouldWait = false;
            } // we have any waiting arguments i want to call our function after that second with those waiting argumetns
            else{
                cb(...waitingArgs);
                waitingArgs = null; // not saving that information any more
                // then i want to restart our timer because we already called it..we need to restart our 1 second timer.
                // start your wait over gain for next one: if we don't do this shouldWait will be true always and cb(...args) will never get call.
                setTimeout(timeeoutFunction, delay);
            }
        }

    return((...args) => {
        if(shouldWait) {
            waitingArgs = args;
    // so what are we doing here is every time we are in the waiting stage we saving whatever the last call
// to the function was we are saving those arguments so we can call the function later with those arguments.
            return;
        }
        cb(...args);
        shouldWait = true;
        // changing setTimeout because what if we have waiting arguments we need to take care of.
        setTimeout(timeeoutFunction, delay)
    })
}


// Explanation: what's going on here is we're saving the last call that we made after we made a call. so we call throttle it ran just fine..when we call it once nothing changes it works just like a normal call if we call it second time during this waiting period  it saves that call and it says hey i am gonna execute this soon as dealy is over so that way you don't send more than one call per second in our case. 

