/* ES5: displaying variable number of arguments */
// function displayColors(){
//   for(let color in arguments)
//     console.log(color);
// }

// displayColors('red');
// displayColors('red', 'green');
// displayColors('red', 'green', 'blue');

/* ES6: inroduce rest operator(...) */
function displayColors(message: string, ...colors: string[]) {
  console.log(message);
  for (let color in colors) console.log(color);
  console.log(colors);
}
let message = "List of colors";
displayColors(message, "red");
displayColors(message, "red", "green");
displayColors(message, "red", "green", "blue");
