# JavaScript and Classes.
    Q.does javascript has classes?
    Ans. "Hoti nhi thi aur technically dekha jaye to abhi bhi hoti nhi hai."
    programming paradigm: style of programming, opp is a programming paradigm.

# Do JavaScript really have classes?
- Yes, JavaScript does have classes. This feature was introduced with the ECMAScript 2015 specification (often referred to as ES6). However, it's important to note that javascript is primarily a prototype-based language, and its classes are primarily syntactic sugar over the existing prototype based inheritance mechanismsm. In other words, it provides a more familiar syntax for developers coming from coming from class-based languages such as java or c++, but under the hood, it work somewhat differently.
 example:
 class Person {
  constructor(name) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
  }
}

const p = new Person("Alice, 30);
p.greet(); // Hello, my name is Alice and I'm 30 years old
In this example, `Person` is a class that has a constructor and a method named greet();
The constructor method is a special method for creating and initializing an object created with a classs. It will run when we instantiate new objects using the `new` keyword.

## OPP: Programing Paradigm (style/structer of programming)

## Object
- collection of properties(variables/ constant) and method (function)
- toLowerCase, Promise -> object

## Why use OPP: Avoid spaghetti code (no reusable component).


## parts of OPP
- Object literal (literally): i literally mean to 
   " ek object bol rha hun ..to ek object hi le rha hun"


-Constructor function 
- Prototypes/ Proto
-Classes
-Instances (new, this)


## 4 pillars of OPP
# Encapsulation- Hiding the Data
  Definition: Wrapping data (variables) and methods (functions) together into a single unit (class), and hiding internal details from the outside world.
Purpose: To protect the object’s internal state and only expose what’s necessary.

Example
  class Person {
    #age; // private field
    constructor(name, age){
        this.name = name;
        this.#age = age; // age will not show
    }
    greet(){
         console.log(`Hello My Name is manoj ${this.name} your age is ${this.#age}`)
    }
}

const student = new Person('Manoj', 34);
console.log(student);
student.greet();

# Inheritance: Reusing Code
  Definition:  One class (child) can inherit properties and methods from another class (parent).
  Purpose: To promote code reuse and establish a natural hierarchy.
  examples:
  class Animal {
    speak(){
        console.log("Animals speaks");
    }
}

// Inheritance
    class Dog extends Animal {
        bark(){
            console.log("Dogs barks");
        }
    }

const d = new Dog();

console.log(d);
germanSheperd.bark();
germanSheperd.speak();


# Polymorphism: Many Forms
  Defination: The same method name beahves differently based on the object calling it.
  Purpose: To allow different classes have to define their own version of a method.
  Example:
  class Animal {
    makeSound(){
        console.log("Some Sound");
    }
}

// Inheritance
    class Dog extends Animal {
        makeSound(){
            console.log("Woof");
        }
    }
    class Cat extends Animal {
        makeSound(){
            console.log("Meow");
        }
    }


const animals = [new Cat(), new Dog()];

animals.forEach(a => a.makeSound());

# Abstraction: Hiding Complexity
  Definition: Showing only Essential features and hiding complex implementation details.
  Purpose: To reduce complexity and focus on what an object does instead of how it does it.
  Example:
  class Car {
  startEngine() {
    // Complex logic hidden from the user
    console.log("Engine started");
  }
}

const myCar = new Car();
myCar.startEngine(); // User doesn't need to know the internal process
