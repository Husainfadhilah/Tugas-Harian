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

// JAWABAN DI KOMENTAR

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


//LANGKAH 2

// Cek stok. Seharusnya tercetak: Stok aman
const stok = 10;
if (stok > 5) {
  // FIX: Pindahkan console.log ke dalam blok agar pesanStok bisa diakses
  let pesanStok = "Stok aman";
  console.log(pesanStok);
}

// Potongan 10%. Seharusnya tercetak: 45000
function hitungPotongan(harga) {
  const potongan = harga * 0.1;
  return harga - potongan;
}
// FIX: Tampilkan hasil return fungsi, bukan variabel potongan
console.log(hitungPotongan(50000));

// Sambutan. Seharusnya tercetak: Selamat datang di Kedai Senja
// FIX: Panggil fungsi setelah deklarasi karena menggunakan const
const sambutan = function () {
  return "Selamat datang di Kedai Senja";
};
console.log(sambutan());

// Kota. Seharusnya tercetak: Yogyakarta
let kota = "Yogyakarta";
// FIX: Pindahkan console.log setelah deklarasi let
console.log(kota);

// Total awal 100000. Diskon 90000 hanya dipakai di dalam blok.
// Seharusnya setelah blok, total tetap: 100000
let total = 100000;
// FIX: Gunakan let agar total di dalam blok memiliki scope sendiri
if (true) {
  let total = 90000;
}
console.log(total);

// Saldo kas. Seharusnya setelah tambahKas(50000): 150000
let saldoKas = 100000;
function tambahKas(jumlah) {
  // FIX: Hapus variabel saldoKas lokal agar saldoKas global yang ditambah
  saldoKas += jumlah;
}
tambahKas(50000);
console.log(saldoKas);

// Nomor antrean. Seharusnya tercetak: 1 2 3
function buatAntrean() {
  // FIX: Simpan nomor di luar fungsi yang dikembalikan agar nilainya bertahan
  let nomor = 0;
  return function () {
    nomor++;
    return nomor;
  };
}
const ambilNomor = buatAntrean();
console.log(ambilNomor(), ambilNomor(), ambilNomor());

// Dompet. Seharusnya setelah belanja(30000), cekSaldo() mengembalikan: 70000
function buatDompet(saldoAwal) {
  let saldo = saldoAwal;
  return {
    belanja(jumlah) {
      saldo -= jumlah;
    },
    cekSaldo() {
      // FIX: Gunakan variabel saldo dari closure, bukan this.saldo
      return saldo;
    },
  };
}
const dompet = buatDompet(100000);
dompet.belanja(30000);
console.log(dompet.cekSaldo());

//LANGKAH 3


/*
1. Delapan kesalahan dan perbaikannya:

1. pesanStok dibuat dengan let di dalam blok if, jadi console.log harus dipindahkan ke dalam blok if.
2. Hasil hitungPotongan tidak ditampilkan dan variabel potongan tidak bisa diakses dari luar fungsi, jadi gunakan console.log(hitungPotongan(50000)).
3. Fungsi sambutan dipanggil sebelum deklarasi const, jadi pindahkan pemanggilannya setelah deklarasi fungsi.
4. Variabel kota dibaca sebelum deklarasi let, jadi pindahkan console.log(kota) setelah deklarasi.
5. var total di dalam blok mengubah total di luar blok, jadi gunakan let agar total di dalam blok terpisah.
6. saldoKas lokal di dalam tambahKas menutupi saldoKas global, jadi hapus variabel lokal dan ubah saldoKas global.
7. Variabel nomor dibuat ulang setiap fungsi dipanggil, jadi pindahkan let nomor ke luar fungsi yang dikembalikan agar nilainya tetap bertambah.
8. this.saldo tidak ada pada objek dompet, jadi gunakan saldo dari closure agar saldo yang benar dikembalikan.
*/

/*
2. Kesalahan yang menyebabkan error di console:
- Nomor 1: pesanStok tidak bisa diakses di luar blok.
- Nomor 2: potongan tidak bisa diakses dari luar fungsi.
- Nomor 3: sambutan dipanggil sebelum const diinisialisasi.
- Nomor 4: kota diakses sebelum let diinisialisasi.

Kesalahan yang tidak menghasilkan error, tetapi hasilnya salah:
- Nomor 5: total menjadi 90000, bukan 100000.
- Nomor 6: saldoKas luar tetap 100000, bukan 150000.
- Nomor 7: hasilnya 1 1 1, bukan 1 2 3.
- Nomor 8: hasil cekSaldo adalah undefined, bukan 70000.
*/

/*
3. let saldoKas = 0 di dalam tambahKas membuat variabel lokal
yang berbeda dari saldoKas di luar fungsi. Ini disebut shadowing
atau penutupan nama variabel, sehingga saldoKas global tidak berubah.
*/

/*
4. this.saldo menghasilkan undefined karena objek dompet tidak
memiliki properti bernama saldo. Variabel saldo berada di dalam
fungsi buatDompet, bukan sebagai properti objek. Fungsi cekSaldo
bisa mengakses saldo melalui closure dengan mengembalikan saldo.
*/




