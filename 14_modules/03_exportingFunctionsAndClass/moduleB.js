export function greet(msg) {
  console.log(msg);
}

export class GreetMessage {
  constructor() {
    console.log("Constructor");
  }
  greet() {
    console.log("Greet method");
  }
}
