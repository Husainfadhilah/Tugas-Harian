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





