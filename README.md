# E-Portofolio PPL Mandiri

Website statis (HTML, CSS, JavaScript) untuk menampung E-Portofolio PPL Mandiri.
Tidak perlu instalasi apa pun dan bisa dipasang gratis lewat GitHub Pages.

## Isi folder

| Berkas / folder | Fungsi |
| --- | --- |
| `js/data.js` | **Satu-satunya berkas yang perlu Anda ubah.** Nama, analisis, daftar video, foto, dan artefak ditulis di sini. |
| `assets/foto` | Foto kegiatan dan foto profil |
| `assets/video` | Video dan gambar sampulnya (sudah berisi 2 video) |
| `assets/modul` | Modul ajar (PDF dan Word), cover modul, dan PDF Bab F asesmen. Tambahkan lampiran lain di sini. |
| `index.html`, `css/`, `js/app.js` | Kerangka dan tampilan website. Tidak perlu diubah. |

## Mencoba di komputer sendiri

Klik dua kali `index.html`. Halaman langsung terbuka di browser, tanpa server.

## Memasang di GitHub Pages

1. Masuk ke github.com, lalu pilih **New repository**. Beri nama, misalnya `eportofolio-ppl`, dan pilih **Public**.
2. Di halaman repository, pilih **Add file > Upload files**. Seret seluruh isi folder ini (`index.html`, `css`, `js`, `assets`, `README.md`) ke sana, lalu klik **Commit changes**.
3. Buka **Settings > Pages**. Pada *Source*, pilih **Deploy from a branch**. Pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.
4. Tunggu satu sampai dua menit. Alamat website akan muncul di halaman yang sama:
   `https://NAMA-AKUN-GITHUB.github.io/eportofolio-ppl/`
5. Kirim alamat itu ke dosen pembimbing.

## Mengisi atau mengubah isi

- **Teks:** buka `js/data.js` di GitHub, klik ikon pensil, ubah tulisannya, lalu **Commit changes**. Website ikut berubah dalam satu sampai dua menit.
- **Foto dan modul:** buka folder `assets/foto` atau `assets/modul`, pilih **Add file > Upload files**, lalu tulis nama berkasnya di `data.js`.
- **Artefak dan cover:** taruh PDF dan gambar cover (JPG atau PNG) di `assets/modul`, lalu tambahkan satu blok di kolom `artefak` pada `js/data.js`. Cover tampil di kartu artefak dan bisa diperbesar, sedangkan PDF bisa dibaca langsung di halaman. Modul ajar sudah terpasang di bagian "Rancangan pembelajaran" dan "Materi", dan Bab F asesmen di bagian "Instrumen penilaian".
- **Memindahkan foto atau video ke bagian lain:** potong barisnya dari satu bagian di `data.js`, tempel di bagian tujuan.
- **Video tambahan:** kecilkan dulu sebelum diunggah (satu berkas maksimal 100 MB di GitHub), atau unggah ke YouTube dengan pengaturan *Tidak publik* dan tempel tautannya.
- **Garis waktu "Jejak kegiatan":** diatur di bagian `jejak` pada `data.js`. Tanggal ditulis `TAHUN-BULAN-TANGGAL`.

Kalau foto tidak muncul, biasanya nama berkas di `data.js` tidak sama dengan nama berkas yang diunggah. Perhatikan huruf besar-kecil dan ekstensinya. Website akan menampilkan kotak merah berisi nama berkas yang tidak ditemukan.

## Menambah E-Portofolio berikutnya

Di `js/data.js`, salin seluruh blok `{ id: "ep1", ... }` di dalam `portofolio`, tempel di bawahnya dengan tanda koma, lalu ganti `id`, `judul`, dan isinya. Website dan alamat yang sama bisa dipakai untuk semua tugas.

## Catatan

- Font dimuat dari Google Fonts, jadi perlu internet agar tampilannya sesuai rancangan.
- Batas GitHub: satu berkas maksimal 100 MB, dan satu repository sebaiknya di bawah 1 GB.
