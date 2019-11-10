"use strict";
/* ES5: displaying variable number of arguments */
// function displayColors(){
//   for(let color in arguments)
//     console.log(color);
// }
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// displayColors('red');
// displayColors('red', 'green');
// displayColors('red', 'green', 'blue');
/* ES6: inroduce rest and spread operators(...) */
function displayColors(message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    // in function declaration, ... is used as rest operator
    console.log(message); // rest operator combines variable no of argument into array
    for (var i_1 = 0; i_1 < colors.length; i_1++)
        console.log(colors[i_1]);
    console.log(colors);
}
var message = "List of colors";
displayColors(message, "red");
displayColors(message, "red", "green");
displayColors(message, "red", "green", "blue");
// lets assume colors are fetch from an API which return a array of colors
var fetchedColors = ["orange", "pink", "indigo"];
//displayColors(message, fetchedColors); // this is not allowed
displayColors.apply(void 0, __spreadArrays([message], fetchedColors)); // in function call, ... is used as spread operator
// Spread operator deconstruct array into indivisual elements
//# sourceMappingURL=08_rest_spreadOperator.js.map