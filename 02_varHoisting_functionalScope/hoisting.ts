function greetPerson(name: string) {
  // Any variable with "var" declaration will be moved at the top of the function.
  // This is called "Hoisting".
  // var is having "functional scope" i.e. you can declare same variable multiple times with var.
  // So the first declaration will be hoisted at the top of the function and other declaration will be ignored.
  if (name === "Jack") {
    var greet = "Hello " + name;
  } else {
    var greet = "Hello there";
  }
  console.log(greet);
}

greetPerson("Jack");
greetPerson("Stanley");
// greetPerson(); // Not allowed in typescript

/* Javascript will re-write the above method in this way */
// function greetPerson(name: string) {
//   var greet;
//   if (name === "Jack") {
//     greet = "Hello " + name;
//   } else {
//     greet = "Hello there";
//   }
//   console.log(greet);
// }

/* You can also declare variable anywhere inside the function */
// function greetPerson(name: string) {
//   if (name === "Jack") {
//     greet = "Hello " + name;
//   } else {
//     greet = "Hello there";
//   }
//   console.log(greet);
//   var greet;
// }
