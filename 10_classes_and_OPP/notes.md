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
Abstraction:  hide the details eg: fetch
Encapsulation: wrap up the data.
Inheritance: 
Polymorphism: 
