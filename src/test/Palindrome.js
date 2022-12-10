// const palindrome = (string) => {
//   //   const len = string.length;

//   //   for (let i = 0; i <= len / 2; i++) {
//   //     if (string[i] !== string[len - i - 1]) {
//   //       return false;
//   //     }
//   //   }
//   //   return true;

// };

// menggunakan recursive
const palindromeRecursive = (string, i) => {
  if (i < string.length / 2) {
    if (string[i] !== string[string.length - i - 1]) {
      return false;
    } else {
      return palindromeRecursive(string, i + 1);
    }
  } else {
    return true;
  }
};

// console.log(palindrome("kita")); // false
// console.log(palindrome("isi")); // true
// console.log(palindrome("katak")); // true

console.log(palindromeRecursive("kita", 0)); // false
console.log(palindromeRecursive("isi", 0)); // true
console.log(palindromeRecursive("katak", 0)); // true
