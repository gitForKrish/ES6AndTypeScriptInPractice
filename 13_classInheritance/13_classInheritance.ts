class BaseClass1 {
  constructor(name: string) {
    console.log(`Base class constuctor say- Hello ${name}`);
  }
}

class DerivedClass1 extends BaseClass1 {} // extends keyword is used for class inheritance
let derivedObj1 = new DerivedClass1("Krish"); // it will call base class constructor automatically

class BaseClass2 {
  constructor(name: string) {
    console.log(`Base class constuctor say- Hello ${name}`);
  }
  getID() {
    return 10;
  }
  showID() {
    return 10;
  }
  fetchID() {
    return 10;
  }
}

class DerivedClass2 extends BaseClass2 {
  constructor(name: string) {
    super(name); // Need explicit call to base constructor
    console.log(`Derived class constuctor say- Hi ${name}`);
  }
  showID() {
    return 50;
  }

  fetchID() {
    return super.fetchID();
  }
}

let derivedObj2 = new DerivedClass2("Tanmoy");
console.log(derivedObj2.getID()); // It will call the base class method
console.log(derivedObj2.showID()); // It will call the derived class method
console.log(derivedObj2.fetchID()); // It will call the derived class method which in turn call the base class method
