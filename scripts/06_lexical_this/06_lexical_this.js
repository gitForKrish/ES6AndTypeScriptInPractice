"use strict";
var employee1 = {
    id: 1,
    showId: function () {
        console.log(this.id);
    }
};
employee1.showId();
// let employee2 = {
//   id: 1,
//   showId: function() {
//     setTimeout(function() { // this is having a context of inner function not the outer one
//       console.log(this.id); // undefined - 'this' implicitly has type 'any'
//     }, 1000);
//   }
// };
// employee2.showId();
var employee3 = {
    id: 1,
    showId: function () {
        var self = this; // by creating self variable, we are saving the context from current function
        setTimeout(function () {
            console.log(self.id); // here this is having a different context,thus using self
        }, 1000);
    }
};
employee3.showId();
var employee4 = {
    id: 1,
    showId: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.id); // Arrow function doesn't create any context for this. It takes the outer context.
        }, 1000);
    }
};
employee4.showId();
//# sourceMappingURL=06_lexical_this.js.map