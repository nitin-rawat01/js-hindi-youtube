// Getter and Setter in JavaScript: Part 1
// In JavaScript, getters and setters are special methods used to control access to an object's properties. They allow you to define how a property is read (getter) and how it is written (setter), providing a layer of abstraction and enabling advanced logic or validation.
// Some time we need fine grained control.
// To restrict or customize objects properties.
// for example: to deny access to password property.
// getter and setter: in every class
class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    // applying getter: all the properties becomes methods for getter and setter
    // need to apply both: getter and setter
    // get: to get value outside of a class
    get email() {
        return this._email.toUpperCase();
    }
    get password() {
        // getter always get return
        return `${this._password}hitesh`;
    }
    // set: to set value
    set password(value) {
        // this.password = value.toUpperCase(); this cause error: // Maximum call stack size exceded
        this._password  = value
    }
    set email(value) {
         this._email = value;
         // never return setter
    }
}

const hitesh = new User("h@hitesh.ai", "abc");
console.log(hitesh.email);



// From Comments:
// Here's an important note! The infinite loop issue we encountered isn’t caused by using a setter with a getter. Instead, it's due to naming the getter the same as the variable (password). When we call this.password in the getter, it calls itself repeatedly, creating an infinite loop. To fix this, we can rename the internal variable to something unique, like _password. And just a quick reminder – it’s totally fine to use a getter without a setter; they’re independent!