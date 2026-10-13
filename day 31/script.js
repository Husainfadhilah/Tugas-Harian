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
