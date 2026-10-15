const produk = { nama: "Kopi Susu", harga: 18000, stok: 10 };

produk.harga = 20000;
produk.kategori = "minuman";
delete produk.stok;
let kunci = "nama";

console.log(produk.nama);
console.log(produk[kunci]);
console.log(produk["harga"]);
console.log(produk.stok);
console.log("kategori" in produk);
console.log("stok" in produk);
console.log(Object.keys(produk));
console.log(Object.values(produk));

//JAWABAN POTONGAN A
//1. Kopi susu
//2. Kopi susu
//3. 20000
//4. Undifined
//5. True
//6. False
//7. nama, harga, kategori
//8. Kopi susu, 2000, minuman

const dompet = {
  pemilik: "Rina",
  saldo: 50000,

  belanja(jumlah) {
    this.saldo -= jumlah;
    return this.saldo;
  },

  cekSaldo() {
    console.log(this.pemilik + ": Rp " + this.saldo);
  },
};

let sisa = dompet.belanja(20000);
console.log(sisa);
dompet.cekSaldo();
dompet.belanja(10000);
dompet.cekSaldo();
console.log(dompet.saldo);

//JAWABAN POTONGAN B
//1. 30000
//2. Rina : Rp 30000
//3. Rina : Rp 20000
//4. 20000


const hari = ["Senin", "Selasa"];

for (let nilai of hari) {
  console.log(nilai);
}

for (let indeks in hari) {
  console.log(indeks);
}

const kopi = { nama: "Kopi", harga: 18000 };

for (let kolom in kopi) {
  console.log(kolom + ": " + kopi[kolom]);
}

for (let huruf of "Kopi") {
  console.log(huruf);
}

//JAWABAN POTONGAN C
//Senin
//Selasa
//0
//1
//nama: Kopi
//harga: 18000
//K
//o
//p
//i

//JAWABAN ESAY
/*
1. Potongan A:
produk.nama digunakan untuk mengambil nilai properti nama secara langsung, sedangkan produk[kunci] mengambil nilai berdasarkan isi variabel kunci. Keduanya menghasilkan "Kopi Susu" karena kunci berisi "nama". produk.stok menghasilkan undefined karena properti stok sudah dihapus menggunakan delete. Operator in menghasilkan true jika properti ada dan false jika tidak ada. Object.keys() mengambil semua nama properti, sedangkan Object.values() mengambil semua nilainya.

2. Potongan B:
dompet.saldo di akhir bernilai 20000 karena saldo awal 50000 dikurangi 20000, lalu dikurangi lagi 10000. Hasil belanja(10000) tidak perlu disimpan ke variabel karena method tersebut langsung mengubah saldo di dalam object. this merujuk pada object dompet yang memanggil method tersebut.

3. Potongan C:
for...of pada array menghasilkan "Senin" dan "Selasa" karena mengambil nilai setiap elemen, sedangkan for...in menghasilkan 0 dan 1 karena mengambil indeks array. for...in pada object kopi mengambil nama properti beserta nilainya melalui kopi[kolom]. for...of pada string "Kopi" menghasilkan huruf satu per satu karena string bisa diiterasi. Namun, for...of pada object kopi secara langsung akan menghasilkan error karena object biasa tidak bisa langsung diiterasi menggunakan for...of.
*/


const warung = {
  nama: "Warung Senja",
  saldoKas: 100000,

  // FIX 1: Tambahkan this agar saldoKas merujuk ke properti object warung.
  tambahKas(jumlah) {
    this.saldoKas += jumlah;
  },

  // FIX 2: Tambahkan return agar sisa saldo dikembalikan.
  ambilKas(jumlah) {
    this.saldoKas -= jumlah;
    return this.saldoKas;
  },
};

warung.tambahKas(50000);
console.log(warung.saldoKas);
console.log(warung.ambilKas(30000));

// Key dengan tanda hubung.
// FIX 3: Gunakan kurung siku karena nama properti mengandung tanda hubung.
const kontak = { "no-wa": "08123" };
console.log(kontak["no-wa"]);

// Hapus kataSandi dari akun.
// FIX 4: Gunakan delete untuk benar-benar menghapus properti.
const akun = { nama: "Rina", kataSandi: "abc123" };
delete akun.kataSandi;
console.log(akun);

// Cetak semua isi array, satu per baris.
// FIX 5: Gunakan for...of agar mengambil nilai array, bukan indeksnya.
const menu = ["Kopi", "Teh", "Roti"];
for (let item of menu) {
  console.log(item);
}

// Cetak semua properti object.
// FIX 6: Gunakan for...in untuk mengambil nama properti object.
const info = { nama: "Warung Senja", kota: "Yogyakarta" };
for (let kolom in info) {
  console.log(kolom + ": " + info[kolom]);
}

// Daftar kunci object.
// FIX 7: Gunakan Object.keys(), bukan Object.key().
console.log(Object.keys(info));

// Jawaban pertanyaan 3:
const akunTes = { nama: "Rina", kataSandi: "abc123" };
akunTes.kataSandi = undefined;
console.log("kataSandi" in akunTes); // true

delete akunTes.kataSandi;
console.log("kataSandi" in akunTes); // false


/*
1. Tujuh kesalahan dan perbaikannya:
- FIX 1: saldoKas tidak menggunakan this sehingga properti object tidak dirujuk dengan benar; perbaikannya menggunakan this.saldoKas.
- FIX 2: ambilKas tidak menggunakan return sehingga sisa saldo tidak dikembalikan; perbaikannya menambahkan return this.saldoKas.
- FIX 3: kontak.no-wa salah karena tanda hubung dianggap sebagai operator; perbaikannya menggunakan kontak["no-wa"].
- FIX 4: kataSandi diberi nilai undefined tetapi propertinya masih ada; perbaikannya menggunakan delete akun.kataSandi.
- FIX 5: for...in mengambil indeks array, bukan nilai; perbaikannya menggunakan for...of.
- FIX 6: for...of tidak dapat digunakan langsung pada object biasa; perbaikannya menggunakan for...in.
- FIX 7: Object.key() salah karena method yang benar adalah Object.keys().

2. Kesalahan yang menyebabkan error adalah kontak.no-wa karena dibaca sebagai operasi pengurangan, for...of pada object info karena object biasa tidak dapat diiterasi langsung, dan Object.key() karena method tersebut tidak tersedia. Kesalahan lain tidak langsung menyebabkan error, tetapi hasilnya salah atau tidak sesuai harapan.

3. akun.kataSandi = undefined hanya mengubah nilai properti menjadi undefined, tetapi propertinya masih ada sehingga "kataSandi" in akun menghasilkan true. Sementara itu, delete akun.kataSandi menghapus properti tersebut sehingga "kataSandi" in akun menghasilkan false.
*/