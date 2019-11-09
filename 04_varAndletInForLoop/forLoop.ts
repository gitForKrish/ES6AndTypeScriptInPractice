/* Print 1 to 5 in console */
// for (var i = 1; i <= 5; i++) {
//   console.log(i);
// }

for (var i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i); // output is 6 repeated by 5 times - with var, we are sending i as a reference type not with value type
    // the 5 anonymous functions hold the reference of i thus printing 6 which is the exit criteria for the loop.
  }, 2000);
}

/* Use let to fix the above issue */
for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i); // it will print 1 to 5
  }, 2000);
}

// To deal with CLOSURE and LOOPs, use let instead of var
