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
// 1.FIX : masing masing produk harusnya di beri tanda * sebagai tanda perkalian
// let totalPesanan = hargaKopi * 2 + hargaTeh * 2;
 
// FIX: Ubah uangDiterima menjadi angka agar bisa dibandingkan dengan ===.
// let uangPas = Number(uangDiterima) === totalPesanan;


// FIX: Gunakan += agar nilai jumlahMember benar-benar bertambah.
// jumlahMember += 1;


// FIX: Gunakan || karena syaratnya menggunakan ATAU.
// let dapatDiskon = sudahMember || totalPesanan > 100000;

// console.log(totalPesanan, uangPas, jumlahMember, dapatDiskon);

// Jawaban pertanyaan:
// 1. Kesalahan pertama adalah rumus total pesanan yang belum mengalikan
//    jumlah masing-masing produk; diperbaiki dengan mengalikan harga kopi
//    dan teh masing-masing dengan 2.
// 2. Kesalahan kedua adalah membandingkan string dengan angka menggunakan
//    ===; diperbaiki dengan mengubah uangDiterima menjadi angka menggunakan Number().
// 3. Kesalahan ketiga adalah jumlahMember + 1 hanya menghitung hasil tanpa
//    menyimpan perubahan; diperbaiki menggunakan += 1.
// 4. Kesalahan keempat adalah menggunakan && padahal syarat diskon memakai
//    ATAU; diperbaiki menggunakan ||.
//
// Jika == diganti === tanpa mengubah uangDiterima, hasilnya false karena
// uangDiterima berupa string, sedangkan totalPesanan berupa angka.
// Number(uangDiterima) mengubah string "51000" menjadi angka 51000.
//
// && berarti kedua syarat harus benar.
// || berarti cukup salah satu syarat benar.
// Contoh: sudahMember && totalPesanan > 100000 membutuhkan keduanya benar,
// sedangkan sudahMember || totalPesanan > 100000 cukup salah satu benar.


const namaBarang = "Nasi Goreng";
const hargaSatuan = 20000;
const TARIF_PAJAK = 0.11;

let jumlahBeli = 3;
let uangDibayar = 75000;

let subtotal = hargaSatuan * jumlahBeli;
let pajak = subtotal * TARIF_PAJAK;
let totalBayar = subtotal + pajak;

// Operator penugasan ringkas
totalBayar += 0;
subtotal -= 0;

// Menghitung kembalian
let kembalian = uangDibayar - totalBayar;

// Variabel Boolean
let uangCukup = uangDibayar >= totalBayar;
let gratisKantong = subtotal >= 100000 || jumlahBeli >= 5;
let jumlahGenap = jumlahBeli % 2 === 0;

// Contoh penggunaan tanda kurung
let contohDenganKurung = (hargaSatuan + 5000) * 2;
let contohTanpaKurung = hargaSatuan + 5000 * 2;

console.log("Barang          :", namaBarang);
console.log("Jumlah          :", jumlahBeli);
console.log("Subtotal        :", hargaSatuan * jumlahBeli);
console.log("Pajak (11%)     :", pajak);
console.log("Total bayar     :", totalBayar);
console.log("Uang dibayar    :", uangDibayar);
console.log("Kembalian       :", kembalian);
console.log("Uang cukup?     :", uangCukup);
console.log("Gratis kantong? :", gratisKantong);
console.log("Jumlah genap?   :", jumlahGenap);

console.log("Dengan kurung   :", contohDenganKurung);
console.log("Tanpa kurung    :", contohTanpaKurung);

// Jawaban pertanyaan:
// 1. Uang cukup artinya uang yang saya bayar cukup untuk membayar
//    semua pesanan. Hasilnya true karena uang saya lebih banyak
//    daripada total yang harus dibayar.
//
// 2. Sebelum diganti, gratisKantong memakai || dan hasilnya false
//    karena subtotal belum 100000 dan jumlah beli belum 5.
//    Kalau || diganti &&, hasilnya tetap false karena kedua syarat
//    sama-sama belum terpenuhi.
//
// 3. Dengan kurung hasilnya 50000, karena harga ditambah 5000
//    dulu baru dikali 2. Tanpa kurung hasilnya 30000 karena
//    perkalian dikerjakan lebih dulu.


let totalMenit = 250;

let jam = Math.floor(totalMenit / 60);
let menit = totalMenit % 60;

console.log(jam + " jam " + menit + " menit");

// / adalah pembagian. 250 / 60 menghasilkan 4.1666.... Karena jam harus berupa angka bulat, kita menggunakan Math.floor() untuk membulatkannya ke bawah menjadi 4.

// % adalah operator sisa bagi. 250 % 60 menghasilkan 10, yaitu sisa menit setelah mengambil 4 jam penuh.

// Jadi, 250 menit = 4 jam 10 menit.