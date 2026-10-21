function hargaBarang(jumlah){
let total = 0;
for(let i=1;i <hargaBarang.length;i++){
    total += jumlah[i]-Ha.harga*jumlah[i].jumlah
} 
return total ;
}

console.log(hargaBarang([
    {nama : "spidol",harga : 2000, jumlah : 1 },
    {nama : "pulpen", harga : 1000, jumlah : 1}
]));





