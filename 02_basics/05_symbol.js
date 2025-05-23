// Javascript: symbol
//only two primitive data types can serve as a key/ property name of an objec: strind and symbol, anyother primitive data type autoconverted to string. 
// symbols are also immutable
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

// Global Symbol Registry
// Symbol() function will create a Symbol whose value remains unique throughout the lifetime of the program. 
// To create Symbols available across files and even across realms (each of which has its own global scope), use the methods Symbol.for() and Symbol.keyFor() to set and retrieve Symbols from the global Symbol registry.
// Note: global symbol registry is only a ficticious concept and may not correspond to any internal data structure in the javascript engine. — and even if such a registry exists, its content is not available to the JavaScript code, except through the for() and keyFor() methods.
// Symbol.for(): is a static method(inbuilt) searches for existing symbols in a runtime-wide symbol registry with the given key and return if found. Otherwise a new symbol gets created in the global symbol registry with this key.
// syntax: Symbol.for(key);
// Here “Symbol” is the symbol that is to be searched into the runtime-wide symbol registry.
// key: String, required. The key for the symbol (and also used for the description of the symbol).
// Return: An existing symbol with the given key if found; otherwise, a new symbol is created and returned.

// In contrast to Symbol(), the Symbol.for() function creates a symbol available in a global symbol registry list. 
// The method Symbol.for(tokenString) takes a string key and returns a symbol value from the registry, while Symbol.keyFor(symbolValue) takes a symbol value and returns the string key corresponding to it. Each is the other's inverse, so the following is true:

console.log(Symbol.keyFor(Symbol.for("id")) === "id");//true
 // But sometimes we want same-named symbols to be same entities.
// For instance, different parts of our application want to access symbol "id" meaning exactly the same property.
// To achieve that, there exists a global symbol registry. We can create symbols in it and access them later, and it guarantees that repeated accesses by the same name return exactly the same symbol.
// read from the global registry
let ID = Symbol.for('id') // // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain =  Symbol.for('id');

// the same symbol
console.log(ID === idAgain); //true
// Symbols inside the registry are called global symbols. If we want an application-wide symbol, accessible everywhere in the code – that’s what they are for.

// Symbol.keyFor(): return the name of the symbol by symbol
// We have seen that for global symbols, Symbol.for(key) returns a symbol by name. To do the opposite – return a name by global symbol – we can use: Symbol.keyFor(sym):
let sym = Symbol.for("name");
let sym2 = Symbol.for('id-1');
console.log(Symbol.keyFor(sym)); //name
console.log(Symbol.keyFor(sym2)) //id-1
// The Symbol.keyFor internally uses the global symbol registry to look up the key for the symbol. So it doesn’t work for non-global symbols. If the symbol is not global, it won’t be able to find it and returns undefined
// That said, all symbols have the description property.
// We can say that we have two types of symbol: global symbols(for and keyFor) and non-global symbols(Symbol).




// Technically, symbols are not 100% hidden. There is a built-in method Object.getOwnPropertySymbols(obj) that allows us to get all symbols. Also there is a method named Reflect.ownKeys(obj) that returns all keys of an object including symbolic ones. But most libraries, built-in functions and syntax constructs don’t use these methods.
// topic left: system symbol


