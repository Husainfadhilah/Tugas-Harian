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

//TUGAS PEMBUATAN KASIR
// ============================================================
// LANGKAH 3: Bikin Kasir Sendiri
// (tempel bagian ini di paling bawah file, setelah Langkah 1 dan 2)
// ============================================================

const kasirKedai = {
  nama: "Kedai Senja",
  kota: "Yogyakarta",
  saldoKas: 0,
  jamOperasional: { buka: "08:00", tutup: "21:00" },
  menu: [
    { nama: "Kopi Susu", kategori: "minuman", harga: 18000, stok: 10 },
    { nama: "Teh Tarik", kategori: "minuman", harga: 15000, stok: 8 },
    { nama: "Roti Bakar", kategori: "makanan", harga: 22000, stok: 6 },
    { nama: "Nasi Goreng", kategori: "makanan", harga: 28000, stok: 5 },
    { nama: "Pisang Goreng", kategori: "camilan", harga: 12000, stok: 12 },
    { nama: "Es Jeruk", kategori: "minuman", harga: 10000, stok: 10 },
  ],
  keranjang: [],

  // Mencari harga menu. Mengembalikan 0 jika tidak ketemu.
  cariHarga(namaMenu) {
    for (const item of this.menu) {
      if (item.nama === namaMenu) {
        return item.harga;
      }
    }
    return 0;
  },

  // Menambah ke keranjang jika menu ada dan stok cukup.
  tambahKeKeranjang(namaMenu, jumlah) {
    for (const item of this.menu) {
      if (item.nama === namaMenu) {
        if (item.stok >= jumlah) {
          this.keranjang.push({ nama: namaMenu, jumlah: jumlah });
          item.stok -= jumlah;
          return true;
        }
        return false; // menu ada, tapi stok tidak cukup
      }
    }
    return false; // menu tidak ditemukan
  },

  // Menghitung subtotal seluruh isi keranjang.
  hitungSubtotal() {
    let subtotal = 0;
    for (const item of this.keranjang) {
      subtotal += this.cariHarga(item.nama) * item.jumlah;
    }
    return subtotal;
  },

  // Mengembalikan BESAR diskon (dalam rupiah), bukan persennya.
  hitungDiskon(subtotal) {
    if (subtotal >= 100000) return subtotal * 0.15;
    if (subtotal >= 50000) return subtotal * 0.1;
    if (subtotal >= 25000) return subtotal * 0.05;
    return 0;
  },

  // Mencetak struk, lalu menambahkan total ke saldoKas.
  cetakStruk() {
    const rp = (angka) => "Rp " + angka.toLocaleString("id-ID");
    const subtotal = this.hitungSubtotal();
    const diskon = this.hitungDiskon(subtotal);
    const setelahDiskon = subtotal - diskon;
    const pajak = setelahDiskon * 0.11;
    const total = setelahDiskon + pajak;

    console.log("=================================");
    console.log("        " + this.nama.toUpperCase());
    console.log("        " + this.kota);
    console.log("=================================");

    let nomor = 1;
    for (const item of this.keranjang) {
      const harga = this.cariHarga(item.nama);
      console.log(`${nomor}. ${item.nama} x${item.jumlah} @ ${rp(harga)} = ${rp(harga * item.jumlah)}`);
      nomor++;
    }

    console.log("---------------------------------");
    console.log("Subtotal : " + rp(subtotal));
    console.log("Diskon   : " + rp(diskon));
    console.log("Pajak 11%: " + rp(pajak));
    console.log("Total    : " + rp(total));
    console.log("=================================");

    this.saldoKas += total;
  },
};

// ------------------------------------------------------------
// 7. Properti dinamis (bracket notation)
// ------------------------------------------------------------
const namaPropertiBaru = "website";
kasirKedai[namaPropertiBaru] = "https://kedaisenja.example";
console.log("Ada 'website' setelah ditambah?", namaPropertiBaru in kasirKedai); // true
delete kasirKedai[namaPropertiBaru];
console.log("Ada 'website' setelah dihapus?", namaPropertiBaru in kasirKedai); // false

// ------------------------------------------------------------
// 8. for...in
// ------------------------------------------------------------
console.log("--- jamOperasional ---");
for (const kunci in kasirKedai.jamOperasional) {
  console.log(kunci + ": " + kasirKedai.jamOperasional[kunci]);
}
console.log("--- menu[0] ---");
for (const kunci in kasirKedai.menu[0]) {
  console.log(kunci + ": " + kasirKedai.menu[0][kunci]);
}

// ------------------------------------------------------------
// 9. Object.keys dan Object.values
// ------------------------------------------------------------
console.log(Object.keys(kasirKedai.jamOperasional)); // [ 'buka', 'tutup' ]
console.log(Object.values(kasirKedai.jamOperasional)); // [ '08:00', '21:00' ]

// ------------------------------------------------------------
// 10. Hitung huruf "a" di nama kedai (for...of pada string)
// ------------------------------------------------------------
let jumlahA = 0;
for (const huruf of kasirKedai.nama) {
  if (huruf === "a") {
    jumlahA++;
  }
}
console.log('Huruf "a" di "' + kasirKedai.nama + '":', jumlahA); // 2

// ------------------------------------------------------------
// 11. Uji skenario
// ------------------------------------------------------------

// Skenario 1: Kopi Susu x2, Roti Bakar x1  (diskon 10%)
kasirKedai.tambahKeKeranjang("Kopi Susu", 2);
kasirKedai.tambahKeKeranjang("Roti Bakar", 1);
kasirKedai.cetakStruk();
// Hasil struk:
// Subtotal : Rp 58.000
// Diskon   : Rp 5.800   (10%)
// Pajak    : Rp 5.742   (11% dari 52.200)
// Total    : Rp 57.942
kasirKedai.keranjang = []; // kosongkan keranjang untuk pelanggan berikutnya

// Skenario 2: Nasi Goreng x3, Teh Tarik x2  (diskon 15%)
kasirKedai.tambahKeKeranjang("Nasi Goreng", 3);
kasirKedai.tambahKeKeranjang("Teh Tarik", 2);
kasirKedai.cetakStruk();
// Hasil struk:
// Subtotal : Rp 114.000
// Diskon   : Rp 17.100  (15%)
// Pajak    : Rp 10.659  (11% dari 96.900)
// Total    : Rp 107.559
kasirKedai.keranjang = [];

// Kasus gagal
console.log(kasirKedai.tambahKeKeranjang("Sate Ayam", 1)); // false (menu tidak ada)
console.log(kasirKedai.tambahKeKeranjang("Es Jeruk", 99)); // false (jumlah melebihi stok 10)

console.log("Saldo kas:", kasirKedai.saldoKas); // 165501 (57.942 + 107.559)

// ------------------------------------------------------------
// Bukti: kenapa harus this.saldoKas, bukan saldoKas
// ------------------------------------------------------------
try {
  const percobaan = {
    saldoKas: 500,
    tanpaThis() {
      return saldoKas; // tanpa "this"
    },
  };
  percobaan.tanpaThis();
} catch (e) {
  console.log(e.name + ": " + e.message);
}
// Baris percobaan langsung (dijadikan komentar karena akan menghentikan program):
// console.log(saldoKas);
// Pesan error: ReferenceError: saldoKas is not defined

// Bukti: for...of pada object biasa
try {
  for (const x of kasirKedai) {
    console.log(x);
  }
} catch (e) {
  console.log(e.name + ": " + e.message);
}
// Pesan error: TypeError: kasirKedai is not iterable


//JAWABAN

// 1. Beda dot notation dan bracket notation
//    - Dot notation: nama properti ditulis langsung setelah titik.
//      Contoh dari kodeku: kasirKedai.nama, kasirKedai.jamOperasional.buka
//    - Bracket notation: nama properti ditulis sebagai string/ekspresi di dalam [ ].
//      Contoh dari kodeku: kasirKedai[namaPropertiBaru] dan
//      kasirKedai.menu[0][kunci] (di dalam for...in).
//    Bracket notation WAJIB dipakai ketika:
//      a) nama properti disimpan di dalam variabel (dinamis). Kalau ditulis
//         kasirKedai.namaPropertiBaru, JavaScript mencari properti bernama
//         harfiah "namaPropertiBaru", bukan isi variabelnya "website".
//      b) nama properti mengandung spasi atau karakter khusus, mis. obj["nama menu"].
//      c) nama properti berupa angka atau hasil hitungan, mis. obj[1].

// 2. Kenapa this.saldoKas, bukan saldoKas?
//    saldoKas adalah properti milik object kasirKedai, bukan variabel biasa.
//    "this" di dalam method menunjuk ke object pemanggil (kasirKedai), sehingga
//    this.saldoKas berarti "saldoKas milik object ini". Tanpa "this", JavaScript
//    mencari variabel bernama saldoKas di scope function/global, dan tidak
//    menemukannya.
//    Buktinya ada di bagian try/catch di atas. Pesan errornya:
//    ReferenceError: saldoKas is not defined

// 3. Beda for...of dan for...in
//    - for...of mengulang NILAI dari objek yang iterable (array, string, dst).
//    - for...in mengulang NAMA PROPERTI (kunci) dari sebuah object.
//    Pemakaian for...of di kodeku: for (const item of this.menu) di cariHarga,
//    dan for (const huruf of kasirKedai.nama) saat menghitung huruf "a".
//    Pemakaian for...in di kodeku: for (const kunci in kasirKedai.jamOperasional).
//    Tidak bisa ditukar: jamOperasional adalah object biasa (tidak iterable),
//    jadi for...of akan error. Sebaliknya, kalau for...in dipakai pada array menu
//    kita hanya mendapat indeks ("0", "1", ...) berupa string, bukan data menunya.

// 4. Kenapa for...of pada kasirKedai (object) error, sedangkan string dan array tidak?
//    for...of hanya bisa dipakai pada objek iterable, yaitu yang punya method
//    [Symbol.iterator]. Array dan string punya, object biasa tidak.
//    Pesan error: TypeError: kasirKedai is not iterable

// 5. Beda Object.keys dan Object.values
//    Object.keys mengembalikan array berisi nama properti (kunci),
//    Object.values mengembalikan array berisi nilai-nilainya.
//    Dari kodeku:
//      Object.keys(kasirKedai.jamOperasional)   -> [ 'buka', 'tutup' ]
//      Object.values(kasirKedai.jamOperasional) -> [ '08:00', '21:00' ]

// 6. Kenapa cariHarga dan hitungSubtotal harus return, sedangkan cetakStruk boleh tidak?
//    cariHarga dan hitungSubtotal menghasilkan NILAI yang dipakai method lain:
//    hitungSubtotal memanggil this.cariHarga(...), dan cetakStruk memakai hasil
//    hitungSubtotal. Tanpa return, nilainya tidak keluar dari method.
//    cetakStruk tugasnya hanya melakukan aksi (mencetak ke konsol dan menambah
//    saldoKas), tidak ada hasil yang perlu dipakai pihak lain.
//    Jika hitungSubtotal hanya memakai console.log, angkanya tampil di layar tetapi
//    method mengembalikan undefined. Akibatnya, const subtotal = this.hitungSubtotal()
//    berisi undefined, sehingga hitungDiskon(undefined) dan perhitungan pajak/total
//    menghasilkan NaN. Struk jadi rusak dan saldoKas ikut menjadi NaN.

