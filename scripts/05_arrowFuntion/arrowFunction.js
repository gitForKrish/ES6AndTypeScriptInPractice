"use strict";
var getRegValue = function () {
    return 10;
};
console.log(getRegValue());
var getArrowvalue1 = function () {
    return 10;
};
console.log(getArrowvalue1());
var getArrowvalue2 = function () { return 10; };
console.log(getArrowvalue2());
var getArrowvalue3 = function (m) { return 10 * m; };
console.log(getArrowvalue3(5));
var getArrowvalue4 = function (m, bonus) {
    return 10 * m + bonus;
};
console.log(getArrowvalue4(5, 50));
console.log(typeof getArrowvalue1);
//# sourceMappingURL=arrowFunction.js.map