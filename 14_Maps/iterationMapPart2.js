

let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);
// iterating over map
for(let vegitables of recipeMap){
    //console.log(vegitables); // returns [key, value]
}
// note: use array destructring [key, value] in place of vegitables to hold key and value separately

// Iteration over map using 3 methods
// keys, values, entries

// map.keys(): method returns an iterator object with keys in a map.
// returns a iterable for keys
console.log(recipeMap.keys()); // returns [Map Iterator]

for(let vegitables of recipeMap.keys()){
   // console.log(vegitables); // cucumber, tomatoes, onion
}

// map.values(): method returns an iterator object with the values in map
// returns a iteravel for values.
console.log(recipeMap.values());// [Map Iterator] {500, 350, 50}

for(let vegitables of recipeMap.values()){
    // console.log(vegitables); // 500, 350, 50
}

// map.entries(): returns an iterable for entries [key, value], it's used by default in for..of. 
//  The entries() method returns an iterator object with the [key,values] in a map:
console.log(recipeMap.entries()); 
//[Map Entries] {
//   [ 'cucumber', 500 ],
//   [ 'tomatoes', 350 ],
//   [ 'onion', 50 ]
// }

for(let entry of recipeMap){ // same aas recipeMap.entries
    console.log(entry);
}
for(let entry of recipeMap.entries()){ // same aas recipeMap.entries
    console.log(entry); // same result as above.
}

