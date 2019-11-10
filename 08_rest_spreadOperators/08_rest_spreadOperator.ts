/* ES5: displaying variable number of arguments */
// function displayColors(){
//   for(let color in arguments)
//     console.log(color);
// }

// displayColors('red');
// displayColors('red', 'green');
// displayColors('red', 'green', 'blue');

/* ES6: inroduce rest and spread operators(...) */
function displayColors(message: string, ...colors: string[]) {
  // in function declaration, ... is used as rest operator
  console.log(message); // rest operator combines variable no of argument into array
  for (let i = 0; i < colors.length; i++) console.log(colors[i]);
  console.log(colors);
}
let message = "List of colors";
displayColors(message, "red");
displayColors(message, "red", "green");
displayColors(message, "red", "green", "blue");

// lets assume colors are fetch from an API which return a array of colors
let fetchedColors = ["orange", "pink", "indigo"];
//displayColors(message, fetchedColors); // this is not allowed
displayColors(message, ...fetchedColors); // in function call, ... is used as spread operator
// Spread operator deconstruct array into indivisual elements
