// Getter and Setter in JavaScript: Part 3
const User = {
    _email: 'h@hc.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email = value;
    }

}


// Object.create -> factory function 
const tea = Object.create(User);
console.log(tea.email);
tea.email = "hitesh@gmail.com"
console.log(tea.email);

// _ -> define private property
// get and set use  krne ke baad _ ka meaning nhi rheta ..ab wo dekha ki apke pas email property 
// getter and setter special method jo property ke upr rhkh rha hun..
// memory se value lekar arhe ho ya dekar arhe ho is process ko overwrite krne ke liye getter or setter hai.
// get email: get ek special keyword hai jo is property(email) per work kr rha hai
// example: length property of array
