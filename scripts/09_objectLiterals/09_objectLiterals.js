"use strict";
var firstName = "Morgan";
var lastName = "Stanley";
/* ES5: create object with existing variables */
var person1 = {
    firstName: firstName,
    lastName: lastName
};
console.log(person1.firstName);
console.log(person1.lastName);
/* ES6: the above process has been shorten */
var person2 = {
    firstName: firstName,
    lastName: lastName
};
console.log(person2.firstName);
console.log(person2.lastName);
/* Even creation of object literals inside function can be shortened */
function createPerson1(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    return { firstName: firstName, lastName: lastName, fullName: fullName };
}
var person3 = createPerson1("Jack", "Stone");
console.log(person3.firstName);
console.log(person3.lastName);
console.log(person3.fullName);
function createPerson2(firstName, lastName, age) {
    var fullName = firstName + " " + lastName;
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: fullName,
        isSenior: function () {
            return age > 60;
        }
    };
}
var person4 = createPerson2("Martin", "Cober", 32);
console.log(person4.firstName);
console.log(person4.lastName);
console.log(person4.fullName);
console.log(person4.isSenior());
function createPerson3(firstName, lastName, age) {
    var fullName = firstName + " " + lastName;
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: fullName,
        isSenior: function () {
            return age > 60;
        }
    };
}
var person5 = createPerson3("Stuber", "Hukli", 62);
console.log(person5.firstName);
console.log(person5.lastName);
console.log(person5.fullName);
console.log(person5.isSenior());
//# sourceMappingURL=09_objectLiterals.js.map