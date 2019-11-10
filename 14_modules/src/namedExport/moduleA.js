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
import { fname as f, lname as l, pno as p, age as a } from "./moduleB.js";
console.log(`${f} ${l}`);
console.log(`I am ${a}, My phone number ${p}`);
