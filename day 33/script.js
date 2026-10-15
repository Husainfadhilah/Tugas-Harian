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

