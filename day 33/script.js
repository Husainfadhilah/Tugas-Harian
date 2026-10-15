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