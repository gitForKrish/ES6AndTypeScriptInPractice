// Create new set
let myset1 = new Set();
console.log(typeof myset1); // object

// Adding element
myset1.add("Hello");
myset1.add(1);
myset1.add(1); // Set contain unique elements thus this element will not be added

console.log(myset1.size); // return Set size
console.log(myset1);

// Set initializer
let myset2 = new Set([1, 2, 3, 4, 4, 4]); // duplicate elements will be ignored
console.log(myset2.size);
let obj1 = {};
let obj2 = {};
myset2.add(obj1);
myset2.add(obj2);
console.log(myset2.size); // 6 - objects are unique entry
let str1 = 'same string';
let str2 = 'same string';
myset2.add(str1);
myset2.add(str2);
console.log(myset2.size); // 7 - same strings are not unique

// Use chain method on set
let myset3 = new Set().add("hello").add("world");
console.log(myset3);

// Check whether an element exists or not
console.log(myset3.has("hello")); // true

// Delete an element from Set
console.log(myset3.delete("hello")); // return true if deletion is successful
console.log(myset3.size);

// By default sets are strong in nature
let myset4 = new Set();
let key = {name:'Krish'};
myset4.add(key);
console.log(myset4.size);
key = null; // making the object as null
console.log(myset4.size);
// though object reference is set to null, the actual actual object still persist in the Set
console.log([...myset4][0]);
// object still persist in Set...
