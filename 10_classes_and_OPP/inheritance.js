// prototype inheritance and prototypial behaviour
// Inheritance in JS

class User {
    constructor(username ){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
        // class ke pass "current context" hai hi ..this hr jagha available hai
    }
}
//phle prototye use krte the
class Teacher extends User{
    // overwriting User constructor
    constructor(username, email, password){
        // super call is must.
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher('chai',"chai@gmail.com.com", '1232');
chai.addCourse();
chai.logMe();
const masalaChai  = new User("masalChai");
// masalaChai.addCourse(); do not have access
masalaChai.logMe();

//note
console.log(chai === masalaChai); // false
console.log(chai === Teacher); // false(chai is instanceof of Teacher not exact copy);

// to check if chai is instance of Teacher
console.log(chai instanceof Teacher);
console.log(chai instanceof User);


// About super keyword
// super keyword serves two primary purpose within the context of the class inheritance:

// Calling the Parent Class's Constructor: When a derived class extends a base class, its constructor must call the parent class's constructor using super(). This ensures that the parent class's initialization logic is executed, and its properties are correctly set up before the derived class adds its own specific properties.
class Person {
     constructor(name, age) {
        this.name = name;
        this.age = age;
      }
}

class Student extends Person {
    constructor(name, age, studentId){
        super(name, age); //// Calls the constructor of the Person class
        this.studentId = studentId;
    }

}
const newStudent = new Student('hitesh', 16, 12342);


// Accessing the Parents Class Methods and Properties: The super keyword can also be used to access the methods and properties define in the parent class from within the derived class.This is particularly useful when a derived class wants to extend or modify the behavior of a parent method while still leveraging the original implementation.

class Animals {
    speak(){
        return 'makes a sound';
    }
}

class Dog extends Animals {
    speak(){
        return super.speak() + ' and barks'; // Calls the speak method of the Animal class
    }
}
const myDog = new Dog();
console.log(myDog.speak());