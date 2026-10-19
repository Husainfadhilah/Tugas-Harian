const nama = "Global";

function luar() {
  const nama = "Luar";

  function dalam() {
    const nama = "Dalam";
    console.log(nama);
  }

  dalam();
  console.log(nama);
}

luar();
console.log(nama);

const diskonGlobal = 10;

function hitung(harga) {
  const diskonLokal = 5;
  return harga - diskonGlobal - diskonLokal;
}

console.log(hitung(100));

if (true) {
  let pesanBlok = "di dalam blok";
  console.log(pesanBlok);
}

for (let i = 0; i < 2; i++) {
  console.log("putaran", i);
}
// Percobaan 1:
// console.log(pesanBlok);
// Error: ReferenceError: pesanBlok is not defined

// Percobaan 2:
// console.log(i);
// Error: ReferenceError: i is not defined


//JAWABAN
//1. Dalam
//2. Luar
//3. Global
//4. 85
//5. di dalam blok
//6. putaran 0
//7. putaran 1


console.log(sapa());

function sapa() {
  return "Halo!";
}

console.log(warna);
var warna = "biru";
console.log(warna);

// Percobaan 1:
// console.log(lokasi);
// const lokasi = "Sleman";

// Percobaan 2:
// console.log(salam());
// const salam = function () { return "Hai"; };

//JAWABAN 
// Halo!
// undefined
// biru

function buatPenghitung() {
  let hitungan = 0;

  return function () {
    hitungan++;
    return hitungan;
  };
}

const penghitungA = buatPenghitung();
const penghitungB = buatPenghitung();

console.log(penghitungA());
console.log(penghitungA());
console.log(penghitungA());
console.log(penghitungB());
console.log(penghitungA());

//JAWABAN 
// 1
// 2
// 3
// 1
// 4

//JAWABAN DI KOMENTAR

/*
1. Pada Potongan A:
Tiga console.log(nama) menghasilkan nilai berbeda karena setiap variabel nama berada di scope yang berbeda, yaitu "Dalam", "Luar", dan "Global".
hitung(100) bisa memakai diskonGlobal karena variabel tersebut berada di global scope sehingga bisa diakses dari dalam fungsi.
pesanBlok dan i error di luar blok karena let hanya bisa diakses di dalam blok tempat variabel tersebut dibuat.
*/

/*
2. Pada Potongan B:
sapa() bisa dipanggil sebelum didefinisikan karena function declaration mengalami hoisting.
warna bernilai undefined karena var sudah dideklarasikan, tetapi belum diberi nilai saat dipanggil.
lokasi dan salam error karena const tidak bisa diakses sebelum deklarasinya dijalankan.
*/

/*
3. Pada Potongan C:
penghitungA terus bertambah karena closure membuat fungsi tetap bisa mengakses variabel hitungan meskipun buatPenghitung sudah selesai dijalankan.
penghitungB mulai dari 1 lagi karena setiap pemanggilan buatPenghitung membuat variabel hitungan baru dengan nilai awal 0.
*/


