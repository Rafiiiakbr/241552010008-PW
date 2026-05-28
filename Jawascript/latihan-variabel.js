// === SOAL 1: typeof & konversi ===
let angka = '42'
let desimal = '3,12'
let boolStr = 'true'

console.log(typeof angka); 
console.log(Number(angka));
console.log(Number(desimal));
console.log(Boolean(boolStr));
console.log(Boolean(''));
console.log(Boolean(0));

// === SOAL 2: const vs let scope ===
const MAX = 100;
let total = 0;
{
    let lokal = 50;
    total = lokal + 25;
}
console.log(total);
// console.log(lokal);// ReferenceError - coba uncomment!

//=== SOAL 3: string methods ===
const kalimat = ' Belajar JavaScript Itu Seru! ';
console.log(kalimat.trim().toLowerCase());
console.log(kalimat.trim().split(' ').length);
console.log(kalimat.includes('JavaScript'));