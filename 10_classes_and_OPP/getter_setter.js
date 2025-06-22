// Getter and Setter in JavaScript
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
    get password() {
        return this.password.toUpperCase();
    }
    // set: to set value
    set password(value) {
        this.password = value.toUpperCase();
        // Maximum call stack size exceded
    }
}

const hitesh = new User("h@hitesh.ai", "123");
console.log(hitesh.password);