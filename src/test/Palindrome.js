const palindrome = (string) => {
  const len = string.length;

  for (let i = 0; i <= len; i++) {
    if (string[i] !== string[len - i - 1]) {
      return false;
    }
  }
  return true;
};


console.log(palindrome("kita")) // false
console.log(palindrome("isi")) // true
console.log(palindrome("katak")) // true
