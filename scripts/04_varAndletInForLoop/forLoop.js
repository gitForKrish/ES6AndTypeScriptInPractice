"use strict";
/* Print 1 to 5 in console */
// for (var i = 1; i <= 5; i++) {
//   console.log(i);
// }
for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log(i); // output is 6 repeated by 5 times - with var, we are sending i as a reference type not with value type
        // the 5 anonymous functions hold the reference of i thus printing 6 which is the exit criteria for the loop.
    }, 2000);
}
var _loop_1 = function (i_1) {
    setTimeout(function () {
        console.log(i_1); // it will print 1 to 5
    }, 2000);
};
/* Use let to fix the above issue */
for (var i_1 = 1; i_1 <= 5; i_1++) {
    _loop_1(i_1);
}
// To deal with CLOSURE and LOOPs, use let instead of var
//# sourceMappingURL=forLoop.js.map