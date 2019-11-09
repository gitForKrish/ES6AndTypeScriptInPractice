let getRegValue = function() {
  return 10;
};
console.log(getRegValue());

let getArrowvalue1 = () => {
  return 10;
};
console.log(getArrowvalue1());

let getArrowvalue2 = () => 10;
console.log(getArrowvalue2());

let getArrowvalue3 = (m: number) => 10 * m;
console.log(getArrowvalue3(5));

let getArrowvalue4 = (m: number, bonus: number) => {
  return 10 * m + bonus;
};
console.log(getArrowvalue4(5, 50));

console.log(typeof getArrowvalue1);
