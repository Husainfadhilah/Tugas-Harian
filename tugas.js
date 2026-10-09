console.log(7 + 3 * 2);
console.log((7 + 3) * 2);
console.log(17 % 5);
console.log(2 ** 3);
console.log(5 == "5");
console.log(5 === "5");
console.log(true && false);
console.log(true || false);
console.log(!true);
console.log(10 > 5 && 3 > 8);

// TEBAKAN SAYA 
// 1. 7 + 3 * 2 = 13
// karena yang dikerjakan terlebih dahulu adalah perkalian, sehingga 3 * 2 = 6, lalu 7 + 6 = 13
// // 2. (7 + 3) * 2 = 20
// karena yang dikerjakan terlebih dahulu adalah operasi dalam kurung, sehingga 7 + 3 = 10, lalu 10 * 2 = 20
// 3. 17 % 5 = 2
// karena 17 dibagi 5 hasilnya 3 dengan sisa 2
// 4. 2 ** 3 = 8
// karena 2 dipangkat 3 hasilnya 8
// 5. 5 == "5" = true
// karena tipe data berbeda, tetapi nilai sama
// 6. 5 === "5" = false
// karena tipe data berbeda
// 7. true && false = false
// karena kedua operand harus true untuk menghasilkan true
// 8. true || false = true
// karena minimal satu operand harus true untuk menghasilkan true
// 9. !true = false
// karena operator ! membalikkan nilai boolean
// 10. 10 > 5 && 3 > 8 = false
// karena 10 > 5 adalah true, tetapi 3 > 8 adalah false, sehingga hasil 

const hargaKopi = 18000;
const hargaTeh = 7500;
let jumlahMember = 5;
let sudahMember = true;
let uangDiterima = "51000";

// Total 2 kopi + 2 teh. Seharusnya: 51000
let totalPesanan = hargaKopi + hargaTeh * 2;

// Uang diterima sama persis dengan total? Seharusnya: true
let uangPas = uangDiterima == totalPesanan;

// Tambah 1 member baru. Seharusnya jumlahMember jadi 6
jumlahMember + 1;

// Dapat diskon jika sudah member ATAU total lebih dari 100000. Seharusnya: true
let dapatDiskon = sudahMember && totalPesanan > 100000;

console.log(totalPesanan, uangPas, jumlahMember, dapatDiskon);


// JAWABAN SAYA
// 1.FIX : masing masing produk harusnya 