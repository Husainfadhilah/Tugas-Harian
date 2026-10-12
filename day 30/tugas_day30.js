if (0) {
  console.log("1: masuk");
}
if ("0") {
  console.log("2: masuk");
}
if ("") {
  console.log("3: masuk");
}
if ([]) {
  console.log("4: masuk");
}
if (null) {
  console.log("5: masuk");
}
if (-1) {
  console.log("6: masuk");
}

// JAWABAN SAYA 

//Potongan A :
// a. Kosong wok
// b. Masuk
// c. Kosong wok
// d. Masuk
// e. Kosong wok
// f. Masuk

let belanja = 120000;

if (belanja >= 25000) {
  console.log("Diskon 5%");
} else if (belanja >= 50000) {
  console.log("Diskon 10%");
} else if (belanja >= 100000) {
  console.log("Diskon 15%");
} else {
  console.log("Tidak ada diskon");
}
 // Jawabanya : Diskon 5%

let hari = "sabtu";

switch (hari) {
  case "jumat":
    console.log("Promo Jumat Berkah");
  case "sabtu":
    console.log("Promo Akhir Pekan");
  case "minggu":
    console.log("Promo Keluarga");
    break;
  default:
    console.log("Tidak ada promo");
}

// jawaban : promo akhir pekan dan promo keluarga

// Jawaban easy :

// 1.Karena nilai tersebut di nilai truthy yaitu true
// 2.Conlose.log nya pindah keatas di bagian if dan jangan di bagian else if
// 3.Hapus breaknya

// LANGAKAH 2 WOK

let totalBelanja = 80000;
let jenisMember = "gold";
let kodeVoucher = "";
let diskon;
let potonganMember;

if (totalBelanja >= 100000) {
  diskon =(totalBelanja * 0.15);
  
} else if (totalBelanja >= 50000) {
  diskon = totalBelanja * 0.1;
} else if (totalBelanja >= 100000) {
  diskon = totalBelanja * 0.05;
} else {
  diskon = 0;
}
document.write(diskon);

//FIX : 1.kesalahanya ada pada if dan else if pertama total belanja sudah true dengan if pertama maka if tidak perlu di periksa lagi, tapi ada yang salah di bagian perkalian diskonnya harusnya di kali 0.15 supaya hasilnya "diskon 10%" dan totalnya 8000. 

switch (jenisMember) {
  case "gold":
    potonganMember = 5000;
    break;
  case "silver":
    potonganMember = 2000;
    break;
  default:
    potonganMember = 0;
}
console.log(potonganMember);

// FIX :2.kurang break di setiap case nya dan3. saya juga mengganti jenis member menjadi penulisan camel case

if ((kodeVoucher = "")) {
  console.log("Voucher tidak dipakai");
} else {
  console.log("Voucher dipakai: " + kodeVoucher);
}

//FIX :4.Kesalahannya ada di bagian kodeVoucher = "". Kamu memakai = (operator penugasan), padahal seharusnya menggunakan === (operator perbandingan).


let totalAkhir = totalBelanja - diskon - potonganMember;

// FIX :5.Kode tersebut sebenarnya sudah benar secara penulisan. Namun, agar hasilnya 67.000, nilai totalBelanja, diskon, dan potonganMember harus sesuai.



let uangBayar = 67000;
if (uangBayar > totalAkhir) {
  console.log("Status: Lunas");
} else {
  console.log("Status: Kurang");
}

console.log(diskon, potonganMember, totalAkhir);

// FIX :6. Kesalahannya ada di kondisi if. Kamu menggunakan > (lebih besar dari), padahal uang bayar sama dengan totalAkhir, yaitu 67.000.

//RINGKASAN :
//
// 1. Urutan kondisi diskon salah karena kondisi >= 25000 diperiksa lebih dahulu sehingga totalBelanja 80000 mendapat diskon 5%; perbaikannya adalah memeriksa >= 100000, >= 50000, lalu >= 25000.

// 2. Nama variabel jenis member salah karena menggunakan jenismember, padahal variabel yang dibuat adalah jenisMember; perbaikannya adalah mengganti jenismember menjadi jenisMember.

// 3. Case "gold" tidak memiliki break sehingga potonganMember berubah menjadi 2000 saat dilanjutkan ke case "silver"; perbaikannya adalah menambahkan break setelah potonganMember = 5000.

// 4. Kondisi voucher menggunakan operator penugasan =, bukan operator perbandingan; perbaikannya adalah mengganti (kodeVoucher = "") menjadi (kodeVoucher === "").

// 5. Kondisi pembayaran menggunakan > sehingga uang yang sama dengan totalAkhir dianggap kurang; perbaikannya adalah mengganti > menjadi >= agar pembayaran yang sama atau lebih besar dianggap lunas


// ===================================
// LANGKAH 3: BIKIN KASIR SENDIRI
// ===================================

// 1. Data awal
let kasirNamaPelanggan = "Rina";
let kasirTotalBelanja = 90000;
let kasirHari = "sabtu";
let kasirJenisMember = "silver";
let kasirKodeVoucher = "SENJA10";
let kasirUangBayar = 100000;

// 2. Diskon berdasarkan total belanja
let kasirDiskon;

if (kasirTotalBelanja >= 100000) {
  kasirDiskon = kasirTotalBelanja * 0.15;
} else if (kasirTotalBelanja >= 50000) {
  kasirDiskon = kasirTotalBelanja * 0.10;
} else if (kasirTotalBelanja >= 25000) {
  kasirDiskon = kasirTotalBelanja * 0.05;
} else {
  kasirDiskon = 0;
}

// 3. Potongan member
let kasirPotonganMember;

if (kasirJenisMember === "gold") {
  kasirPotonganMember = 5000;
} else if (kasirJenisMember === "silver") {
  kasirPotonganMember = 2000;
} else {
  kasirPotonganMember = 0;
}

// 4. Promo hari menggunakan switch
let kasirPromoHari;

switch (kasirHari) {
  case "jumat":
    kasirPromoHari = 3000;
    break;

  case "sabtu":
  case "minggu":
    kasirPromoHari = 5000;
    break;

  default:
    kasirPromoHari = 0;
    break;
}

// 5. Validasi nama menggunakan Truthy/Falsy
let kasirStatusNama;

if (kasirNamaPelanggan) {
  kasirStatusNama = `Pelanggan: ${kasirNamaPelanggan}`;
} else {
  kasirStatusNama = "Nama pelanggan belum diisi";
}

// 6. Voucher menggunakan Truthy/Falsy
let kasirPotonganVoucher;
let kasirStatusVoucher;

if (kasirKodeVoucher) {
  kasirPotonganVoucher = 2000;
  kasirStatusVoucher = `Voucher dipakai: ${kasirKodeVoucher}`;
} else {
  kasirPotonganVoucher = 0;
  kasirStatusVoucher = "Voucher tidak dipakai";
}

// 7. Menghitung total akhir
let kasirTotalAkhir =
  kasirTotalBelanja -
  kasirDiskon -
  kasirPotonganMember -
  kasirPromoHari -
  kasirPotonganVoucher;

// 8. Status pembayaran
let kasirStatusPembayaran;

if (kasirUangBayar > kasirTotalAkhir) {
  kasirStatusPembayaran = `Lunas, kembalian: Rp${kasirUangBayar - kasirTotalAkhir}`;
} else if (kasirUangBayar === kasirTotalAkhir) {
  kasirStatusPembayaran = "Lunas (uang pas)";
} else {
  kasirStatusPembayaran = `Kurang: Rp${kasirTotalAkhir - kasirUangBayar}`;
}

// 9. Mencetak hasil menggunakan template literal
console.log(`
 KASIR KEDAI KOPI
${kasirStatusNama}
Total belanja: Rp${kasirTotalBelanja}
Diskon: Rp${kasirDiskon}
Potongan member: Rp${kasirPotonganMember}
Promo hari: Rp${kasirPromoHari}
${kasirStatusVoucher}
Potongan voucher: Rp${kasirPotonganVoucher}
Total akhir: Rp${kasirTotalAkhir}
Uang bayar: Rp${kasirUangBayar}
Status: ${kasirStatusPembayaran}

`);


// 10. UJI 3 SKENARIO


// Skenario 1:
// Nama: Rina, belanja: 90000, hari: sabtu
// Member: silver, voucher: SENJA10, bayar: 100000
// Hasil:
// Pelanggan: Rina
// Diskon: Rp9000
// Potongan member: Rp2000
// Promo hari: Rp5000
// Voucher dipakai: SENJA10
// Potongan voucher: Rp2000
// Total akhir: Rp72000
// Status: Lunas, kembalian: Rp28000

// Skenario 2:
// Ubah data awal menjadi:
// kasirNamaPelanggan = "";
// kasirTotalBelanja = 120000;
// kasirHari = "jumat";
// kasirJenisMember = "gold";
// kasirKodeVoucher = "";
// kasirUangBayar = 94000;
//
// Hasil setelah program dijalankan:
// Nama pelanggan belum diisi
// Diskon: Rp18000
// Potongan member: Rp5000
// Promo hari: Rp3000
// Voucher tidak dipakai
// Potongan voucher: Rp0
// Total akhir: Rp94000
// Status: Lunas (uang pas)

// Skenario 3:
// Ubah data awal menjadi:
// kasirNamaPelanggan = "Dina";
// kasirTotalBelanja = 30000;
// kasirHari = "rabu";
// kasirJenisMember = "biasa";
// kasirKodeVoucher = "";
// kasirUangBayar = 20000;
//
// Hasil setelah program dijalankan:
// Pelanggan: Dina
// Diskon: Rp1500
// Potongan member: Rp0
// Promo hari: Rp0
// Voucher tidak dipakai
// Potongan voucher: Rp0
// Total akhir: Rp28500
// Status: Kurang: Rp8500


// JAWABAN PERTANYAAN


// 1. Urutan else if dimulai dari angka terbesar agar diskon yang sesuai bisa diperiksa terlebih dahulu; jika dibalik, kondisi >= 25000 akan terpenuhi lebih dahulu sehingga belanja Rp90000 hanya mendapat diskon 5%.

// 2. switch lebih cocok untuk promo hari karena satu variabel, yaitu kasirHari, dibandingkan dengan beberapa nilai tetap seperti "jumat", "sabtu", dan "minggu".

// 3. break sengaja tidak ditulis di antara case "sabtu" dan case "minggu" agar keduanya menjalankan potongan promo yang sama, yaitu Rp5000.

// 4. Tiga nilai yang membuat if (namaPelanggan) bernilai false adalah string kosong (""), null, dan undefined.

// 5. Jika jumlahBeli bernilai -1, if (jumlahBeli) bernilai true karena angka selain 0 bersifat truthy, sedangkan if (jumlahBeli > 0) bernilai false karena -1 tidak lebih besar dari 0.
