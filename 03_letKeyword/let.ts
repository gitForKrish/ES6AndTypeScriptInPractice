/* let is block level scope i.e. any code block under { } */
function greeting(name: string) {
  let greet;
  if (name === "Jack") {
    greet = "Hello " + name;
  } else {
    greet = "Hello there";
  }
  console.log(greet);
}

greeting("Jack");
greeting("Stanley");

/* let declaration is not hoisted */
// function greeting(name: string) {
//   if (name === "Jack") {
//     greet = "Hello " + name;
//   } else {
//     greet = "Hello there";
//   }
//   console.log(greet);
//   let greet;  // Block-scoped variable 'greet' used before its declaration.
// }

/* variable with let is not available out side of the scope */
// function greeting(name: string) {
//   if (name === "Jack") {
//     let greet = "Hello " + name;
//   } else {
//     let greet = "Hello there";
//   }
//   console.log(greet); // due to block level scope greet is not available here
// }

/* Due to blcok level scope - inner block will redefine the variable and destory once the block get over */
// function greeting(name: string) {
//   let greet;
//   if (name === "Jack") {
//     let greet = "Hello " + name; // greet will be redefined and destroyed after this block
//   } else {
//     let greet = "Hello there"; // greet will be redefined and destroyed after this block
//   }
//   console.log(greet);  // undefined as initial greet is undefined
// }

var a = 1;
var b = 2;
if (a === 1) {
  var a = 10; // this declaration of a will be ignored but value of a will be overridden
  let b = 20; // b will be redeclared and destroyed after the block
  console.log(a); // 10
  console.log(b); // 20
}
console.log(a); // 10
console.log(b); // 2

/* Blocked scoped variable can't be redeclared */
// var c=10;
// var c=20; // this is OK

// let d=10;
// let d=20; // this is not allowed
