// TEBAK POTONGAN CODE
//potongan A
let menu = ["Kopi", "Teh", "Roti", "Susu"];

menu.push("Jus");
menu.unshift("Air");
let terakhirDibuang = menu.pop();
let pertamaDibuang = menu.shift();
menu.splice(1, 1);
let irisan = menu.slice(1, 3);

console.log(terakhirDibuang);
console.log(pertamaDibuang);
console.log(menu);
console.log(irisan);
console.log(menu.indexOf("Susu"));
console.log(menu.indexOf("Nasi"));
console.log(menu.includes("Kopi"));
console.log(menu[menu.length - 1]);

console.log("----------------------------------------------------------");

//JAWABAN 
//a. jus
//b. Air
//c. Kopi, Roti, Susu
//d. Roti, Susu
//e. 2
//f. -1
//g. true
//h. susu

function tambah(a, b) {
  return a + b;
}

function cetakTambah(a, b) {
  console.log(a + b);
}

let x = tambah(2, 3);
let y = cetakTambah(2, 3);
console.log(x);
console.log(y);
console.log("----------------------------------------------------------");

//JAWABAN
//a. 5
//b. 5
//undifined

const hitungDiskonPersen = (harga, persen = 10) => harga - (harga * persen) / 100;
console.log(hitungDiskonPersen(50000, 20));
console.log(hitungDiskonPersen(50000));

function cekAngka(n) {
  if (n < 0) {
    return "negatif";
    console.log("Baris ini muncul atau tidak?");
  }
  return "bukan negatif";
}

console.log(cekAngka(-5));
console.log(cekAngka(5));

//JAWABAN 
//a. 40000
//b. 45000
//c. negatif
//d. bukan negatif

//1. Pada Potongan A, `menu` dan `irisan` berbeda karena method yang digunakan menghasilkan perubahan yang berbeda. `splice()` mengubah array asli, sedangkan `slice()` tidak mengubah array asli.

// 2. Pada Potongan B, `tambah` adalah fungsi yang mengembalikan hasil penjumlahan, sedangkan `cetakTambah` adalah fungsi yang hanya menampilkan hasil menggunakan `console.log()`. `y` bernilai `undefined` karena fungsi `cetakTambah` tidak memiliki nilai `return`.

// 3. Pada Potongan C, `hitungDiskonPersen(50000)` tetap menghasilkan angka karena fungsi mengembalikan nilai menggunakan `return`. Baris `console.log("Baris ini muncul atau tidak?")` tidak tercetak jika berada setelah `return` di dalam fungsi yang sama, karena `return` langsung menghentikan eksekusi fungsi.
console.log("---------------------------------------------------------");

//LANGKAH 2

let daftarBelanja = ["Kopi", "Teh", "Roti"];
daftarBelanja.push("Susu");
//JAWABAN
//FIX: Seharusnya menambhakan push() untuk menambahkan elemen di belakang nya

//No.2
daftarBelanja.slice(1,1);
console.log(daftarBelanja);


//FIX: Seharusnya mengganti unshift dengan slice yang isinya (1,1)

let adaRoti = daftarBelanja.includes("Roti");

//FIX : Seharusnya menambahkan include di daftarBelanja yaitu daftarBelanja.includes("Roti");

let terakhir = daftarBelanja[daftarBelanja.length];
//seharusnya
// let terakhir = daftarBelanja[daftarBelanja.length - 1];
//FIX : Indeks array dimulai dari 0. Karena itu, indeks terakhir adalah jumlah elemen dikurangi 1.

function hitungDiskon(harga, persen) {
  harga - (harga * persen) / 100;
}
//seharusnya
// function hitungDiskon(harga, persen) {
//   return harga - (harga * persen) / 100;
// }
//FIX : return mengembalikan hasil perhitungan dari fungsi. Tanpanya, fungsi menghasilkan undefined ketika dipanggil.

const hitungPajak = (subtotal) => {
  subtotal * 0.11;
};
//seharusnya
// const hitungPajak = (subtotal) => {
//   return subtotal * 0.11;
// };
//FIX : Alasannya sama seperti fungsi diskon: hasil perhitungan perlu dikembalikan menggunakan return.

console.log(hitungTotal(80000, 8800));
const hitungTotal = (subtotal, pajak) => subtotal + pajak;
//seharusnya
// const hitungTotal = (subtotal, pajak) => subtotal + pajak;
// console.log(hitungTotal(80000, 8800));
//FIX : Variabel fungsi yang dideklarasikan menggunakan const belum bisa digunakan sebelum deklarasinya dijalankan.



