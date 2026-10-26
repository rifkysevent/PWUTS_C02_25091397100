# Kafe-in
Website Kafe-in merupakan proyek Ujian Tengah Semester (UTS) mata kuliah **Pemrograman Web**. Website ini mengangkat tema katalog dan pemesanan menu kafe dengan tampilan sederhana yang responsif.

## Deskripsi Proyek
Kafe-in memungkinkan pengguna melihat daftar menu, mencari produk, menyaring menu berdasarkan kategori, menambahkan produk ke keranjang, mengatur jumlah pesanan, dan mengisi formulir checkout. Proyek dibuat menggunakan HTML, CSS, JavaScript, dan jQuery.

## Fitur
- **Beranda:** menampilkan banner, kolom pencarian, kategori menu, dan daftar produk.
- **Pencarian menu:** mencari produk berdasarkan nama.
- **Filter kategori:** menampilkan semua menu atau menyaring menu berdasarkan kategori Kopi, Non Kopi, dan Snack.
- **Keranjang:** menambahkan produk, mengubah jumlah produk, menghapus produk saat jumlahnya menjadi nol, dan menghitung total belanja.
- **Checkout:** menyediakan formulir data pelanggan berupa nama, nomor telepon, nomor meja, dan catatan pesanan.
- **Validasi formulir:** memeriksa keranjang, nama pelanggan, format nomor telepon, dan nomor meja sebelum menampilkan konfirmasi simulasi pemesanan.
- **Navigasi dengan Ajax:** konten halaman dimuat ke area utama tanpa memuat ulang seluruh halaman.
- **Navigasi bawah:** menyediakan menu Beranda, Riwayat, dan Ulasan.

## Teknologi yang Digunakan
- HTML5 untuk struktur halaman.
- CSS3 untuk tampilan dan responsivitas.
- JavaScript untuk logika interaksi dan validasi.
- jQuery untuk event handling dan pemuatan halaman menggunakan Ajax.
- Font Awesome untuk ikon antarmuka.

## Struktur Folder
```text
Kafe-In/
├── index.html
├── README.md
├── aset/
│   ├── Gambar.png
│   ├── latte.jpg
│   ├── matcha.jpg
│   └── croissant.jpg
├── css/
│   └── style.css
├── js/
│   └── script.js
└── pages/
    ├── home.html
    ├── keranjang.html
    ├── checkout.html
    ├── history.html
    └── riview.html
```

## Cara Menjalankan
1. Unduh atau clone repository proyek.
2. Buka folder `Kafe-In` menggunakan Visual Studio Code.
3. Jalankan `index.html` menggunakan ekstensi **Live Server**.
4. Gunakan navigasi pada bagian bawah untuk membuka halaman yang tersedia.
5. Pada Beranda, coba pencarian menu dan filter kategori.
6. Tekan tombol tambah pada produk untuk memasukkannya ke keranjang.
7. Buka keranjang, ubah jumlah pesanan jika diperlukan, lalu lanjutkan ke checkout.
8. Isi formulir checkout untuk mencoba validasi pemesanan.

## Catatan Penggunaan
- Data keranjang disimpan sementara di memori JavaScript dan akan kembali kosong saat halaman dimuat ulang.
- Proses checkout pada versi ini merupakan simulasi antarmuka dan validasi. Data pesanan belum dikirim atau disimpan ke server maupun database.
- File halaman Riwayat dan Ulasan tersedia sebagai bagian navigasi; isi dan fungsinya dapat dikembangkan lebih lanjut.

## Kesesuaian dengan Ketentuan UTS
Proyek ini disusun dengan mengacu pada ketentuan UTS Pemrograman Web, yaitu penggunaan `index.html` sebagai layout utama, HTML/CSS/JavaScript atau jQuery, pemuatan halaman konten dengan Ajax, halaman interaktif, serta formulir transaksi yang dilengkapi validasi JavaScript/jQuery.