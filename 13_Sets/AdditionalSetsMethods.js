// Additional Set Methods
// The entries() method returns an Iterator with [value,value] pairs from a Set.
// Note
// The entries() method is supposed to return a [key,value] pair from an object.
// A Set has no keys, so the entries() method returns [value,value].
// This makes Sets compatible with Maps.
// example 
const letters = new Set(["a","b","c"]);

console.log(letters.entries()); // [Set Entries]{[value, value]}

for(let entry of letters.entries()){
    console.log(entry) ; // returns -> [value, value]
}

// The keys Method: The keys() methods return an iterator object with the values in a Set:
console.log(letters.keys()); // [Set Iterator] { 'a', 'b', 'c' }
for(let key of letters.keys()){
    console.log(key); // a b c
}
// note: Set has no key, so keys() returns the same as values()
// This makes Sets compatible with Maps.

// The Values() method: The values() methods returns an Iterator object with the values in Set:
console.log(letters.values()); // [Set Iterator] { 'a', 'b', 'c' }
for(let values of letters.values()){
    console.log(values); // a b c
}

