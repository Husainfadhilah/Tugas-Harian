Push adalah proses mengirim perubahan dari komputer lokal ke GitHub, sedangkan pull adalah proses mengambil perubahan terbaru dari GitHub ke komputer lokal. Contoh melakukan push adalah ketika kita sudah selesai mengerjakan sebuah fitur dan ingin mengirim hasilnya ke GitHub. Contoh melakukan pull adalah ketika teman satu tim sudah mengunggah perubahan ke GitHub dan kita ingin mendapatkan perubahan tersebut di komputer kita.

2.

Git push berfungsi untuk mengirim perubahan atau commit dari repository lokal ke repository remote seperti GitHub.

a. Opsi -u berfungsi untuk menghubungkan branch lokal dengan branch yang ada di repository remote.

b. Jika opsi -u tidak digunakan pada push pertama, kita biasanya harus menentukan nama remote dan branch tujuan secara manual setiap kali melakukan push sampai hubungan branch tersebut ditetapkan.

c. Setelah opsi -u ditetapkan, Git sudah mengetahui hubungan antara branch lokal dan branch remote sehingga pada push berikutnya kita cukup menggunakan perintah git push.

3.

Git clone digunakan untuk mengambil atau menyalin repository yang sudah ada dari GitHub ke komputer lokal, sedangkan git init digunakan untuk membuat repository Git baru di dalam folder lokal. Setelah melakukan git clone, kita tidak perlu menjalankan git init lagi karena repository hasil clone sudah otomatis menjadi repository Git dan sudah memiliki riwayat serta konfigurasi dari repository asal.

4.

Git pull berfungsi untuk mengambil perubahan terbaru dari repository GitHub dan menggabungkannya ke repository lokal. Perintah ini penting dalam kerja tim karena anggota tim lain mungkin sudah melakukan perubahan dan mengunggahnya ke GitHub. Dengan melakukan pull, kita dapat bekerja menggunakan kode terbaru dan mengurangi kemungkinan konflik.

Dua momen yang sebaiknya melakukan git pull adalah sebelum mulai mengerjakan tugas pada awal hari dan sebelum mengirim perubahan ke GitHub setelah cukup lama tidak memperbarui repository lokal.

5.

Alur kerja harian yang direkomendasikan adalah memperbarui branch utama terlebih dahulu, kemudian mengambil perubahan terbaru dari GitHub, membuat branch baru untuk pekerjaan yang akan dilakukan, mengerjakan perubahan, memeriksa perubahan, memasukkannya ke staging area, membuat commit, kemudian mengirim branch tersebut ke GitHub.

Setiap langkah penting karena memastikan pekerjaan dimulai dari kode terbaru, menjaga branch utama tetap aman, mencatat perubahan dengan jelas, dan membuat hasil pekerjaan tersedia di GitHub untuk diperiksa oleh anggota tim lainnya.

6.

Fork adalah proses membuat salinan sebuah repository GitHub ke akun GitHub milik kita sendiri. Fork biasanya dilakukan ketika ingin berkontribusi pada proyek open source yang tidak memberikan akses langsung untuk melakukan perubahan atau ketika ingin mengembangkan proyek milik orang lain tanpa mengubah repository aslinya.

Perbedaan fork dan clone adalah fork membuat salinan repository dari akun GitHub orang lain ke akun GitHub kita, sedangkan clone menyalin repository dari GitHub ke komputer lokal.

7.

Enam langkah kontribusi proyek open source menggunakan Fork dan Pull Request adalah:

Pertama, melakukan fork repository. Tujuannya adalah membuat salinan repository ke akun GitHub sendiri agar kita dapat melakukan perubahan.

Kedua, melakukan clone repository hasil fork. Tujuannya adalah mengambil repository tersebut ke komputer agar dapat dikerjakan secara lokal.

Ketiga, membuat branch baru. Tujuannya adalah memisahkan pekerjaan atau fitur baru dari branch utama sehingga lebih aman.

Keempat, melakukan perubahan dan membuat commit. Tujuannya adalah mengerjakan perbaikan atau fitur dan menyimpan perubahan tersebut ke dalam riwayat Git.

Kelima, melakukan push branch ke GitHub. Tujuannya adalah mengirim hasil pekerjaan ke repository hasil fork agar dapat dilihat oleh pemilik proyek.

Keenam, membuat Pull Request. Tujuannya adalah mengajukan perubahan kepada pemilik repository asli agar dapat diperiksa dan dipertimbangkan untuk digabungkan ke proyek utama.

8.

Pull Request adalah permintaan untuk menggabungkan perubahan dari sebuah branch ke branch lain, biasanya ke branch utama. Dalam kerja tim, Pull Request digunakan agar perubahan tidak langsung masuk ke branch utama sebelum diperiksa.

Tim profesional menggunakan Pull Request karena perubahan perlu melalui proses review terlebih dahulu. Dua keuntungan PR adalah memungkinkan anggota tim menemukan kesalahan sebelum perubahan digabungkan dan memungkinkan anggota tim memberikan komentar atau saran terhadap kode. PR juga membuat riwayat perubahan menjadi lebih jelas.

9.

a. Kemungkinan besar push Budi akan ditolak karena GitHub sudah memiliki perubahan baru dari Andi yang belum dimiliki oleh Budi.

b. Hal tersebut terjadi karena Budi terakhir melakukan pull kemarin, sedangkan Andi sudah melakukan push perubahan baru pada pagi hari. Repository lokal Budi menjadi tertinggal dari repository di GitHub.

c. Sebelum mulai mengedit file, Budi seharusnya melakukan pull terlebih dahulu agar mendapatkan perubahan terbaru dari Andi.

d. Urutan yang seharusnya dilakukan Budi adalah memperbarui repository lokal dengan melakukan pull, kemudian membuat atau berpindah ke branch pekerjaan, mengedit file style.css, memeriksa perubahan, melakukan staging, membuat commit, dan terakhir melakukan push ke GitHub.

10.

a. Perintah git clone pada baris pertama digunakan untuk mengambil repository proyek milik Andi dari GitHub ke komputer lokal, termasuk file dan riwayat commit yang ada di repository tersebut.

b. Pengguna membuat branch perbaikan-bug agar perubahan yang dibuat untuk memperbaiki bug tidak langsung memengaruhi branch utama. Hal ini membuat branch main tetap aman dan memungkinkan perubahan diperiksa terlebih dahulu sebelum digabungkan.

c. Perintah git push origin perbaikan-bug digunakan untuk mengirim branch perbaikan-bug dari komputer lokal ke repository GitHub pada remote bernama origin. Perintah tersebut digunakan secara lengkap karena branch tersebut belum tentu memiliki hubungan upstream sehingga Git perlu diberi tahu secara jelas tujuan push.

d. Setelah push berhasil, pengguna perlu membuka repository di GitHub, memilih opsi untuk membuat Pull Request, memastikan branch perbaikan-bug akan digabungkan ke branch main, menambahkan judul dan penjelasan perubahan, kemudian mengajukan Pull Request.

e. Jika pemilik repository meminta revisi, pengguna harus kembali memperbaiki kode pada branch yang sama. Setelah selesai melakukan perbaikan, pengguna membuat commit baru dan melakukan push kembali. Perubahan tersebut akan otomatis masuk ke Pull Request yang sama sehingga pemilik repository dapat melakukan review kembali. Jika sudah disetujui, perubahan dapat di-merge ke branch main.