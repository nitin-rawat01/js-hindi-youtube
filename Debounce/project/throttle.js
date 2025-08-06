let input = document.getElementById("user-input");
let card = document.getElementById("user-card");
let url = 'https://randomuser.me/api/';

// throttle
function throttle(callback, delay){
    let lastCall = 0;
    // let 
    return () => {
        const now = Date.now()
        if(now - lastCall <  delay) {
            return;
        }
        lastCall = now;
        return callback();
        
 }}

function displayData(response){
    let result = response.results[0];
    let username = `${result.name.first}  ${result.name.last}` ;
    card.style.removeProperty('display')
    card.style.display = 'block'
    card.innerHTML = `
        <div>${username}</div>
    `
}
function callingAPI() {
     let data  = fetch(url)
    .then(response => {
       return response.json();
    })
    .then(response => {
       displayData(response);
       
    })
    .catch(error => console.log(error));
}
let  callingThrottleAPI = throttle(callingAPI, 1000);

input.addEventListener("input", () => {
    callingThrottleAPI();
})