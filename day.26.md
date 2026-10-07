1. Mengapa Merge Conflict bisa terjadi?

Merge Conflict terjadi ketika Git tidak dapat menentukan perubahan mana yang harus digunakan saat dua branch digabungkan. Konflik dapat terjadi ketika dua orang mengubah baris yang sama pada file yang sama atau ketika dua branch mengubah bagian yang sama dengan isi yang berbeda. Contohnya, Andi mengubah warna judul menjadi merah, sedangkan Budi mengubah judul yang sama menjadi biru. Ketika perubahan tersebut digabungkan, Git tidak dapat menentukan warna mana yang harus digunakan sehingga terjadi Merge Conflict.

2. Penanda Merge Conflict

a. Penanda HEAD menunjukkan awal perubahan dari branch yang sedang aktif. Tanda sama dengan digunakan sebagai pemisah antara perubahan dari branch aktif dan perubahan dari branch yang akan digabungkan. Penanda branch-teman menunjukkan akhir perubahan yang berasal dari branch yang sedang digabungkan.

b. Versi branch aktif adalah baris yang berada di antara penanda HEAD dan tanda pemisah.

c. Versi branch yang datang adalah baris yang berada di antara tanda pemisah dan penanda branch-teman.

3. Cara menyelesaikan Merge Conflict

Melalui Visual Studio Code: buka file yang mengalami konflik, periksa bagian yang ditandai oleh VS Code, kemudian pilih perubahan yang ingin digunakan. Setelah itu, periksa kembali hasil akhirnya, hapus semua tanda konflik jika masih ada, lalu simpan file dan lanjutkan dengan proses Git.

Melalui editor teks manual: buka file yang mengalami konflik, cari bagian yang memiliki tanda konflik, tentukan perubahan yang ingin dipertahankan, hapus perubahan yang tidak diperlukan dan semua tanda konflik, kemudian simpan file dan lanjutkan proses Git.

VS Code direkomendasikan untuk pemula karena memberikan tampilan visual yang jelas dan menyediakan pilihan untuk menerima perubahan dari branch aktif, branch lain, atau keduanya. Hal tersebut membuat proses penyelesaian konflik lebih mudah dipahami dan mengurangi kemungkinan kesalahan.

4. Setelah conflict diselesaikan

Setelah semua konflik diselesaikan, pertama jalankan perintah untuk memasukkan file yang sudah diperbaiki ke staging area. Setelah itu lakukan commit untuk mencatat hasil penyelesaian konflik ke dalam riwayat Git. Terakhir, periksa status repository untuk memastikan tidak ada konflik atau perubahan yang belum ditangani.

5. Fungsi git merge --abort

Perintah git merge --abort berfungsi untuk membatalkan proses merge yang sedang berlangsung dan mengembalikan repository ke kondisi sebelum merge dimulai. Perintah ini sebaiknya digunakan ketika konflik terlalu banyak atau proses merge ternyata dilakukan secara tidak sengaja sehingga lebih baik dibatalkan daripada menyelesaikan konflik satu per satu.

6. Praktik terbaik untuk mengurangi Merge Conflict
Sering melakukan pull, karena perubahan terbaru dari anggota tim akan segera diketahui sehingga perbedaan antarbranch tidak terlalu jauh.
Menggunakan branch untuk setiap fitur atau tugas, karena pekerjaan setiap anggota tim menjadi lebih terpisah dan terorganisir.
Tidak terlalu lama membiarkan branch tidak digabungkan, karena semakin lama sebuah branch tidak diperbarui, semakin banyak kemungkinan perubahan yang berbeda dengan branch utama.
Menghindari mengedit bagian yang sama secara bersamaan, karena perubahan pada bagian yang sama memiliki kemungkinan lebih besar menyebabkan konflik.
Membuat commit yang kecil dan jelas, karena perubahan yang kecil lebih mudah diperiksa, dipahami, dan digabungkan.
7. Pentingnya pesan commit yang jelas

Pesan commit yang jelas penting karena membantu developer mengetahui perubahan apa yang dilakukan tanpa harus memeriksa seluruh isi kode. Pesan commit yang buruk contohnya adalah “update”, “fix”, dan “perbaikan”. Pesan commit yang baik contohnya adalah “menambahkan halaman login”, “memperbaiki tombol login yang tidak berfungsi”, dan “memperbaiki tampilan navbar pada perangkat mobile”.

8. Format Conventional Commits

Format Conventional Commits terdiri dari tipe perubahan yang diikuti oleh deskripsi perubahan. Beberapa tipe yang umum digunakan adalah feat untuk menambahkan fitur baru, fix untuk memperbaiki bug, docs untuk perubahan dokumentasi, dan style untuk perubahan tampilan atau format kode yang tidak mengubah fungsi program.

Contohnya, tipe feat digunakan untuk menjelaskan penambahan fitur pencarian produk. Tipe fix digunakan untuk menjelaskan perbaikan tombol login yang tidak berfungsi. Tipe docs digunakan untuk menjelaskan pembaruan dokumentasi. Tipe style digunakan untuk menjelaskan perbaikan tampilan navbar.

9. Pesan commit yang paling baik

Pesan commit yang paling baik adalah “feat: menambahkan fitur pencarian produk di navbar”. Pesan tersebut paling baik karena menggunakan format Conventional Commits, menjelaskan bahwa perubahan tersebut merupakan fitur baru, dan menjelaskan fitur yang ditambahkan secara spesifik. Pesan “update” terlalu umum, sedangkan “fix bug tombol” memang lebih jelas tetapi belum menggunakan format Conventional Commits dan masih kurang spesifik.

10. Fungsi file .gitignore

File .gitignore berfungsi untuk menentukan file atau folder yang tidak perlu dimasukkan ke repository Git. Contohnya adalah file yang berisi password atau API key karena berisi informasi rahasia, folder node_modules karena ukurannya besar dan dapat dibuat kembali melalui package manager, file hasil build jika tidak diperlukan dalam repository, serta file sementara dan cache karena tidak diperlukan dalam source code dan hanya membuat repository menjadi lebih besar.

11. Penamaan branch

Format penamaan branch yang direkomendasikan biasanya menggunakan jenis pekerjaan kemudian nama perubahan, misalnya feature/login-page, feature/search-product, dan fix/navbar-mobile. Format tersebut lebih baik karena nama branch langsung menunjukkan tujuan branch, lebih mudah dibaca, lebih mudah dicari, dan membuat repository lebih terorganisir.

12. Peran HTML, CSS, dan JavaScript

HTML berfungsi sebagai struktur atau kerangka website, seperti membuat judul, paragraf, gambar, tombol, dan form. CSS berfungsi mengatur tampilan website, seperti warna, ukuran, posisi, jarak, font, dan tampilan responsive. JavaScript berfungsi membuat website menjadi interaktif, seperti membuat tombol dapat melakukan tindakan, membuat validasi form, membuat pencarian, dan mengatur berbagai perilaku website.

Sederhananya, HTML adalah kerangka, CSS adalah tampilan, dan JavaScript adalah perilaku atau interaksi website.

13. Dua lingkungan JavaScript

JavaScript dapat dijalankan di browser, seperti Google Chrome, Firefox, dan Microsoft Edge. Di browser, JavaScript banyak digunakan untuk membuat halaman website menjadi interaktif.

JavaScript juga dapat dijalankan menggunakan Node.js. Node.js memungkinkan JavaScript berjalan di luar browser dan dapat digunakan untuk membuat backend, server, menjalankan tools, serta berbagai kebutuhan pengembangan aplikasi.

14. Perbedaan JavaScript dan ECMAScript

JavaScript adalah bahasa pemrograman yang digunakan oleh developer, sedangkan ECMAScript adalah standar atau spesifikasi yang menentukan aturan dan fitur yang digunakan dalam perkembangan JavaScript.

Sederhananya, ECMAScript adalah standar atau aturan, sedangkan JavaScript adalah bahasa yang menerapkan standar tersebut.

Sebagai contoh, JavaScript zaman dahulu banyak menggunakan cara lama dalam membuat variabel, sedangkan JavaScript modern menggunakan fitur yang diperkenalkan melalui ECMAScript versi baru seperti penggunaan let dan const. ECMAScript 2015 atau ES6 menjadi salah satu versi penting karena memperkenalkan banyak fitur modern yang sampai sekarang banyak digunakan dalam pengembangan JavaScript.