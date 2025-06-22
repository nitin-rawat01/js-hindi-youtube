// defining setter and getter through properties
function User(email, password){
    this._email = email;
    this._password =password;
    
    // setting: setter and getter
    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase();
        },
        set: function (value) {
            this._email = value;
        }
    })
     Object.defineProperty(this, 'password', {
        get: function () {
            return this._password.toUpperCase();
        },
        set: function (value) {
            this._password = value;
        }
    })
}

const chai  = new User("chai@chai.com", "chai");
console.log(chai.email);


