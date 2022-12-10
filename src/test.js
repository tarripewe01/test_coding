/* eslint-disable eqeqeq */

// Pisahkan Genap dan Ganjil dari angka 1 - 100

let genap = [];
let ganjil = [];

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    genap = [...genap, i];
  } else {
    ganjil = [...ganjil, i];
  }
}

// console.log({genap, ganjil})

// Carilah bilangan prima dari 1 - 100

let prima = [];

for (let i = 1; i <= 100; i++) {
  let bilangan = 0;
  for (let a = 1; a <= i; a++) {
    if (i % a == 0) {
      bilangan = bilangan + 1;
    }
  }
  if (bilangan == 2) {
    prima = [...prima, i];
  }
}

// console.log(prima)
// hasil => [
//     2,  3,  5,  7, 11, 13, 17, 19,
//    23, 29, 31, 37, 41, 43, 47, 53,
//    59, 61, 67, 71, 73, 79, 83, 89,
//    97
//  ]

// Carilah bilangan Fibonacci 10 kali

let fibonacci = [];
let n1 = 0;
let n2 = 1;

for (let i = 0; i <= 10; i++) {
  if (i == 0 || i == 1) {
    fibonacci = [...fibonacci, i];
  } else {
    let total = n1 + n2;
    fibonacci = [...fibonacci, total];
    n1 = n2;
    n2 = total;
  }
}

// console.log(fibonacci);
// hasil =>  0, 1,  1,  2,  3, 5, 8, 13, 21, 34, 55

// Diket: Andi menabung dengan uang Rp 750.000. Bulan pertama mendapatkan bunga
// sebesar 6%. Bulan berikutnya, Andi menyisihkan 3% dari tabungannya, maksimal
// yang disisihkan 3% dari Rp 800.000
// Ditanya: Total Tabungan selama 1 tahun ?

let uangAndi = 750000;
let totalTabungan = "";

for (let i = 1; i <= 12; i++) {
  let bunga = 0;
  let sisih = 0;

  if (i > 1) {
    bunga = (uangAndi * 6) / 100;
    if (uangAndi + bunga > 800000) {
      sisih = (800000 * 3) / 100;
    } else {
      sisih = ((uangAndi + bunga) * 3) / 100;
    }
  }
  totalTabungan += `Tabungan Awal : ${uangAndi.toFixed(
    2
  )} \n Bunga Bank: ${bunga.toFixed(2)} \n  Sisih: ${sisih.toFixed(
    2
  )} \n Uang Bulan ke-${i} : ${uangAndi + bunga - sisih} \n ----------\n`;
  uangAndi = uangAndi + bunga - sisih;
}

// console.log(totalTabungan);
