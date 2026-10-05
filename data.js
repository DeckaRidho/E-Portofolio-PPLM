/* =====================================================================
   BERKAS ISIAN E-PORTOFOLIO
   Semua yang tampil di website diambil dari berkas ini.
   Anda cukup mengubah tulisan di antara tanda kutip "..."
   dan tidak perlu menyentuh berkas lain.

   CARA MENGISI
   ---------------------------------------------------------------------
   analisis : daftar paragraf, tiap paragraf diapit tanda kutip dan
              dipisah koma.
              analisis: ["Paragraf pertama.", "Paragraf kedua."],

   video    : tautan YouTube (atur ke "Tidak publik"), tautan berbagi
              Google Drive, atau berkas mp4 di assets/video.
              poster (opsional) = gambar sampul untuk video mp4.
              video: [
                { judul: "Pertemuan 1", sumber: "assets/video/pertemuan-1.mp4",
                  poster: "assets/video/pertemuan-1.jpg",
                  keterangan: "Kelas XI TPM" }
              ],

   foto     : letakkan gambar di assets/foto, lalu tulis namanya.
              foto: [
                { file: "assets/foto/kelas-1.jpg", keterangan: "Diskusi kelompok" }
              ],

   artefak  : letakkan berkas di assets/modul (PDF paling aman), atau
              pakai tautan Google Drive.
              cover (opsional) = gambar sampul yang tampil di kartu artefak.
              artefak: [
                { judul: "Modul ajar pertemuan 1",
                  file: "assets/modul/modul-ajar-1.pdf",
                  cover: "assets/modul/cover-modul-ajar-1.jpg",
                  keterangan: "Modul ajar yang saya pakai di kelas XI TPM" }
              ]

   Kalau suatu daftar dibiarkan kosong [], website menampilkan slot
   kosong sebagai pengingat bahwa bagian itu belum diisi.
   ===================================================================== */

window.PORTOFOLIO = {

  /* ---------- Identitas ---------- */
  profil: {
    nama: "Decka Ridho Ariraya",
    nim: "",
    prodi: "PPG Teknik Mesin, Universitas Negeri Malang",
    sekolah: "SMK Negeri 6 Malang",
    periode: "",                             // contoh: "Agustus – Desember 2026"
    dpl: "",                                 // dosen pembimbing lapangan
    guruPamong: "",
    foto: "assets/foto/profil.jpg",
    tentang: [
      "PPL Mandiri saya jalani di SMK Negeri 6 Malang. Setiap pekan, saya berada di sekolah dari Senin sampai Rabu, lalu kembali ke kampus pada hari Kamis dan Jumat untuk kuliah.",
      "Selain mengajar, saya juga mengerjakan administrasi dan ikut kegiatan organisasi di sekolah. Halaman ini berisi analisis dan bukti dari semua kegiatan tersebut."
    ]
  },

  /* ---------- Foto besar di bagian atas halaman ---------- */
  hero: {
    foto: "assets/foto/praktik-bubut-membimbing.jpg",
    keterangan: "Praktik mesin bubut di bengkel, 8 September 2026"
  },

  /* ---------- Jejak kegiatan (garis waktu di bawah bagian atas) ----------
     tanggal : tulis dengan format TAHUN-BULAN-TANGGAL
     bagian  : id bagian yang dituju saat kartu diklik
               (rancangan, materi, media, video-praktik, nonmengajar, instrumen)
     Urutan di halaman mengikuti urutan di bawah ini.

     CATATAN: tanggal foto FGD dan foto "menuju pabrik" saya ambil dari
     nama berkas WhatsApp, jadi mungkin berbeda dari tanggal kejadian
     sebenarnya. Mohon dicek dan diperbaiki kalau perlu. */
  jejak: [
    { tanggal: "2026-09-08", judul: "Praktik di mesin bubut",
      keterangan: "Suasana praktik di bengkel pemesinan.",
      file: "assets/foto/praktik-bubut-membimbing.jpg", bagian: "video-praktik" },

    { tanggal: "2026-09-12", judul: "FGD green skills",
      keterangan: "Diskusi tentang kebutuhan industri terhadap lulusan SMK.",
      file: "assets/foto/fgd-green-skills.jpg", bagian: "nonmengajar" },

    { tanggal: "2026-09-15", judul: "Praktik di bengkel TPM",
      keterangan: "Siswa kelas XI TPM bekerja di mesin bubut.",
      file: "assets/foto/praktik-bengkel-tpm.jpg", bagian: "video-praktik" },

    { tanggal: "2026-09-21", judul: "Praktik mengajar direkam",
      keterangan: "Rekaman di ruang praktik komputer.",
      file: "assets/video/praktik-mengajar.jpg", bagian: "video-praktik" },

    { tanggal: "2026-09-21", judul: "Foto bersama di sekolah",
      keterangan: "Bersama rekan PPG di SMK Negeri 6 Malang.",
      file: "assets/foto/foto-bersama-smkn6.jpg", bagian: "nonmengajar" },

    { tanggal: "2026-09-30", judul: "Kunjungan industri",
      keterangan: "Mendampingi 30 siswa kelas XI TPM ke PT Haida Agriculture Indonesia.",
      file: "assets/foto/kunjungan-haida-ruang-pertemuan.jpg", bagian: "nonmengajar" },

    { tanggal: "2026-09-30", judul: "Menuju area pabrik",
      keterangan: "Berjalan kaki ke lokasi kunjungan.",
      file: "assets/foto/kunjungan-haida-menuju-pabrik.jpg", bagian: "nonmengajar" }
  ],

  /* ---------- Daftar E-Portofolio ----------
     Untuk E-Portofolio 2, 3, dan seterusnya: salin seluruh blok
     { id: "ep1", ... } di bawah ini, tempel setelahnya (beri koma),
     lalu ganti id, judul, dan bagian-bagiannya. */
  portofolio: [
    {
      id: "ep1",
      judul: "E-Portofolio 1",
      subjudul: "Praktik mengajar mandiri dan kegiatan nonmengajar",

      bagian: [

        /* 1 */
        {
          id: "rancangan",
          nav: "Rancangan pembelajaran",
          judul: "Analisis rancangan pembelajaran",
          ringkas: "Produk perencanaan yang saya susun untuk praktik mengajar mandiri, seperti modul ajar, alur tujuan pembelajaran, dan perangkat pendukungnya.",
          panduan: [
            "Perangkat apa saja yang saya susun, dan untuk kelas serta mata pelajaran apa?",
            "Bagaimana saya menentukan tujuan pembelajaran dan alur kegiatannya?",
            "Bagian mana dari rancangan yang berjalan sesuai rencana, dan bagian mana yang harus diubah saat di kelas?",
            "Apa masukan Guru Pamong untuk rancangan ini, dan apa yang saya perbaiki?"
          ],
          analisis: [
            "Produk perencanaan yang saya susun adalah modul ajar Dasar-dasar Teknik Mesin (DPK 2) untuk kelas X Teknik Pemesinan semester genap 2026/2027. Modulnya setebal 144 halaman dan berisi informasi umum, kerangka pembelajaran mendalam, CP dan ATP, kalender pertemuan, 22 modul pertemuan, serta asesmen dan lampiran. Acuannya adalah Kepka BSKAP Nomor 046/H/KR/2025 untuk capaian pembelajaran dan kerangka pembelajaran mendalam dari Kemendikdasmen.",
            "Ketujuh elemen CP Fase E terpetakan ke pertemuan pada Bab C. Alur tujuan pembelajarannya berjalan dari gambar teknik (pertemuan 2 sampai 5), perkakas dan pemesinan dasar (6 sampai 10), pengelasan (11 dan 12), teknologi CNC dan 3D printing (13 dan 14), dasar sistem mekanik (15 sampai 19), lalu proyek produk mini (20 sampai 22). Setiap pertemuan punya tiga tujuan pembelajaran dengan kata kerja yang bisa diukur, misalnya menghitung putaran spindel atau mengukur hasil pembubutan dengan jangka sorong. Karena itu ketercapaiannya mudah dicek lewat LKPD dan rubrik.",
            "Semua pertemuan memakai alur yang sama: kegiatan awal, memahami, mengaplikasi, merefleksi, dan penutup, dengan alokasi 6 JP atau 270 menit. Pada pertemuan praktik, porsi terbesar ada di mengaplikasi, yaitu 130 menit pada pertemuan 6, 7, dan 9. Alur yang seragam membuat guru dan murid cepat terbiasa. Sisi lemahnya, pertemuan yang lebih banyak teori, seperti pertemuan 2, memakai pembagian waktu yang hampir sama dengan pertemuan 1 dan bisa terasa kurang pas.",
            "Ada empat hal yang menurut saya paling kuat. Pertama, keselamatan diletakkan di urutan pertama: murid yang belum siap menjalani simulasi atau pengamatan dulu, dan setiap murid boleh menghentikan pekerjaan yang tidak aman. Kedua, benda kerja dipakai ulang, misalnya strip dari pertemuan 6 menjadi sambungan baut di pertemuan 15. Ketiga, diferensiasi ditulis di tiap pertemuan, seperti toleransi 0,1 mm sebagai pengayaan pada bubut dan kartu SOP langkah demi langkah bagi murid yang butuh dukungan. Keempat, proyek produk mini di pertemuan 20 sampai 22 mengikat materi satu semester menjadi satu produk.",
            "Kelemahan yang saya catat ada lima. Pertama, modul mengasumsikan semester ganjil sudah membahas K3 dasar, alat ukur, perkakas tangan, dan pengantar gambar teknik, sehingga bila ATP sekolah berbeda, pertemuan harus ditukar atau dipadatkan. Kedua, alokasi 270 menit hanya cocok bila jadwal memberi blok 6 JP dalam sehari. Ketiga, praktik bergiliran per dua murid bergantung pada jumlah mesin, sedangkan modul belum menyebut berapa mesin yang tersedia; cadangannya berupa stasiun bergilir, simulasi, dan video. Keempat, nilai putaran, arus las, dan torsi baut baru acuan awal dan harus dicocokkan dengan spesifikasi alat. Kelima, rumusan CP ditulis ringkas, jadi untuk dokumen administrasi resmi teksnya harus disalin sesuai lampiran Kepka.",
            "Pemetaan dimensi profil lulusan juga belum merata. Penalaran kritis menjadi fokus di 19 dari 22 pertemuan, sedangkan keimanan dan ketakwaan hanya muncul di pertemuan 1 dan 22, dan kewargaan di pertemuan 11 dan 14. Dimensi yang jarang muncul perlu diselipkan lewat kegiatan awal dan refleksi supaya lebih seimbang."
          ],
          video: [],
          foto: [],
          artefak: [
            { judul: "Modul ajar Dasar-dasar Teknik Mesin (DPK 2), Kelas X Semester Genap 2026/2027",
              file: "assets/modul/modul-ajar-dasar-dasar-teknik-mesin.pdf",
              cover: "assets/modul/cover-modul-ajar.jpg",
              keterangan: "144 halaman: informasi umum, kerangka pembelajaran mendalam, CP dan ATP, 22 modul pertemuan, asesmen, dan lampiran. Penyusun: Decka Ridho Ariraya." },
            { judul: "Modul ajar, versi Word",
              file: "assets/modul/modul-ajar-dasar-dasar-teknik-mesin.docx",
              keterangan: "Berkas asli yang bisa diunduh dan disunting." }
          ]
        },

        /* 2 */
        {
          id: "materi",
          nav: "Materi",
          judul: "Analisis materi pembelajaran",
          ringkas: "Materi yang saya susun dan saya ajarkan selama praktik mengajar mandiri.",
          panduan: [
            "Materi apa yang saya ajarkan, di kelas dan jurusan apa?",
            "Dari mana sumber materinya, dan bagaimana saya menyesuaikannya dengan kemampuan siswa?",
            "Bagian materi mana yang mudah dipahami siswa dan mana yang sulit? Apa buktinya?",
            "Bagaimana materi ini saya kaitkan dengan praktik atau dunia kerja di jurusan siswa?"
          ],
          analisis: [
            "Materi tiap pertemuan ada di bagian D modul dan disusun mengikuti tujuan pembelajarannya. Isinya campuran penjelasan konsep, urutan kerja, tabel, dan contoh hitungan. Pertemuan 9 tentang bubut bisa jadi contoh: ada gambar kerja job poros bertingkat dari Ø25 mm menjadi Ø18 mm, urutan kerja dari persiapan sampai pembersihan mesin, cara membaca ukuran (diameter terukur 18,6 mm dengan target 18,0 mm berarti masih perlu 0,3 mm kedalaman potong per sisi), dan tabel penyebab penyimpangan ukuran beserta pencegahannya.",
            "Urutan materinya dimulai dari gambar teknik, lalu proses produksi, teknologi terkini, sistem mekanik, dan terakhir proyek. Urutan ini masuk akal karena murid belajar membaca dan membuat gambar kerja sebelum membuat benda. Antarmateri juga saling bersambung. Benda D digambar tiga pandangan di pertemuan 3, dibuat isometri dan potongan di pertemuan 4, lalu digambar ulang di CAD pada pertemuan 5. Strip berlubang dari pertemuan 6 dipakai lagi untuk sambungan baut di pertemuan 15, dan hitungan putaran di mesin bor (pertemuan 7) dipakai lagi di mesin bubut (pertemuan 8).",
            "Ketujuh elemen CP tercakup: proses bisnis, teknologi dan isu global, profesi dan kewirausahaan, K3LH, teknik dasar proses produksi, dasar sistem mekanik, dan gambar teknik. Elemen teknik dasar proses produksi mendapat porsi terbesar, yaitu pertemuan 5 sampai 14 dan 21. Elemen proses bisnis manufaktur baru muncul di pertemuan 14 dan 20 sampai 22.",
            "Catatan utama saya adalah kepadatan materi. Pertemuan 5 menggabungkan CAD 2D dengan toleransi, suaian, dan kekasaran permukaan. Pertemuan 10 membahas empat mesin sekaligus (frais, sekrap, gerinda, dan gergaji mesin) lewat stasiun belajar. Pertemuan 13 dan 14 memuat CNC, CAM, kode G, 3D printing, plastic moulding, mould and dies, serta jig and fixture hanya dalam dua pertemuan. Pengelasan pun hanya dua pertemuan, satu teori dan satu praktik jalur las lurus posisi 1F/1G, sehingga kemampuan yang dicapai murid sebatas pengenalan. Pada kelas yang lambat, materi seperti ini perlu dipilah menjadi bagian inti dan pengayaan."
          ],
          video: [],
          foto: [],
          artefak: [
            { judul: "Materi ajar pada modul (bagian D tiap pertemuan)",
              file: "assets/modul/modul-ajar-dasar-dasar-teknik-mesin.pdf",
              cover: "assets/modul/cover-modul-ajar.jpg",
              keterangan: "Materi ajar ada di bagian D pada setiap dari 22 pertemuan, lengkap dengan contoh hitungan dan tabel." }
          ]
        },

        /* 3 */
        {
          id: "media",
          nav: "Media",
          judul: "Analisis media pembelajaran",
          ringkas: "Media yang saya pakai di kelas, misalnya slide, video, lembar kerja, atau alat peraga.",
          panduan: [
            "Media apa yang saya pakai, dan untuk bagian materi yang mana?",
            "Mengapa saya memilih media itu?",
            "Seberapa membantu media itu bagi siswa? Apa yang saya lihat di kelas?",
            "Kendala apa yang muncul (alat, jaringan, waktu), dan bagaimana saya mengatasinya?"
          ],
          analisis: [
            "Media disebut pada bagian sarana dan prasarana serta pemanfaatan digital di tiap pertemuan. Saya mengelompokkannya menjadi tiga. Media cetak dan lembar kerja: LKPD (ada 22, satu per pertemuan), gambar kerja job, kartu SOP, dan kartu urutan bergambar. Media nyata: mesin bor, bubut, mesin las SMAW, kit transmisi, bearing, pipa dan fitting, serta benda kerja baja lunak dan aluminium. Media digital: video demonstrasi dan animasi mesin, kode QR SOP di mesin, CAD 2D, simulator kode G, perangkat lunak slicer, spreadsheet perhitungan, Google Classroom atau LMS, kuis daring, dan kamera ponsel untuk dokumentasi.",
            "Pemilihan media mengikuti prinsip yang tertulis di modul, yaitu teknologi dipakai untuk memperdalam pemahaman dan tidak menggantikan praktik. Video dan animasi dipakai sebelum praktik yang berisiko, simulator kode G memungkinkan murid mencoba pemrograman CNC tanpa mesin, dan kode QR di mesin memberi murid akses ke SOP tepat saat mereka bekerja.",
            "Modul juga menyiapkan cadangan bila media tidak tersedia. Kalau mesin tidak ada, kegiatan diganti simulasi, video, atau demonstrasi guru. Kalau printer 3D tidak ada, materi tetap bisa disampaikan lewat slicer dan analisis parameter cetak.",
            "Yang masih kurang: modul memuat LKPD, rubrik, dan daftar periksa, tetapi video demonstrasi, animasi, slide, dan kartu SOP baru disebut sebagai media yang dipakai dan belum dilampirkan sebagai produk jadi. Sebagian media juga bergantung pada laboratorium komputer, koneksi internet, dan LMS yang aktif. Kalau salah satunya bermasalah, kegiatan yang memakai CAD, simulator, atau kuis daring harus diganti dengan kegiatan manual."
          ],
          video: [],
          foto: [],
          artefak: []
        },

        /* 4 */
        {
          id: "video-praktik",
          nav: "Video praktik mengajar",
          judul: "Analisis video praktik mengajar",
          ringkas: "Rekaman pelaksanaan praktik mengajar mandiri beserta catatan saya setelah menontonnya.",
          panduan: [
            "Bagaimana saya membuka, menjalankan kegiatan inti, dan menutup pelajaran?",
            "Bagaimana cara saya memberi instruksi, bertanya, dan menanggapi jawaban siswa?",
            "Bagaimana saya mengelola kelas, waktu, dan suasana belajar?",
            "Bagian mana yang sudah baik, dan apa yang akan saya ubah di pertemuan berikutnya?"
          ],
          analisis: [],
          video: [
            { judul: "Pelaksanaan praktik mengajar",
              sumber: "assets/video/praktik-mengajar.mp4",
              poster: "assets/video/praktik-mengajar.jpg",
              keterangan: "Rekaman 21 September 2026 di ruang praktik komputer (3 menit 26 detik)." }
          ],
          foto: [
            { file: "assets/foto/praktik-bubut-membimbing.jpg",
              keterangan: "Praktik mesin bubut di bengkel pemesinan, 8 September 2026." },
            { file: "assets/foto/praktik-bengkel-tpm.jpg",
              keterangan: "Suasana praktik kelas XI TPM di bengkel, 15 September 2026." }
          ],
          artefak: []
        },

        /* 5 */
        {
          id: "nonmengajar",
          nav: "Kegiatan nonmengajar",
          judul: "Analisis kegiatan nonmengajar",
          ringkas: "Kegiatan di luar kelas yang saya ikuti selama PPL Mandiri, seperti administrasi sekolah, kunjungan industri, dan keorganisasian.",
          panduan: [
            "Kegiatan apa saja yang saya ikuti, dan apa peran saya di dalamnya?",
            "Apa yang saya pelajari dari kegiatan itu?",
            "Kesulitan apa yang saya hadapi, terutama saat membagi waktu dengan jadwal kuliah?",
            "Apa manfaatnya bagi saya sebagai calon guru?"
          ],
          analisis: [],
          video: [
            { judul: "Penyambutan di PT Haida Agriculture Indonesia",
              sumber: "assets/video/kunjungan-haida.mp4",
              poster: "assets/video/kunjungan-haida.jpg",
              keterangan: "Kunjungan industri bersama siswa kelas XI TPM, 30 September 2026." }
          ],
          foto: [
            { file: "assets/foto/kunjungan-haida-ruang-pertemuan.jpg",
              keterangan: "Ruang pertemuan PT Haida Agriculture Indonesia, 30 September 2026." },
            { file: "assets/foto/kunjungan-haida-menuju-pabrik.jpg",
              keterangan: "Berjalan menuju area pabrik PT Haida." },
            { file: "assets/foto/fgd-green-skills.jpg",
              keterangan: "Focus Group Discussion tentang green skills yang dibutuhkan industri bagi lulusan SMK." },
            { file: "assets/foto/foto-bersama-smkn6.jpg",
              keterangan: "Foto bersama di SMK Negeri 6 Malang, 21 September 2026." }
          ],
          artefak: []
        },

        /* 6 */
        {
          id: "instrumen",
          nav: "Instrumen penilaian",
          judul: "Instrumen penilaian dan analisisnya",
          ringkas: "Instrumen penilaian yang saya rancang, beserta hasil dan analisisnya.",
          panduan: [
            "Instrumen apa yang saya buat (tes tertulis, rubrik praktik, lembar observasi, dan sebagainya)?",
            "Bagaimana instrumen itu berkaitan dengan tujuan pembelajaran?",
            "Bagaimana hasil penilaian siswa, dan apa yang terbaca dari hasil itu?",
            "Tindak lanjut apa yang saya lakukan, misalnya remedial atau pengayaan?"
          ],
          analisis: [
            "Instrumen penilaian ada di Bab F modul dan lampirannya (10 halaman, saya pisahkan sebagai artefak di bawah). Isinya asesmen diagnostik berupa kuis 10 soal dan angket, asesmen formatif berupa LKPD, observasi praktik, daftar periksa K3, exit ticket, dan jurnal, asesmen sumatif per unit berupa gambar kerja, produk praktik, dan laporan, kisi-kisi serta contoh soal UTS dan UAS, rubrik kinerja praktik bengkel, lembar observasi delapan dimensi profil lulusan, kunci jawaban, dan daftar periksa K3 harian.",
            "Komposisi nilai akhir yang saya usulkan adalah 30% formatif harian, 25% sumatif tengah semester, 20% proyek produk mini dan portofolio, dan 25% sumatif akhir semester. Nilai UTS terdiri atas tes tertulis 50% dan kinerja praktik 50%. Nilai UAS terdiri atas tes tertulis 60% serta refleksi dan integrasi 40%. Capaian dibagi empat kategori: mahir (86 sampai 100), cakap (76 sampai 85), berkembang (60 sampai 75), dan perlu bimbingan intensif (di bawah 60), masing-masing dengan tindak lanjut. Murid di bawah 60 mendapat remedial dengan strategi yang berbeda, bukan mengulang cara yang sama.",
            "Rubrik kinerja praktik memakai empat tingkat (mahir, cakap, berkembang, perlu bimbingan) pada enam aspek: K3 dan APD, prosedur kerja, hasil kerja, pengukuran, 5R, dan kolaborasi. Bobot pada LKPD pertemuan 9 menunjukkan arah penilaiannya: proses dan K3 mendapat 35, ukuran dan toleransi 30, analisis dan refleksi 20, kualitas permukaan dan chamfer 15. Murid yang ukurannya tepat tetapi melanggar K3 tidak akan mendapat nilai tinggi, dan itu sesuai dengan prinsip keselamatan yang dipegang modul.",
            "Soal contoh untuk UTS berjumlah 10 pilihan ganda dan 3 uraian, dengan jumlah yang sama untuk UAS. Levelnya C2 sampai C4. Uraiannya dibuat dari situasi nyata, misalnya menyusun rencana pemakanan bubut dari Ø25 mm ke Ø18 mm, menghitung HPP, atau menganalisis murid yang mengelas dengan kabel massa terkelupas di meja basah. Soal seperti ini menuntut penalaran, bukan hafalan.",
            "Kelemahannya ada tiga. Pertama, satu atau dua soal per topik belum cukup mewakili 12 pertemuan untuk UTS, dan pertemuan 10 hanya punya uraian opsional tanpa nomor soal. Kedua, soal contoh belum disertai analisis butir (validitas, tingkat kesukaran, dan daya pembeda), jadi kualitasnya belum teruji. Ketiga, lembar observasi delapan dimensi per murid per unit akan berat diisi di kelas yang besar, sehingga perlu dipilih dimensi yang diamati pada tiap unit."
          ],
          video: [],
          foto: [],
          artefak: [
            { judul: "Bab F: Asesmen, rubrik, kisi-kisi, dan lampiran",
              file: "assets/modul/modul-ajar-bab-f-asesmen-dan-lampiran.pdf",
              keterangan: "Halaman 135 sampai 144 modul: prinsip asesmen, komposisi nilai, rubrik praktik, kisi-kisi dan contoh soal UTS dan UAS, remedial dan pengayaan, kunci jawaban, serta daftar periksa K3." }
          ]
        }

      ]
    }
  ]
};
