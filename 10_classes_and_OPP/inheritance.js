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


