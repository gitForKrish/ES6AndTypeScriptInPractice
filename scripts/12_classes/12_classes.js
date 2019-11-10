"use strict";
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function () { };
    return Person;
}());
var p = new Person();
console.log(typeof Person); // function - Classes are special function but classes are not hoisted like function
console.log(typeof p); // object
console.log(p.greet === Person.prototype.greet); // Adding a method to the class is same as adding a method to the prototype of the class
/* classes are not hoisted like function */
// sayHello();
// function sayHello() {
//   console.log("Hello");
// }
// let obj = new MyClass();  // Class 'MyClass' used before its declaration
// class MyClass {}
/* Class Methods - 3 types of method */
var MyClass = /** @class */ (function () {
    function MyClass(name) {
        this.name = name;
        console.log("Constructor method");
    }
    MyClass.staticMethod = function () {
        console.log("Static method");
    };
    MyClass.prototype.prototypeMethod = function () {
        console.log("Prototype method");
    };
    return MyClass;
}());
var myObj = new MyClass("Krish"); // Constructor method will be called
MyClass.staticMethod(); // Static method will be called
myObj.prototypeMethod(); // Prototype method will be called
//# sourceMappingURL=12_classes.js.map