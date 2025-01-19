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

