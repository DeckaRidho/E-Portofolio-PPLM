(function () {
  "use strict";

  const D = window.PORTOFOLIO || {};
  const profil = D.profil || {};
  const hero = D.hero || {};
  const jejak = D.jejak || [];
  const daftar = D.portofolio || [];

  /* ---------- Pembantu ---------- */
  function h(tag, props, kids) {
    const n = document.createElement(tag);
    Object.keys(props || {}).forEach(function (k) {
      const v = props[k];
      if (k === "class") n.className = v;
      else if (k === "text") n.textContent = v;
      else if (k.slice(0, 2) === "on") n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v);
    });
    (kids || []).forEach(function (c) {
      if (c == null) return;
      n.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return n;
  }

  function ada(arr) {
    return Array.isArray(arr) && arr.some(function (x) { return x && String(x).trim() !== ""; });
  }

  function lokal(path) { return !/^https?:\/\//i.test(path); }

  function jenisBerkas(path) {
    const bersih = String(path || "").split("?")[0].split("#")[0];
    const m = bersih.match(/\.([a-z0-9]+)$/i);
    if (m) return m[1].toLowerCase();
    if (/docs\.google\.com\/document/i.test(path)) return "doc";
    if (/docs\.google\.com\/presentation/i.test(path)) return "ppt";
    if (/docs\.google\.com\/spreadsheets/i.test(path)) return "xls";
    if (/drive\.google\.com/i.test(path)) return "drive";
    return "web";
  }

  function tanggalPendek(iso) {
    const d = new Date(iso + "T00:00:00");
    if (isNaN(d)) return { hari: "", bulan: iso };
    return {
      hari: String(d.getDate()),
      bulan: d.toLocaleDateString("id-ID", { month: "short" }) + " " + d.getFullYear()
    };
  }

  /* ---------- Slot kosong ---------- */
  function slot(judul, petunjuk, kelas) {
    return h("div", { class: "slot " + (kelas || "") }, [
      h("p", { class: "slot-judul", text: judul }),
      petunjuk ? h("p", { class: "slot-petunjuk", text: petunjuk }) : null
    ]);
  }

  /* ---------- Lightbox dengan tombol sebelumnya dan berikutnya ---------- */
  const lb = document.getElementById("lightbox");
  const lbImg = lb.querySelector("img");
  const lbCap = lb.querySelector("figcaption");
  const lbSebelum = lb.querySelector(".sebelum");
  const lbSesudah = lb.querySelector(".sesudah");
  let grup = [];
  let idx = 0;

  function tampilFoto() {
    const f = grup[idx];
    lbImg.src = f.file;
    lbImg.alt = f.keterangan || "";
    lbCap.textContent = f.keterangan || "";
    lbSebelum.hidden = lbSesudah.hidden = grup.length < 2;
  }
  function bukaFoto(g, i) { grup = g; idx = i; tampilFoto(); lb.showModal(); }
  function geser(n) { idx = (idx + n + grup.length) % grup.length; tampilFoto(); }

  lbSebelum.addEventListener("click", function () { geser(-1); });
  lbSesudah.addEventListener("click", function () { geser(1); });
  lb.querySelector(".tutup").addEventListener("click", function () { lb.close(); });
  lb.addEventListener("click", function (e) { if (e.target === lb) lb.close(); });
  lb.addEventListener("keydown", function (e) {
    if (grup.length < 2) return;
    if (e.key === "ArrowLeft") geser(-1);
    if (e.key === "ArrowRight") geser(1);
  });

  /* ---------- Video ---------- */
  function petaVideo(src) {
    let m = src.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/))([\w-]{11})/);
    if (m) return { jenis: "iframe", url: "https://www.youtube-nocookie.com/embed/" + m[1] };
    m = src.match(/drive\.google\.com\/file\/d\/([\w-]+)/);
    if (m) return { jenis: "iframe", url: "https://drive.google.com/file/d/" + m[1] + "/preview" };
    if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(src)) return { jenis: "video", url: src };
    return { jenis: "tautan", url: src };
  }

  function itemVideo(v) {
    const p = petaVideo(v.sumber || "");
    let pemutar;
    if (p.jenis === "iframe") {
      pemutar = h("iframe", {
        src: p.url, title: v.judul || "Video", loading: "lazy",
        allow: "accelerometer; encrypted-media; picture-in-picture; fullscreen",
        allowfullscreen: ""
      });
    } else if (p.jenis === "video") {
      const attr = { src: p.url, controls: "", preload: "metadata", playsinline: "" };
      if (v.poster) attr.poster = v.poster;
      pemutar = h("video", attr);
    } else {
      pemutar = h("a", { class: "video-tautan", href: p.url, target: "_blank", rel: "noopener", text: "Buka video di tab baru" });
    }
    return h("figure", { class: "item-video" }, [
      h("div", { class: "pemutar" }, [pemutar]),
      h("figcaption", {}, [
        h("strong", { text: v.judul || "Video" }),
        v.keterangan ? h("span", { text: v.keterangan }) : null
      ])
    ]);
  }

  /* ---------- Foto ---------- */
  function itemFoto(f, i, semua) {
    const img = h("img", { src: f.file, alt: f.keterangan || "Foto kegiatan PPL Mandiri", loading: "lazy" });
    const tombol = h("button", {
      type: "button", class: "foto-tombol",
      "aria-label": "Perbesar foto" + (f.keterangan ? ": " + f.keterangan : ""),
      onclick: function () { bukaFoto(semua, i); }
    }, [img]);
    const fig = h("figure", { class: "item-foto" }, [
      tombol,
      f.keterangan ? h("figcaption", { text: f.keterangan }) : null
    ]);
    img.addEventListener("error", function () {
      fig.replaceChildren(slot("Foto tidak ditemukan", "Periksa nama dan lokasi berkas: " + f.file, "slot-salah"));
    });
    return fig;
  }

  /* ---------- Artefak ---------- */
  function itemArtefak(a) {
    const jenis = jenisBerkas(a.file);
    const bisaLihat = jenis === "pdf";
    const kartu = h("article", { class: "artefak" });
    const tombol = [];
    let pratinjau = null;

    if (bisaLihat) {
      const tbl = h("button", {
        type: "button", class: "tombol tombol-utama", "aria-expanded": "false",
        text: "Lihat di halaman",
        onclick: function () {
          if (!pratinjau) {
            pratinjau = h("iframe", { class: "pratinjau", src: a.file, title: a.judul || "Pratinjau PDF" });
            kartu.appendChild(pratinjau);
            tbl.textContent = "Tutup pratinjau";
            tbl.setAttribute("aria-expanded", "true");
          } else {
            pratinjau.remove(); pratinjau = null;
            tbl.textContent = "Lihat di halaman";
            tbl.setAttribute("aria-expanded", "false");
          }
        }
      });
      tombol.push(tbl);
    }

    const buka = h("a", {
      class: "tombol" + (bisaLihat ? "" : " tombol-utama"),
      href: a.file, target: "_blank", rel: "noopener",
      text: lokal(a.file) && !bisaLihat ? "Unduh" : "Buka di tab baru"
    });
    if (lokal(a.file) && !bisaLihat) buka.setAttribute("download", "");
    tombol.push(buka);

    const lencana = h("span", { class: "artefak-jenis", "aria-hidden": "true", text: jenis.slice(0, 5) });
    let penanda = lencana;
    if (a.cover) {
      const gambar = h("img", { src: a.cover, alt: "Cover " + (a.judul || "artefak"), loading: "lazy" });
      penanda = h("button", {
        type: "button", class: "artefak-cover",
        "aria-label": "Perbesar cover " + (a.judul || "artefak"),
        onclick: function () { bukaFoto([{ file: a.cover, keterangan: "Cover " + (a.judul || "artefak") }], 0); }
      }, [gambar]);
      gambar.addEventListener("error", function () { penanda.replaceWith(lencana); });
    }

    kartu.appendChild(h("div", { class: "artefak-baris" + (a.cover ? " ada-cover" : "") }, [
      penanda,
      h("div", { class: "artefak-teks" }, [
        h("h4", { text: a.judul || "Artefak" }),
        a.keterangan ? h("p", { text: a.keterangan }) : null
      ]),
      h("div", { class: "artefak-aksi" }, tombol)
    ]));
    return kartu;
  }

  /* ---------- Bukti per bagian ---------- */
  function kelompok(judul, isi) {
    return h("div", { class: "kelompok" }, [h("h3", { text: judul }), isi]);
  }

  function bukti(b) {
    const alamat = 'js/data.js, bagian "' + b.nav + '"';
    const fotos = Array.isArray(b.foto) ? b.foto : [];

    const gridVideo = h("div", { class: "grid grid-video" },
      (b.video && b.video.length) ? b.video.map(itemVideo)
        : [slot("Slot video", "Tempel tautan YouTube, Google Drive, atau nama berkas mp4. Lihat " + alamat + ", kolom video.", "slot-video")]);

    const gridFoto = h("div", { class: "grid grid-foto" },
      fotos.length ? fotos.map(function (f, i) { return itemFoto(f, i, fotos); })
        : [1, 2, 3].map(function (i) {
            return slot("Slot foto " + i, "Taruh gambar di assets/foto, lalu tulis namanya di " + alamat + ", kolom foto.", "slot-foto");
          }));

    const listArtefak = h("div", { class: "daftar-artefak" },
      (b.artefak && b.artefak.length) ? b.artefak.map(itemArtefak)
        : [slot("Slot artefak", "Taruh modul ajar atau lampiran di assets/modul, lalu tulis namanya di " + alamat + ", kolom artefak.", "slot-artefak")]);

    return h("div", { class: "bukti" }, [
      kelompok("Video", gridVideo),
      kelompok("Foto kegiatan", gridFoto),
      kelompok("Artefak dan lampiran", listArtefak)
    ]);
  }

  /* ---------- Satu bagian analisis ---------- */
  function bagian(b) {
    const paragraf = (b.analisis || []).filter(function (t) { return t && t.trim(); });
    const teks = paragraf.length
      ? h("div", { class: "analisis" }, paragraf.map(function (t) { return h("p", { text: t }); }))
      : h("div", { class: "analisis analisis-kosong" }, [
          h("p", { text: "Analisis belum ditulis." }),
          h("p", { text: 'Isi di js/data.js, bagian "' + b.nav + '", kolom analisis.' })
        ]);

    const panduan = (b.panduan && b.panduan.length)
      ? h("details", { class: "panduan" }, [
          h("summary", { text: "Pertanyaan untuk menyusun analisis" }),
          h("ul", {}, b.panduan.map(function (q) { return h("li", { text: q }); }))
        ])
      : null;

    return h("section", { class: "bagian", id: b.id, "aria-labelledby": b.id + "-j" }, [
      h("header", { class: "bagian-kepala" }, [
        h("h2", { id: b.id + "-j", text: b.judul }),
        b.ringkas ? h("p", { class: "ringkas", text: b.ringkas }) : null
      ]),
      panduan,
      teks,
      bukti(b)
    ]);
  }

  /* ---------- Bagian atas: judul, foto, dan kartu identitas ---------- */
  function hitungIsi() {
    const foto = new Set(), video = new Set(), artefak = new Set();
    daftar.forEach(function (p) {
      (p.bagian || []).forEach(function (b) {
        (b.foto || []).forEach(function (f) { foto.add(f.file); });
        (b.video || []).forEach(function (v) { video.add(v.sumber); });
        (b.artefak || []).forEach(function (a) { artefak.add(a.file); });
      });
    });
    return { foto: foto.size, video: video.size, artefak: artefak.size };
  }

  function kartuIdentitas() {
    const baris = [
      ["Program studi", profil.prodi],
      ["Sekolah", profil.sekolah],
      ["Periode", profil.periode],
      ["Dosen pembimbing", profil.dpl],
      ["Guru pamong", profil.guruPamong]
    ];
    const dl = h("dl", { class: "id-data" });
    baris.forEach(function (r) {
      dl.appendChild(h("div", {}, [
        h("dt", { text: r[0] }),
        h("dd", { class: r[1] ? "" : "kosong", text: r[1] || "Belum diisi" })
      ]));
    });

    let foto;
    if (profil.foto) {
      foto = h("img", { class: "id-foto", src: profil.foto, alt: "Foto " + (profil.nama || "mahasiswa") });
      foto.addEventListener("error", function () {
        foto.replaceWith(h("div", { class: "id-foto id-foto-kosong", text: "Foto tidak ditemukan" }));
      });
    } else {
      foto = h("div", { class: "id-foto id-foto-kosong", text: "Foto profil" });
    }

    return h("div", { class: "id-gantung" }, [
      h("article", { class: "id-kartu", "aria-label": "Kartu identitas" }, [
        h("div", { class: "id-pita" }, [
          h("span", { class: "id-lubang", "aria-hidden": "true" }),
          h("span", { text: "PPL Mandiri" })
        ]),
        h("div", { class: "id-atas" }, [
          foto,
          h("div", {}, [
            h("p", { class: "id-nama" + (profil.nama ? "" : " kosong"), text: profil.nama || "Nama Anda" }),
            h("p", { class: "id-nim" }, [
              "NIM ",
              h("span", { class: profil.nim ? "" : "kosong", text: profil.nim || "belum diisi" })
            ])
          ])
        ]),
        dl
      ])
    ]);
  }

  function renderHero() {
    const isi = hitungIsi();
    const tentang = (profil.tentang || []).filter(Boolean).map(function (t) { return h("p", { text: t }); });

    let foto;
    if (hero.foto) {
      const img = h("img", { src: hero.foto, alt: hero.keterangan || "Foto kegiatan PPL Mandiri" });
      img.addEventListener("error", function () {
        img.replaceWith(slot("Foto utama", "Berkas tidak ditemukan: " + hero.foto, "slot-salah"));
      });
      foto = h("figure", { class: "hero-foto" }, [
        h("div", { class: "hero-bingkai" }, [
          img,
          hero.keterangan ? h("figcaption", { text: hero.keterangan }) : null
        ])
      ]);
    } else {
      foto = h("div", { class: "hero-foto" }, [slot("Foto utama", "Isi di js/data.js, bagian hero.", "slot-hero")]);
    }

    return h("section", { class: "hero", id: "profil", "aria-labelledby": "judul-utama" }, [
      h("div", { class: "hero-teks" }, [
        h("h1", { id: "judul-utama" }, [
          "E-Portofolio",
          h("br"),
          "PPL Mandiri"
        ]),
        h("p", { class: "hero-sekolah", text: profil.sekolah || "" }),
        h("div", { class: "hero-tentang" }, tentang),
        h("p", { class: "hero-isi", text:
          "Isi halaman ini: " + isi.video + " video, " + isi.foto + " foto, " + isi.artefak + " artefak." })
      ]),
      h("div", { class: "hero-visual" }, [foto, kartuIdentitas()])
    ]);
  }

  /* ---------- Jejak kegiatan ---------- */
  function renderJejak() {
    if (!jejak.length) return null;
    const jalur = h("div", { class: "jalur", tabindex: "0", role: "list", "aria-label": "Garis waktu kegiatan" });

    jejak.forEach(function (j) {
      const t = tanggalPendek(j.tanggal);
      const img = h("img", { src: j.file, alt: "", loading: "lazy" });
      const kartu = h("a", { class: "kartu-jejak", role: "listitem", href: "#" + (j.bagian || "profil") }, [
        h("div", { class: "jejak-tgl" }, [
          h("span", { class: "jejak-hari", text: t.hari }),
          h("span", { class: "jejak-bulan", text: t.bulan })
        ]),
        h("div", { class: "jejak-foto" }, [img]),
        h("div", { class: "jejak-teks" }, [
          h("strong", { text: j.judul }),
          j.keterangan ? h("span", { text: j.keterangan }) : null
        ])
      ]);
      img.addEventListener("error", function () { img.replaceWith(h("div", { class: "jejak-hilang", text: "Foto belum ada" })); });
      jalur.appendChild(kartu);
    });

    function geserJalur(arah) {
      jalur.scrollBy({ left: arah * 290, behavior: "smooth" });
    }

    return h("section", { class: "jejak", id: "jejak", "aria-labelledby": "jejak-j" }, [
      h("div", { class: "jejak-kepala" }, [
        h("div", {}, [
          h("h2", { id: "jejak-j", text: "Jejak kegiatan" }),
          h("p", { class: "ringkas", text: "Kegiatan PPL Mandiri berurutan dari tanggal paling awal. Klik kartu untuk menuju bagian analisisnya." })
        ]),
        h("div", { class: "jejak-tombol" }, [
          h("button", { type: "button", "aria-label": "Geser ke kiri", text: "Kiri", onclick: function () { geserJalur(-1); } }),
          h("button", { type: "button", "aria-label": "Geser ke kanan", text: "Kanan", onclick: function () { geserJalur(1); } })
        ])
      ]),
      jalur
    ]);
  }

  /* ---------- Rakit halaman ---------- */
  const lajur = document.getElementById("lajur");
  const nav = document.getElementById("navigasi");
  const semuaBagian = [];

  lajur.appendChild(renderHero());
  const elJejak = renderJejak();
  if (elJejak) lajur.appendChild(elJejak);

  const itemNav = [];
  function tambahNav(id, teks, terisi) {
    const a = h("a", { href: "#" + id, "data-target": id }, [
      terisi === undefined ? null : h("span", {
        class: "titik" + (terisi ? " terisi" : ""),
        title: terisi ? "Analisis sudah ditulis" : "Analisis belum ditulis"
      }),
      h("span", { text: teks })
    ]);
    nav.appendChild(a);
    itemNav.push(id);
  }

  tambahNav("profil", "Profil");
  if (elJejak) tambahNav("jejak", "Jejak kegiatan");

  daftar.forEach(function (p) {
    const sec = h("div", { class: "portofolio", id: p.id });
    sec.appendChild(h("div", { class: "portofolio-judul" }, [
      h("h2", { class: "judul-besar", text: p.judul }),
      p.subjudul ? h("p", { text: p.subjudul }) : null
    ]));
    (p.bagian || []).forEach(function (b) {
      semuaBagian.push(b);
      sec.appendChild(bagian(b));
      tambahNav(b.id, b.nav || b.judul, ada(b.analisis));
    });
    lajur.appendChild(sec);
  });

  const terisi = semuaBagian.filter(function (b) { return ada(b.analisis); }).length;
  const persen = semuaBagian.length ? Math.round(terisi / semuaBagian.length * 100) : 0;
  const prog = document.getElementById("progres");
  prog.appendChild(h("span", { text: "Analisis tertulis " + terisi + " dari " + semuaBagian.length }));
  prog.appendChild(h("span", { class: "progres-bar", "aria-hidden": "true" }, [
    h("i", { style: "width:" + persen + "%" })
  ]));

  /* ---------- Kaki halaman ---------- */
  const kaki = document.getElementById("kaki");
  kaki.appendChild(h("div", { class: "belang", "aria-hidden": "true" }));
  kaki.appendChild(h("div", { class: "kaki-isi" }, [
    h("p", { text: (profil.nama ? profil.nama + ", " : "") + "E-Portofolio PPL Mandiri, " + (profil.sekolah || "") }),
    h("a", { href: "#profil", text: "Kembali ke atas" })
  ]));

  /* ---------- Tandai bagian yang sedang dibaca ---------- */
  if ("IntersectionObserver" in window) {
    const tautan = {};
    nav.querySelectorAll("a[data-target]").forEach(function (a) { tautan[a.dataset.target] = a; });
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && tautan[en.target.id]) {
          Object.keys(tautan).forEach(function (k) { tautan[k].removeAttribute("aria-current"); });
          const a = tautan[en.target.id];
          a.setAttribute("aria-current", "true");
          const kiri = a.offsetLeft - 16;
          if (nav.scrollWidth > nav.clientWidth) nav.scrollTo({ left: kiri, behavior: "smooth" });
        }
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    itemNav.forEach(function (id) {
      const t = document.getElementById(id);
      if (t) io.observe(t);
    });
  }

  document.title = (profil.nama ? profil.nama + " – " : "") + "E-Portofolio PPL Mandiri";
})();
