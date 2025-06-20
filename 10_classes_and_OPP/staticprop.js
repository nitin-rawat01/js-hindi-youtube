// static properties: static prop
//Static class methods are defined on the class itself. You cannot call a static method on an object, only on an object class.
class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    // static: stop the access
    static createId(){
        return `123`
    }
}

const hitesh = new User('hitesh');  
// console.log(hitesh.createId()); //hitesh.createId is not a function
// situation: where we do not want to give the access to every object instances from this class
// also work in case extens
class Teacher extends User {
    constructor(email, username){
        super(username);
        this.email = email;
    }


}

const iphone = new Teacher('iphone', 'i@phone.com');
console.log(iphone);
iphone.logMe();
console.log(iphone.createId()); // cannot access createId();
// note: static -> no object and class can use or inherit the properties /funcitons.