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


//Program Kasir

// ============================================================
// LANGKAH 3: PROGRAM KASIR
// (tempel bagian ini di paling bawah file Langkah 1 dan 2 kamu;
//  semua nama diawali "kasir" supaya tidak bentrok)
// ============================================================

// ---------- Data awal ----------
const kasirNamaMenu = ["Kopi Susu", "Es Teh", "Roti Bakar", "Nasi Goreng", "Jus Jeruk"];
const kasirHargaMenu = [18000, 7500, 15000, 22000, 12000];
let kasirKeranjang = [];

// ---------- Function 1: function declaration ----------
function kasirCariHarga(namaMenu) {
  const posisi = kasirNamaMenu.indexOf(namaMenu);
  if (posisi === -1) {
    return 0; // menu tidak ditemukan
  }
  return kasirHargaMenu[posisi];
}

// ---------- Function 2: function expression ----------
const kasirHitungSubtotal = function () {
  let subtotal = 0;
  for (let i = 0; i < kasirKeranjang.length; i++) {
    subtotal += kasirCariHarga(kasirKeranjang[i]);
  }
  return subtotal;
};

// ---------- Function 3: arrow function (kurung kurawal + return) ----------
const kasirHitungDiskon = (subtotal) => {
  let persen;
  if (subtotal >= 100000) {
    persen = 0.15;
  } else if (subtotal >= 50000) {
    persen = 0.1;
  } else if (subtotal >= 25000) {
    persen = 0.05;
  } else {
    persen = 0;
  }
  return subtotal * persen;
};

// ---------- Function 4: arrow function ringkas + nilai default ----------
const kasirHitungPajak = (nilai, tarif = 0.11) => Math.round(nilai * tarif);

// ---------- Function 5: cetak struk (tanpa return) ----------
function kasirCetakStruk(subtotal, diskon, pajak) {
  const total = subtotal - diskon + pajak;
  const rp = (angka) => "Rp " + angka.toLocaleString("id-ID");

  console.log("=============== STRUK KASIR ===============");
  for (let i = 0; i < kasirKeranjang.length; i++) {
    const nama = kasirKeranjang[i];
    console.log(`${i + 1}. ${nama.padEnd(15)} ${rp(kasirCariHarga(nama)).padStart(12)}`);
  }
  console.log("-------------------------------------------");
  console.log(`Subtotal : ${rp(subtotal)}`);
  console.log(`Diskon   : ${rp(diskon)}`);
  console.log(`Pajak    : ${rp(pajak)}`);
  console.log(`Total    : ${rp(total)}`);
  console.log("===========================================");
}

// ---------- Helper: jalankan satu transaksi ----------
// Total akhir = (subtotal - diskon) + pajak, pajak dihitung dari subtotal setelah diskon
function kasirProsesTransaksi() {
  const subtotal = kasirHitungSubtotal();
  const diskon = kasirHitungDiskon(subtotal);
  const pajak = kasirHitungPajak(subtotal - diskon);
  kasirCetakStruk(subtotal, diskon, pajak);
}

// ============================================================
// Mengelola keranjang dengan array method
// ============================================================
kasirKeranjang.push("Kopi Susu");
kasirKeranjang.push("Es Teh");
kasirKeranjang.push("Roti Bakar");
kasirKeranjang.unshift("Nasi Goreng"); // item prioritas di depan
kasirKeranjang.push("Jus Jeruk");
console.log("Sebelum pop :", kasirKeranjang);
kasirKeranjang.pop(); // batalkan item terakhir (Jus Jeruk)
console.log("Sesudah pop :", kasirKeranjang);
kasirKeranjang.splice(2, 1, "Jus Jeruk"); // ganti item index 2 (Es Teh) dengan Jus Jeruk
console.log("Keranjang akhir:", kasirKeranjang, "-> jumlah item:", kasirKeranjang.length);

// includes: cek satu menu ada di keranjang atau tidak
console.log("Ada Kopi Susu di keranjang?", kasirKeranjang.includes("Kopi Susu"));
console.log("Ada Es Teh di keranjang?   ", kasirKeranjang.includes("Es Teh"));

// slice: ambil 3 item pertama sebagai "paket cepat"
const kasirPaketCepat = kasirKeranjang.slice(0, 3);
console.log("Paket cepat (3 item pertama):", kasirPaketCepat);

// ============================================================
// SKENARIO 1
// ============================================================
console.log("\n##### SKENARIO 1 #####");
kasirProsesTransaksi();

// Skenario 1: keranjang berisi ["Nasi Goreng", "Kopi Susu", "Jus Jeruk", "Roti Bakar"]
// Hasil:
// Subtotal: Rp 67.000
// Diskon  : Rp 6.700   (10%, karena subtotal >= 50.000)
// Pajak   : Rp 6.633   (11% x Rp 60.300)
// Total   : Rp 66.933

// ============================================================
// SKENARIO 2 (ubah isi keranjang -> tingkat diskon berbeda)
// ============================================================
console.log("\n##### SKENARIO 2 #####");
kasirKeranjang = ["Nasi Goreng", "Nasi Goreng", "Kopi Susu", "Kopi Susu", "Roti Bakar", "Jus Jeruk"];
kasirProsesTransaksi();

// Skenario 2: keranjang berisi ["Nasi Goreng", "Nasi Goreng", "Kopi Susu", "Kopi Susu", "Roti Bakar", "Jus Jeruk"]
// Hasil:
// Subtotal: Rp 107.000
// Diskon  : Rp 16.050  (15%, karena subtotal >= 100.000)
// Pajak   : Rp 10.005  (11% x Rp 90.950, dibulatkan)
// Total   : Rp 100.955

// ============================================================
// JAWABAN PERTANYAAN
// ============================================================

// 1. Method pada keranjang: pop().
//    Ya, pop() MENGUBAH array aslinya (mutating). Buktinya ada di bagian atas
//    (console.log "Sebelum pop" dan "Sesudah pop"):
//      Sebelum pop : [ 'Nasi Goreng', 'Kopi Susu', 'Es Teh', 'Roti Bakar', 'Jus Jeruk' ]
//      Sesudah pop : [ 'Nasi Goreng', 'Kopi Susu', 'Es Teh', 'Roti Bakar' ]
//    'Jus Jeruk' hilang dari array yang sama, tanpa membuat array baru.

// 2. Beda splice dan slice:
//    - splice MENGUBAH array asli (menghapus/mengganti/menyisipkan item) dan
//      mengembalikan item yang dihapus. Contoh di kodeku:
//      kasirKeranjang.splice(2, 1, "Jus Jeruk") mengganti "Es Teh" di index 2
//      pada kasirKeranjang itu sendiri.
//    - slice TIDAK mengubah array asli; ia hanya menyalin sebagian item ke array
//      baru. Contoh: kasirKeranjang.slice(0, 3) menghasilkan kasirPaketCepat,
//      sedangkan kasirKeranjang tetap berisi 4 item.

// 3. kasirCariHarga memakai return karena nilai harganya harus DIKEMBALIKAN ke
//    pemanggil agar bisa dipakai lagi (dijumlahkan, dihitung diskon, dst).
//    console.log hanya menampilkan teks ke layar dan tidak memberi nilai balik
//    (function mengembalikan undefined). Jika kasirCariHarga diganti console.log,
//    maka di kasirHitungSubtotal, kasirCariHarga(...) bernilai undefined, sehingga
//    subtotal += undefined menghasilkan NaN. Subtotal, diskon, pajak, dan total
//    semuanya jadi NaN (diskon jadi 0 karena NaN >= 100000 bernilai false, tapi
//    subtotal dan total tetap NaN).

// 4. Parameter vs argumen:
//    - Parameter adalah nama variabel di definisi function. Contoh: "namaMenu"
//      pada function kasirCariHarga(namaMenu).
//    - Argumen adalah nilai yang dikirim saat function dipanggil. Contoh:
//      "Es Teh" pada kasirCariHarga("Es Teh").
//    Parameter = "wadah", argumen = "isi" yang dimasukkan ke wadah itu.

// 5. kasirHitungPajak(nilai, tarif = 0.11) boleh dipanggil dengan satu atau dua
//    argumen karena tarif punya nilai default (0.11). Jika argumen kedua tidak
//    diberikan (atau undefined), JavaScript memakai 0.11. Jika diberikan, nilai
//    default diabaikan. Contoh: kasirHitungPajak(60300) memakai tarif 11%,
//    sedangkan kasirHitungPajak(60300, 0.1) memakai tarif 10%.

// 6. Memanggil sebelum definisi:
//    Kode percobaan (sengaja dijadikan komentar karena akan menghentikan program):
//
//      console.log(kasirCariHarga("Es Teh"));   // dipanggil sebelum definisi
//      console.log(kasirHitungSubtotal());      // dipanggil sebelum definisi
//
//    Hasil:
//      - kasirCariHarga("Es Teh") -> 7500 (BERHASIL). Function declaration
//        di-hoist: seluruh definisinya sudah dikenali JavaScript sebelum kode
//        dijalankan, jadi boleh dipanggil dari baris mana pun.
//      - kasirHitungSubtotal() -> ReferenceError: Cannot access
//        'kasirHitungSubtotal' before initialization (GAGAL). kasirHitungSubtotal
//        adalah function expression yang disimpan di const; deklarasi const
//        memang di-hoist tetapi belum diinisialisasi (berada di "temporal dead
//        zone") sampai baris pendefinisiannya dieksekusi. Karena itu
//        function expression baru bisa dipakai setelah barisnya.


//Tugas Bonus
let keranjang = ["Kopi", "Teh", "Roti"];

function kasirBatalkanItem(namaMenu) {
  let posisi = keranjang.indexOf(namaMenu);

  if (posisi !== -1) {
    keranjang.splice(posisi, 1);
    return true;
  } else {
    return false;
  }
}

// Membatalkan menu yang ada
console.log(kasirBatalkanItem("Teh")); // Seharusnya: true

// Membatalkan menu yang tidak ada
console.log(kasirBatalkanItem("Susu")); // Seharusnya: false

// Isi keranjang setelah pembatalan
console.log(keranjang); // Seharusnya: ["Kopi", "Roti"]
