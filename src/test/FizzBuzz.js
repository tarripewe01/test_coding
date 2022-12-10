/* eslint-disable eqeqeq */
// buatlah angka 1 - 100, jika angka dapat dibagi 3 maka munculkan "Fizz",
// jika angka dapat dibagi 5 munculkan "Buzz" dan jika dapat dibagi 3 dan 5
// maka munculkan "Fizz Buzz"

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("Fizz Buzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// console.log(word)
