// factory function: kisi bhi cheeze ka debounce version return kr deta hai.
function debounce(fn, delay){
    let timerId;
    return function(...agr){
        clearInterval(timerId); // cancel the last request
        timerId = setTimeout(() => {
            fn(...agr);
        }, 1000)
    }
}
// simple function 
const search = (query) =>{ // user search krne ke liye ek query dega
    console.log('searching for', query);
}

// search('H');
// search('Ha');
// search('Har');
// search('Hard');
// search('Hard J');
// search('Hard JS');
// search('Hard JS');
// we are api calling for each letter: not optimize version
// need debounce verison of debounce

// debounce here is making search into a debounce verison.
// returning search function with debouncing enabled
const searchWithDebounce = debounce(search, 300);

searchWithDebounce('H');
searchWithDebounce('Ha');
searchWithDebounce('Har');
searchWithDebounce('Hard');
searchWithDebounce('Hard J');
searchWithDebounce('Hard JS');
searchWithDebounce('Hard JS Interview Questions');

