let input = document.getElementById("user-input");
let card = document.getElementById("user-card");
let url = 'https://randomuser.me/api/';

// debounce is a factory function: which means it returns object
let debounce = function (callback, delay) {
    let timerId;
    return (...args) => {
    clearTimeout(timerId);
      timerId =   setTimeout(() => {
            callback(...args)
        }, delay)
    }
}
function displayData(response){
    let result = response.results[0];
    let username = `${result.name.first}  ${result.name.last}` ;
    card.style.removeProperty('display')
    card.style.display = 'block'
    card.innerHTML = `
        <div>${username}</div>
    `
}
let callingAPI = function (e) {
    let data  = fetch(url)
    .then(response => {
       return response.json();
    })
    .then(response => {
       displayData(response);
       
    })
    .catch(error => console.log(error));

}


let debounceCallingAPI = debounce(callingAPI, 1000);
input.addEventListener("input", (e) => {
    debounceCallingAPI(e);
})
// input.addEventListener("input", debounceCallingAPI)