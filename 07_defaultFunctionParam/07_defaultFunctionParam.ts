/* Version 1 */
let getValue1 = function(value: number) {
  console.log(value);
};

// getValue1(); // not allowed in Typescript but in JS output will be undefined
getValue1(20);

/* Version 2 */
let getValue2 = function(value = 10) {
  console.log(value);
};

getValue2();
getValue2(20);

/* Version 3 */
let getValue3 = function(value = 10, bonus = 5) {
  console.log(value + bonus);
};

getValue3();
getValue3(20);
getValue3(20, 30);
getValue3(undefined, 10);

/* Version 4 */
let getValue4 = function(value = 10, bonus = value * 0.5) {
  // it is allowed to use any left side parameter for default value calculation
  console.log(value + bonus);
};

getValue4();
getValue4(20);
getValue4(20, 30);
getValue4(undefined, 10);

/* Version 5 */
let percent = 0.5;
let getValue5 = function(value = 10, bonus = value * percent) {
  // it is allowed to use external variable for default value calculation
  console.log(value + bonus);
};

getValue5();
getValue5(20);
getValue5(20, 30);
getValue5(undefined, 10);

/* Version 6 */
let percentArr = () => 0.5;
let getValue6 = function(value = 10, bonus = value * percentArr()) {
  // it is allowed to use function for default value calculation
  console.log(value + bonus);
};

getValue6();
getValue6(20);
getValue6(20, 30);
getValue6(undefined, 10);

/* Version 7 */
// let getValue7 = function(value = bonus, bonus = 10) {
//   // it is not allowed to use right side parameter
//   console.log(value + bonus);
// };

// getValue7();
// getValue7(20);
// getValue7(20, 30);
// getValue7(undefined, 10);
