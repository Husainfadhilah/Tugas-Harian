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

