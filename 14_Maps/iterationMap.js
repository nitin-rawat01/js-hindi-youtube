// Iteration over Map
// Maps are easy to iterate over using for...of loop.
// 1. Create a new Map
const userSettings = new Map();

// 2. Set values
userSettings.set('theme', 'dark');
userSettings.set('notifications', true);
userSettings.set(101, 'user ID'); // Key can be a number!

for (const entry of userSettings.entries()){
    // map.entries() -> return array -> [key, value]
    // console.log(`${entry[0]}: ${entry[1]}`);
}

// use array destructuring for cleaner key/value access:
for(const [key, value] of userSettings){
    // console.log(`Key: ${key}, Value: ${value}`);
}

// using forEach
userSettings.forEach((value, key, map) => {
    console.log(`Key: ${key}, Value: ${value}`)
})
