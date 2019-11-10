"use strict";
/* Destructuring Array */
// let employee = ["Jack", "stanley", "male"];
// let [fname, lname, gender] = employee;
// console.log(fname);
// console.log(lname);
// console.log(gender);
/* extra variables will be assigned to undefined */
// let employee = ["Jack", "stanley"];
// let [fname, lname, gender] = employee;
// console.log(fname);
// console.log(lname);
// console.log(gender);  // undefined
/* placeholder for unwanted values */
// let employee = ["Jack", "stanley", "male"];
// let [, , gender] = employee;
// console.log(gender);
/* rest operator */
// let employee = ["Jack", "stanley", "male"];
// let [fname, ...elements] = employee;
// console.log(fname);
// console.log(elements);
/* Assigning default value */
// let employee = ["Jack", "stanley"];
// let [fname, lname, gender = "male"] = employee;
// console.log(fname);
// console.log(lname);
// console.log(gender);
// let employee = ["Jack", "stanley", "female"];
// let [fname, lname, gender = "male"] = employee;
// console.log(fname);
// console.log(lname);
// console.log(gender);
/* Destructuring Object */
// let employee = {
//   fname: "Jack",
//   lname: "stanley",
//   gender: "male"
// };
// // object property name and variable inside {} need to be same
// let { fname, lname, gender } = employee;
// console.log(fname);
// console.log(lname);
// console.log(gender);
var employee = {
    fname: "Jack",
    lname: "stanley",
    gender: "male"
};
// incase object property name is very lengthy, you can use aliase
var f = employee.fname, l = employee.lname, g = employee.gender;
console.log(f);
console.log(l);
console.log(g);
//# sourceMappingURL=10_destructuring.js.map