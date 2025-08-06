// with each character typed in search box, make an API call to randomuserme api and display a card below it. Use debounce concept to reduce api calls.

// You will automatically learn about this and apply in this. ☕️
let api = 'https://randomuser.me/api/';
let input = document.getElementById('user-input');
let userCard = document.getElementById('user-card');
let debounce = function (fn, delay) {
  let timerId;

  return () => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn();
    }, delay);
  };
};

let normalFunction = function (e) {
    
  let data = fetch(api)
    .then((response) => {
      if (!response.ok) {
        console.log(`HTTP error! status: ${response.status}`);
      }
    //   console.log(response);
      return response.json();
    })
    .then((response) => {
        // console.log(response);
      let data = response.results;
    //   console.log(data[0].name.last);
      userCard.style.display = 'block';
      userCard.innerHTML = `
      <div>Username: ${data[0].name.first} ${data[0].name.last} </div>
      `;
    })
    .catch((error) =>console.log(error));

};
let displayDebounceUser = debounce(normalFunction, 1000);
input.addEventListener('input', displayDebounceUser);

/*
[{…}]
0: Object
cell: "(632) 625 3911"
dob: Object
email: "ruby.samaniego@example.com"
gender: "female"
id: Object
location: Object
login: Object
name: Object
nat: "MX"
phone: "(698) 303 0049"
picture: Object
registered: Object
<prototype>: Object

*/
