
// Program pencatatan data usaha
// Dibuat oleh rekan sebelumnya

// === LANGKAH 1: PERBAIKAN KODE AWAL ===

const namaUsaha = "Kopi Senja";
const kotaUsaha = "Yogyakarta";

// FIX: Ubah string "2020" menjadi angka 2020 agar bisa dihitung.
const tahunBerdiri = 2020;

const TARIF_PAJAK = 0.11;

// FIX: Tambahkan titik koma agar penulisan konsisten.
let statusBuka = true;

// FIX: Deklarasi website cukup satu kali.
// Variabel yang sudah dideklarasikan dengan let tidak boleh
// dideklarasikan ulang dalam lingkup yang sama.
let website = null;

// Variabel jumlah produk
var jumlahProduk = 3;

let produk = ["Kopi Susu", "Es Teh Manis", "Roti Bakar"];
let hargaProduk = [18000, 7500, 15000];

// FIX: JavaScript membedakan huruf besar dan kecil.
// namaUsaha berbeda dengan namausaha.
console.log(namaUsaha);

// FIX: console harus menggunakan huruf kecil.
// Console dengan huruf C besar tidak dikenali sebagai console bawaan.
console.log("Kota: " + kotaUsaha);

// FIX: tahunBerdiri sudah berupa angka sehingga hasilnya 2021,
// bukan penggabungan teks menjadi "20201".
console.log("Tahun berdiri berikutnya: " + (tahunBerdiri + 1));

// FIX: const tidak boleh diberi nilai baru setelah deklarasi.
// Jika tarif ingin diubah, gunakan variabel let.
// Dalam contoh ini, tarif tetap menggunakan nilai awal 0.11.

// FIX: Operator perkalian JavaScript adalah *,
// bukan huruf x.
let hargaKopiSetelahPajak =
    hargaProduk[0] * (1 + TARIF_PAJAK);

console.log("Harga kopi + pajak: " + hargaKopiSetelahPajak);

// Menghitung harga produk termurah
let hargaTermurah = Math.min(
    hargaProduk[0],
    hargaProduk[1],
    hargaProduk[2]
);

console.log("Termurah: " + hargaTermurah);

// FIX: Indeks array dimulai dari 0.
// produk[3] tidak error, tetapi hasilnya undefined karena
// array hanya mempunyai indeks 0, 1, dan 2.
console.log("Produk ke-3: " + produk[2]);

// FIX: Komentar blok harus ditutup dengan */
// Jika tidak ditutup, bagian setelahnya dianggap sebagai komentar.
console.log("Status buka: " + statusBuka);


// === CATATAN BUG ===

/*
No | Baris/bagian | Jenis | Penyebab | Perbaikan

1 | let website; dan let website = null;
  | Error
  | Variabel website dideklarasikan dua kali menggunakan let.
  | Hapus deklarasi pertama dan gunakan let website = null.

2 | console.log(namausaha)
  | Error
  | Nama variabel salah karena JavaScript membedakan huruf besar
    dan kecil.
  | Gunakan namaUsaha.

3 | Console.log(...)
  | Error
  | Console dengan C besar tidak dikenali sebagai console bawaan.
  | Gunakan console.log.

4 | TARIF_PAJAK = 0.12
  | Error
  | Variabel const tidak bisa diberi nilai baru.
  | Pertahankan nilai awal atau gunakan let jika nilainya perlu berubah.

5 | hargaProduk[0] x (1 + TARIF_PAJAK)
  | Error
  | JavaScript tidak menggunakan huruf x sebagai operator perkalian.
  | Gunakan tanda *.

6 | Komentar blok terakhir tidak ditutup.
  | Error
  | Tidak ada penutup komentar blok */
//| Tutup komentar dengan */ atau hapus pembuka komentar jika tidak diperlukan.

// 7 | tahunBerdiri = "2020"
//   | Tidak error, tetapi hasilnya salah.
//   | Nilainya berupa string sehingga "2020" + 1 menghasilkan "20201".
//   | Gunakan angka 2020.

// 8 | produk[3]
//   | Tidak error, tetapi hasilnya salah.
//   | Indeks ke-3 tidak tersedia karena array memiliki tiga produk.
//   | Gunakan produk[2] untuk produk ketiga.

// 9 | statusBuka = true
//   | Tidak error.
//   | Kode tetap berjalan meskipun titik koma tidak ditulis.
//   | Tambahkan titik koma agar konsisten.
// */


// === JAWABAN PERTANYAAN ===

/*
1. Mengapa namausaha dan namaUsaha berbeda?
   Karena JavaScript bersifat case-sensitive, sehingga huruf besar
   dan huruf kecil dianggap berbeda.

2. Mengapa TARIF_PAJAK ditolak, sedangkan statusBuka boleh diubah?
   TARIF_PAJAK menggunakan const sehingga nilainya tidak bisa
   ditetapkan ulang. statusBuka menggunakan let sehingga nilainya
   boleh diubah.

3. Mengapa "2020" + 1 menghasilkan "20201"?
   Karena "2020" adalah string. Operator + menggabungkan string
   dengan angka menjadi teks "20201". Perbaikannya adalah mengubah
   tahunBerdiri menjadi angka 2020 agar hasil penjumlahan menjadi 2021.
*/

// LANGKAH 2: MEMBUAT OBJECT DAN ARRAY

const usaha = {
    nama: "Kopi Tubruk",
    pemilik: "Ibu Rina",
    kota: "Yogyakarta",
    tahunBerdiri: 2020,
    statusBuka: true,
    nomorWhatsApp: "08123456789",
    website: null
};

const daftarProduk = [
    { nama: "Kopi Susu", harga: 18000 },
    { nama: "Es Teh Manis", harga: 7500 },
    { nama: "Roti Bakar", harga: 15000 },
    { nama: "Cokelat Panas", harga: 12000 }
];

// Notasi titik digunakan untuk mengakses properti object.
console.log(usaha.nama);

// Kurung siku juga bisa mengakses properti object.
console.log(usaha["kota"]);

// Indeks array dimulai dari 0.
console.log(daftarProduk[0]);
console.log(daftarProduk[daftarProduk.length - 1]);

// === JAWABAN LANGKAH 2 ===

/*
1. Nomor WhatsApp lebih tepat disimpan sebagai string karena angka
   0 di depan harus tetap ada dan nomornya tidak untuk dihitung.

2. null menunjukkan website sengaja belum memiliki nilai. undefined
   biasanya muncul ketika nilai belum diberikan atau properti tidak ada.

3. daftarProduk[4] tidak berisi produk kelima karena indeks yang tersedia
   hanya 0 sampai 3. Hasilnya undefined.
*/
