/* Version 1 */
// import { fname } from "./moduleB.js";
// console.log(fname);

/* Version 2 */
// import { fname, lname } from "./moduleB.js";
// console.log(`${fname} ${lname}`);

/* Version 3 */
// import { fname, lname, pno, age } from "./moduleB.js";
// console.log(`${fname} ${lname}`);
// console.log(`I am ${age}, My phone number ${pno}`);

// we can also use aliase for variable
// import { fname as f, lname as l, pno as p, age as a } from "./moduleB.js";
// console.log(`${f} ${l}`);
// console.log(`I am ${a}, My phone number ${p}`);

/* Version 4 */
// // Modules are hoisted - import statement will be rearranged to top
// console.log("Module A log 1");
// import { fname, lname } from "./moduleB.js";
// console.log("Module A log 2");
// console.log(fname + " " + lname);

/* Version 5  -  import are readonly */
// import { fname, lname } from "./moduleB.js";
// fname = "imported name is readonly, can not be changed";  // Uncaught TypeError: Assignment to constant variable.
// console.log(fname + " " + lname);

/* Version 6 - import are readonly but you can change the object property */
import { obj } from "./moduleB.js";
console.log(obj.name);
obj.name = "Changed";
console.log(obj.name);
