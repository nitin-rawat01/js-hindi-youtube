// Javascript: symbol
//only two primitive data types can serve as a key/ property name of an objec: strind and symbol, anyother primitive data type autoconverted to string. 
let person = {
    1: 'one',
    true: "true",
    "name": 'manoj',
}
//1 and true and name: string
// Symbol: it's a primitive data type and it represent unique identifier.
//A value of this type can be created using Symbol();
// inside paranthesis we gave symbole description (also called symbol name), mostly useful for debugging purposes:
let id  =   Symbol("id");
console.log(id); //description is not the value of the symbol
// Symbols are guaranteed to be unique. Even if we create many symbols with exactly the same description, they are different values. The description is just a label that doesn’t affect anything. for example
let id1 = Symbol("id");
let id2= Symbol("id");
console.log(id1 === id2); //false

// Summary: symbol is a primitve unique value with an optional description. 

// Javascript: Symbol
// Symbols don't auto- convert to a string
// Most values in javascript support implicit (total/complete) conversion to string. Symbols are special. They don’t auto-convert.
alert(id); // TypeError: Cannot convert a Symbol value to a string this will work in browser
// That’s a “language guard” against messing up, because strings and symbols are fundamentally different and should not accidentally convert one into another.
// If we really want to show a symbol, we need to explicitly call .toString() on it, like here:
alert(id.toString());  // Symbol(id), now it works
// get symbol.description property to show the description only:
alert(id.description); //id


// "Hidden Properties": symbols allows us to create "hidden" properties that no other part of the code accidentally access or overwrite.
let user = { //user belongs to another code(third party)
    name: 'john',
}
let userId = Symbol('user-id');
user[userId] = 1; //Adding our own identifiers to the object user.
console.log(user);
console.log(user[userId]); //we access the data using the symbol as a key.
// Using Symbols as an property in object literal
// If we want to use a symbol in an object literal {...}, we need square brackets around it.
let accountId = Symbol('id');
let mainUser = {
    name: 'Johhny',
    fullName: 'Johny Blaze',
    age: 34,
    [accountId]: 123, // not "id": 123
    isLoggedIn: true,
}
// That’s because we need the value from the variable id as the key, not the string “id”.
console.log(mainUser);

// Symbols are skipped by for…in
//Symbolic properties do not participate in for..in loop.
for(key in mainUser){
    console.log(key)// name, fullName, age, isLoggedIn, no symbol
}
// Object.keys(mainUser) also ignores them. That’s a part of the general “hiding symbolic properties” principle. If another script or a library loops over our object, it won’t unexpectedly access a symbolic property.

console.log(Object.keys(mainUser)); //[ 'name', 'fullName', 'age', 'isLoggedIn' ]

// In contrast, Object.assign copies both string and symbol properties:
let admin = Object.assign({}, mainUser);
console.log('Admin: ', admin);
// There’s no paradox here. That’s by design. The idea is that when we clone an object or merge objects, we usually want all properties to be copied (including symbols like id).





