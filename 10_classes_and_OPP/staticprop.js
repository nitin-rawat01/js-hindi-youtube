// static properties: static prop
//Static class methods are defined on the class itself. You cannot call a static method on an object, only on an object class.
// static method: example
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
console.log(Teacher.createId())
// console.log(iphone.createId()); // cannot access createId();
// note: static -> no object and class can use or inherit the properties /funcitons.

// In JavaScript, the static keyword is primarily used within classes to define methods or properties that belong to the class itself, rather than to instances of the class.
// They are useful for utility functions that don't depend on the state of a specific instance, or for factory methods that create and return new instances of the class.

// static property: static variables are that belong to the class itself, shared across all the instances of that class.
//They are useful for storing data that is common to all instances, such as configuration values, counters, or caches.
class BankAccount {
    static totalAccounts = 0; // static property

    constructor(accountHolder){
        this.accountHolder = accountHolder;
        BankAccount.totalAccounts++; // Incrementing Static Property
    }
}
const account1 = new BankAccount('Alice');
const account2 = new BankAccount('Bob'); 

console.log(account1);
console.log(account1.totalAccounts); // undefined
console.log(BankAccount);

class CurrentAccount extends BankAccount {
    constructor(accountHolder, accountType){
        super(accountHolder);
        this.accountType = accountType;
     
    }
}
const account3 = new CurrentAccount('Max', 'Current');
console.log(CurrentAccount.totalAccounts);