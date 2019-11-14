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

// Use chain method on set
let myset3 = new Set().add("hello").add("world");
console.log(myset3);

// Check whether an element exists or not
console.log(myset3.has("hello")); // true

// Delete an element from Set
console.log(myset3.delete("hello")); // return true if deletion is successful
console.log(myset3.size);
