"use strict";
/* ES5: displaying variable number of arguments */
// function displayColors(){
//   for(let color in arguments)
//     console.log(color);
// }
// displayColors('red');
// displayColors('red', 'green');
// displayColors('red', 'green', 'blue');
/* ES6: inroduce rest operator(...) */
function displayColors(message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    for (var color in colors)
        console.log(color);
    console.log(colors);
}
var message = "List of colors";
displayColors(message, "red");
displayColors(message, "red", "green");
displayColors(message, "red", "green", "blue");
//# sourceMappingURL=08_restOperator.js.map