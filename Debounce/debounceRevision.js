// factory function: return the debounce version
function debounce(fn, delay) {
    let timerId;

    return function(...args){
        clearTimeout(timerId); // first Cancel the last call
        // start the new timer: timer kaise chalu krte hai..setTimeout krke
        timerId = setTimeout(() => {
            // setTimeout ke andr hum user ke function ko call krdenge
            // with all the arguments
            fn(...args);
        }, delay);
    }
}

// syntax: functio debounce(fn, delay); fn -> kis ko debounce krna hai, delay -> kitne second ke baad api call hona chaiye
const search = (query) => {
    console.log('Searching for ', query);
}

// search('Ha');
// search('Har');
// search('Hard');
// search('Hard J');
// search('Hard JS');
// we are api calling for each letter: not optimize version
// we need debounce version of search.


const searchWithDebounce = debounce(search, 1000); // 1000 milliseconds -> 1 sec.
// means agr user ki typing me 1 sec ka delay aata hai to hi hum api call karenge.
// debounce function : parameters -> search function, delay
// debounnce function: return -> aesa version return kr rha hai mere function ka jisme debouncning enable hai.




searchWithDebounce('Ha');
searchWithDebounce('Har'); //  note: hr agla letter pichle wala ho clear krta hai
searchWithDebounce('Hard');
searchWithDebounce('Hard J');
searchWithDebounce('Hard JS Interview Question');