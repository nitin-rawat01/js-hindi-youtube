// Prototype in Javascript: second video part two
// goal: 
let myName = "hitesh     ";
let myChannel = "chai"

console.log(myName.length); // 11
console.log(myName.trim().length); // 5
// creating method default for any string , trueLength: return true length of strign without space
let myHeros = ["thor", "spiderman"];

// ------------------------------------------------------
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function (){
        console.log(`Spidy Power is ${this.spiderman}`)
    }
}
// setting hitesh() inside of the Object: hitesh() can be acess from any array, function, string aur object
// accessing object data type
// Object.create; factory function 
Object.prototype.hitesh = function (){
    console.log('Hitesh is present in all object');
}
heroPower.hitesh(); // object
myHeros.hitesh(); // array


// defining inside array only
Array.prototype.heyHitesh = function (){
    console.log(`Hitesh says hello`);
}

myHeros.heyHitesh();
// heroPower.heyHitesh(); does not have access


// inheritance
const User = {
    name: "chai",
    email: "chai@google.com"
}
const Teacher = {
    name: "chai aur code",
    makeVideo: true,

}
const TeachingSupport = {
    isAvailable: false
}
// information sharing between two objects: linking two objects
const TAsupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    // taking reference from TeachingSupport.
    // __proto__: this is a property inside of the prototype
    __proto__: TeachingSupport 
}
// information exchange: linking objects
// directly access this property: __proto__
// Teacher can access all the properties of the User.
Teacher__proto__ = User;
// This proto typial inheritance : this how you can access others properties
// Modern syntax
// Object.setPrototypeOf(obj, prototype)
Object.setPrototypeOf(TeachingSupport, Teacher);
console.log(TeachingSupport.name);

let anotherUsername = "chai aur code      ";
String.prototype.trueLength = function (){
    console.log(`${this}`);
    // this -> referece hai current context ka..jo bula rha hai.
    console.log(`True length is ${this.trim().length}`);
}
anotherUsername.trueLength();
"hitesh".trueLength();
"iceTea".trueLength();