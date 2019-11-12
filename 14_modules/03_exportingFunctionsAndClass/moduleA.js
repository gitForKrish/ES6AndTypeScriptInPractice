import { greet, GreetMessage } from "./moduleB.js";
greet("Hello world");

let gm = new GreetMessage();
gm.greet();
