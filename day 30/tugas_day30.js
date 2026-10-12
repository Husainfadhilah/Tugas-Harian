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

// 5. Kondisi pembayaran menggunakan > sehingga uang yang sama dengan totalAkhir dianggap kurang; perbaikannya adalah mengganti > menjadi >= agar pembayaran yang sama atau lebih besar dianggap lunas.