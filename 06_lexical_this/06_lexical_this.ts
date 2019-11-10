let employee1 = {
  id: 1,
  showId: function() {
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

let employee3 = {
  id: 1,
  showId: function() {
    let self = this; // by creating self variable, we are saving the context from current function
    setTimeout(function() {
      console.log(self.id); // here this is having a different context,thus using self
    }, 1000);
  }
};

employee3.showId();

let employee4 = {
  id: 1,
  showId: function() {
    setTimeout(() => {
      console.log(this.id); // Arrow function doesn't create any context for this. It takes the outer context.
    }, 1000);
  }
};

employee4.showId();
