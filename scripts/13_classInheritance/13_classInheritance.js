"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseClass1 = /** @class */ (function () {
    function BaseClass1(name) {
        console.log("Base class constuctor say- Hello " + name);
    }
    return BaseClass1;
}());
var DerivedClass1 = /** @class */ (function (_super) {
    __extends(DerivedClass1, _super);
    function DerivedClass1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DerivedClass1;
}(BaseClass1)); // extends keyword is used for class inheritance
var derivedObj1 = new DerivedClass1("Krish"); // it will call base class constructor automatically
var BaseClass2 = /** @class */ (function () {
    function BaseClass2(name) {
        console.log("Base class constuctor say- Hello " + name);
    }
    BaseClass2.prototype.getID = function () {
        return 10;
    };
    BaseClass2.prototype.showID = function () {
        return 10;
    };
    BaseClass2.prototype.fetchID = function () {
        return 10;
    };
    return BaseClass2;
}());
var DerivedClass2 = /** @class */ (function (_super) {
    __extends(DerivedClass2, _super);
    function DerivedClass2(name) {
        var _this = _super.call(this, name) || this;
        console.log("Derived class constuctor say- Hi " + name);
        return _this;
    }
    DerivedClass2.prototype.showID = function () {
        return 50;
    };
    DerivedClass2.prototype.fetchID = function () {
        return _super.prototype.fetchID.call(this);
    };
    return DerivedClass2;
}(BaseClass2));
var derivedObj2 = new DerivedClass2("Tanmoy");
console.log(derivedObj2.getID()); // It will call the base class method
console.log(derivedObj2.showID()); // It will call the derived class method
console.log(derivedObj2.fetchID()); // It will call the derived class method which in turn call the base class method
//# sourceMappingURL=13_classInheritance.js.map