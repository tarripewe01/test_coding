const palindrome = (string) => {
  const len = string.length;

  for (let i = 0; i <= len / 2; i++) {
    if (string[i] !== string[len - i - 1]) {
      return false;
    }
  }
  return true;
};

let kita = palindrome("kita");
let isi = palindrome("isi");
let katak = palindrome("katak");

console.log({ kita, isi, katak });
