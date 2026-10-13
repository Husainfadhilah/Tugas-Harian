//Menghitung mundur
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("Hitungan mundur");

//Menjumlahkan angka satu sampai 10
let hasil = 0;

for (let i = 1; i <= 10; i++) {
  hasil += i;
}

console.log("Total:", hasil);

//Mengakses elemen array
const pemain = ["Maul", "Arip", "Yazid", "Gusti"];

for (let i = 0; i < pemain.length; i++) {
  console.log(i + 1 + ".", pemain[i]);
}

//Menebak angka
let angkaRahasia = 7;
let tebakan = 0;
let percobaan = 0;

while (tebakan !== angkaRahasia) {
  percobaan++;
  tebakan = Math.floor(Math.random() * 10) + 1; // Angka acak 1-10
  console.log("Percobaan ke-" + percobaan + ": menebak angka", tebakan);
}

//Pemggunaan nyata - konfirmasi
// let konfirmasi;

// do {
//   konfirmasi = prompt("Ketik 'ya' untuk melanjutkan:");
// } while (konfirmasi !== "aku masih epic");

// console.log("Pengguna telah mengkonfirmasi. Melanjutkan proses...");

//Menghentikan perulangan break
for (let i = 1; i <= 50; i++) {
  if (i === 10) {
    console.log(
      " posisi ke-" + i + ". di barisan",
    );
    break;
  }
  console.log("Memeriksa posisi ke-" + i);
}

//Memfilter data array
const nilai = [85, -5, 92, -10, 78, 60];

console.log("Suhu Derajat:");
for (let i = 0; i < nilai.length; i++) {
  if (nilai[i] < 0) {
    continue; 
  }
  console.log("-", nilai[i],"celcius");
}