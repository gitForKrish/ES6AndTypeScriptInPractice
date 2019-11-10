let firstName = "Morgan";
let lastName = "Stanley";

/* ES5: create object with existing variables */
let person1 = {
  firstName: firstName,
  lastName: lastName
};

console.log(person1.firstName);
console.log(person1.lastName);

/* ES6: the above process has been shorten */
let person2 = {
  firstName, // if variable name and object property are same then use only the variable name inside object literals
  lastName
};
console.log(person2.firstName);
console.log(person2.lastName);

/* Even creation of object literals inside function can be shortened */
function createPerson1(firstName: string, lastName: string) {
  let fullName = firstName + " " + lastName;
  return { firstName, lastName, fullName };
}

let person3 = createPerson1("Jack", "Stone");
console.log(person3.firstName);
console.log(person3.lastName);
console.log(person3.fullName);

function createPerson2(firstName: string, lastName: string, age: number) {
  let fullName = firstName + " " + lastName;
  return {
    firstName,
    lastName,
    fullName,
    isSenior: () => {
      return age > 60;
    }
  };
}

let person4 = createPerson2("Martin", "Cober", 32);
console.log(person4.firstName);
console.log(person4.lastName);
console.log(person4.fullName);
console.log(person4.isSenior());

function createPerson3(firstName: string, lastName: string, age: number) {
  let fullName = firstName + " " + lastName;
  return {
    firstName,
    lastName,
    fullName,
    isSenior() {
      return age > 60;
    }
  };
}

let person5 = createPerson3("Stuber", "Hukli", 62);
console.log(person5.firstName);
console.log(person5.lastName);
console.log(person5.fullName);
console.log(person5.isSenior());
