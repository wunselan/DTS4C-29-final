# DTS REA4 Final Project

Ketentuan lengkap bisa dilihat di [Final Project Guidelines](https://docs.google.com/document/d/122KyWNQ4xxU4aFwWbM4vIfH7LM4AH2CZEZa3YsEHjCk). 

## Daftar pair

Tugas dikerjakan secara berpasangan, untuk daftar kelompok bisa dilihat pada masing-masing Classroom atau Discord Class.

## Fork and Clone

Mohon perwakilan dari pair bisa melakukan fork repo ini dan clone, untuk repositori yang di fork menggunakan penamaan:

`dts4[a/b/c]-[nomor pair]-final`

Contoh: `dts4a-01-final`

## Branching, commit

Branch dapat sesuai dengan kebutuhan dan kesepakatan bersama dalam pair, namun hasil akhirnya harus di merge ke branch `main` dan di push ke Github. Pastikan hasil akhir kode sudah ter-push!

Masukkan hal berikut ke dalam README.md project kalian:
    Video dokumentasi (semua fitur aplikasi) berdurasi kurang dari 60 detik dan di convert dalam bentuk GIF
    https://user-images.githubusercontent.com/17670188/198174751-fc2558ea-9781-4026-b9ce-b7bd17179501.mp4

    Link live app
    - http://wunsprim-news.herokuapp.com/login

    Penjelasan terkait project kalian, API, fitur unik
    - 1. Login
    Pada login kami menggunakan firebase sign with email dan password, lalu untuk response token disimpan di localstorage

    2. Register
    Pada register kami menggunakan firebase, dimana jika register berhasil maka akan otomatis pindah ke halaman login

    3. Homepage
    Pada homepage akan menampilkan beberapa informasi seperti jumlah berita, jumlah user yang bergabung (untuk ini belum ada logic), 3 card berita terbaru dan 3 card berita populer. Untuk homepage hanya user yang sudah login yang dapat mengakses, jika pengguna terdetect belum melakukan login maka pengguna akan diarahkan secara otomatis ke halaman login

    4. Daftar berita
    Pada daftar berita akan menampilkan seluruh berita (kurang pagination), filter kategori berita dan search berita. Untuk api yang digunakan yaitu api dari mediastack.com

    5. Tentang kami
    Pada halaman tentang kami akan menampilkan informasi data creators

    6. Fitur unik
    Fitur unik yang saya masukkan yaitu filter berita dan pencarian berita berdasarkan keyword

    7. Responsive view
    Halaman-halaman yang ditampilkan sudah dapat responsive dari ukuran besar ke kecil (dapat dilihat dari video)

    8. Logout
    Pada fitur ini pengguna akan terlogout dan otomatis pindah ke halaman login kembali
