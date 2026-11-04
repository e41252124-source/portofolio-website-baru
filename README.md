# Portofolio Digital — Aryasha Yusuf Pratama

Website portofolio modern, responsif, dan profesional untuk **Aryasha Yusuf Pratama** (Mahasiswa D4 Teknik Informatika, Politeknik Negeri Jember). Proyek ini disusun untuk tugas mata kuliah **Literasi Digital** sekaligus sebagai media portofolio personal yang memuat rekam jejak akademik, pengalaman proyek, sertifikasi, keahlian, dan aktivitas organisasi.

---

## 📋 Fitur Utama Website

1. **Dark & Light Mode**: Mode tampilan gelap dan terang yang tersimpan di `localStorage`.
2. **Desain Modern & Glassmorphism**: Dibangun dengan warna aksen Indigo & Cyan, tipografi *Plus Jakarta Sans* dan *Space Grotesk*.
3. **Penyajian Konten Berbasis Bukti**:
   - **Foto Profil Pribadi**: Hanya ditampilkan pada Hero section dengan fallback monogram inisial `AY` (bebas broken image).
   - **Dokumentasi Sertifikat Asli**: Mendukung penambahan foto sertifikat asli dengan modal pratinjau resolusi tinggi.
   - **Proyek & Pengalaman Berbasis Teks & Ikon**: Tidak menggunakan thumbnail/screenshot palsu, berfokus pada peran dan fitur teknis nyata.
4. **Interactive Modals**:
   - Modal Rincian Proyek (fitur, teknologi, peran).
   - Modal Pratinjau Sertifikat (zoom gambar, nama sertifikat, penyelenggara, dan tanggal).
5. **Filter Kategori Proyek**: Memudahkan melihat proyek berdasarkan Web/Aplikasi, UI/UX, Quality Assurance, dan Game Development.
6. **Download CV Nyata**: Tombol unduh CV langsung mengarah ke file PDF asli di folder `assets/cv/`.
7. **Formulir Kontak Transparan**: Menggunakan protokol `mailto:` tanpa klaim palsu backend server.

---

## 📂 Struktur Folder Proyek

```text
portfolio-website/
├── index.html              # Halaman utama website (HTML5 semantic)
├── style.css               # Desain antarmuka & responsivitas (CSS3 murni)
├── script.js               # Logika interaktif, modal, filter, & navigasi
├── portfolio-data.js       # Pusat data terpusat (Centralized Data Store)
├── README.md               # Panduan lengkap penggunaan & pengelolaan
└── assets/
    ├── images/
    │   ├── profile/
    │   │   └── profile.jpg         # Tempat foto profil pribadi Anda
    │   └── certificates/
    │       ├── lkmm-pra-td.jpg     # Foto sertifikat LKMM Pra-TD
    │       ├── pkkmb.jpg           # Foto sertifikat PKKMB Polije
    │       ├── toefl.jpg           # Foto sertifikat TOEFL
    │       └── ospek-tif.jpg       # Foto sertifikat Ospek Jurusan TIF
    └── cv/
        └── CV_Aryasha_Yusuf_Pratama.pdf  # File PDF CV asli
```

---

## 🚀 Cara Menjalankan Website melalui Live Server

1. Buka folder `portfolio-website` di **Visual Studio Code**.
2. Pastikan ekstensi **Live Server** (oleh *Ritwick Dey*) sudah terpasang di VS Code.
3. Klik kanan pada file `index.html`, lalu pilih **"Open with Live Server"** (atau klik tombol **"Go Live"** di pojok kanan bawah jendela VS Code).
4. Peramban web (browser) akan otomatis terbuka pada alamat `http://127.0.0.1:5500/index.html`.

---

## 🖼️ Panduan Pengelolaan Foto & Dokumen

### 1. Cara Memasukkan Foto Profil
1. Siapkan foto profil terbaik Anda (disarankan format JPG/JPEG atau PNG rasio 1:1 atau 3:4).
2. Ubah nama file menjadi: `profile.jpg`.
3. Masukkan file tersebut ke dalam folder:
   `assets/images/profile/profile.jpg`
4. Muat ulang (refresh) halaman website. Foto akan otomatis muncul menggantikan inisial placeholder "AY".

### 2. Cara Mengganti Foto Profil
1. Cukup timpa file `profile.jpg` di folder `assets/images/profile/` dengan foto baru Anda menggunakan nama file yang sama (`profile.jpg`).
2. Jika menggunakan nama file atau format lain (misalnya `foto-resmi.png`), buka file `portfolio-data.js` dan `index.html`, lalu perbarui nilai `avatar` / `src` menjadi:
   `assets/images/profile/foto-resmi.png`

---

### 3. Cara Memasukkan Gambar Sertifikat
Folder `assets/images/certificates/` telah disiapkan untuk menampung gambar sertifikat:
- Sertifikat LKMM Pra-TD: `assets/images/certificates/lkmm-pra-td.jpg`
- Sertifikat PKKMB: `assets/images/certificates/pkkmb.jpg`
- Sertifikat TOEFL: `assets/images/certificates/toefl.jpg`
- Sertifikat Ospek TIF: `assets/images/certificates/ospek-tif.jpg`

Setelah file gambar ditaruh di folder tersebut:
- Thumbnail sertifikat otomatis tampil di kartu sertifikat.
- Tombol **"Lihat Sertifikat"** dan klik thumbnail akan membuka modal pratinjau gambar penuh.

### 4. Cara Mengganti Gambar Sertifikat
1. Ganti file gambar lama di folder `assets/images/certificates/` dengan file baru.
2. Jika nama file atau formatnya berbeda (misal `.png` atau `.webp`), sesuaikan path gambar pada file `portfolio-data.js` pada bagian `certifications`:
   ```javascript
   {
     id: "lkmm-pra-td",
     title: "LKMM Pra-TD",
     image: "assets/images/certificates/nama-baru.png"
   }
   ```

### 5. Cara Menambahkan Sertifikat Baru
1. Letakkan gambar sertifikat baru ke dalam `assets/images/certificates/sertifikat-baru.jpg`.
2. Buka `portfolio-data.js`, tambahkan data baru pada array `certifications`:
   ```javascript
   {
     id: "sertifikat-baru",
     title: "Nama Pelatihan / Sertifikat",
     date: "Bulan Tahun",
     issuer: "Penyelenggara",
     badge: "Kategori Bidang",
     description: "Deskripsi singkat kompetensi yang diraih.",
     image: "assets/images/certificates/sertifikat-baru.jpg"
   }
   ```
3. Tambahkan kartu HTML pada section `#certifications` di `index.html` dengan struktur card yang serupa, lalu sambungkan tombol preview dengan ID `sertifikat-baru`.

---

### 6. Cara Memasukkan atau Memperbarui PDF CV
1. Simpan dokumen PDF CV asli Anda di folder:
   `assets/cv/CV_Aryasha_Yusuf_Pratama.pdf`
2. *(Catatan: File CV asli Anda `CV_Aryasha_Yusuf_Pratama_ID.pdf` telah disinkronkan dan tersedia di folder tersebut)*.
3. Tombol **"Unduh CV"** pada Hero section akan mengunduh file ini secara langsung.

---

## 🛠️ Panduan Memperbarui Konten Portofolio

Semua data portofolio tersentralisasi di dalam file `portfolio-data.js` untuk memudahkan pemeliharaan:

### 1. Mengubah Informasi Pribadi & Media Sosial
Buka `portfolio-data.js`, sesuaikan properti pada objek `profile` dan `socialLinks`:
- Nama, domisili, email, nomor WhatsApp, tautan LinkedIn, deskripsi profil.
- Perubahan akan langsung disinkronkan pada tampilan.

### 2. Menambahkan Pengalaman Proyek / Magang Baru
Buka `portfolio-data.js`, tambahkan objek baru pada array `experiences`:
```javascript
{
  id: "exp-baru",
  role: "Posisi / Peran Anda",
  company: "Nama Instansi / Perusahaan",
  type: "Project Based Learning / Magang / Freelance",
  period: "Bulan Tahun – Bulan Tahun",
  status: "verified",
  tasks: [
    "Deskripsi tugas pertama.",
    "Deskripsi tugas kedua."
  ],
  techStack: ["Teknologi 1", "Teknologi 2"]
}
```

### 3. Menambahkan Proyek Baru ke Koleksi Portofolio
Buka `portfolio-data.js`, tambahkan objek baru pada array `projects`:
```javascript
{
  id: "proyek-unik",
  title: "Judul Proyek",
  category: "web", // Opsi: web, uiux, qa, game
  categoryLabel: "Web Application",
  icon: "fa-solid fa-laptop-code",
  role: "Peran Anda",
  description: "Deskripsi singkat kegunaan proyek.",
  features: [
    "Fitur unggulan 1",
    "Fitur unggulan 2"
  ],
  techStack: ["HTML5", "CSS3", "JavaScript"],
  demoUrl: null, // Masukkan URL jika ada, atau biarkan null
  codeUrl: null
}
```
*Catatan: Portofolio mematuhi aturan bahwa bagian Proyek menggunakan format kartu berbasis teks, ikon, dan tag teknologi tanpa gambar.*

---

## 🔍 Catatan Informasi CV yang Memerlukan Konfirmasi

Berdasarkan analisis teliti terhadap dokumen CV acuan:
1. **Semester vs Tahun Masuk Pendidikan**:
   - Dokumen CV mencantumkan *"Mahasiswa semester 8"* namun tahun masuk D4 Teknik Informatika tertulis *"2025 – Sekarang"*. Hal ini telah dicatat sebagai informasi yang perlu konfirmasi (apakah terdapat proses alih jenjang atau penyesuaian kurikulum).
2. **Rentang Tahun Proyek ARKAPAN (KMIPN VIII)**:
   - Tertulis periode *"Juli 2026 – Agustus 2023"* (urutan tahun terbalik). Pada website, proyek ini diberi penanda status verifikasi agar data tetap transparan.
3. **Periode Scrum Master Nettyzen Access**:
   - Tertulis *"Februari 2022 – Juni 2022"*. Mengingat masa tersebut bertepatan dengan awal SMK, status kartu ditandai dengan badge verifikasi.
4. **Game Artist Agate Academy (MSIB Batch 6)**:
   - Tertulis periode *"Februari 2027 – Juni 2027"*. Karena berada di masa mendatang relatif terhadap tahun 2026, status kartu disimpan sebagai draft persiapan MSIB.
5. **Keterkaitan Nettyzen Access dan AcomptStore**:
   - Proyek AcomptStore dan peranan Front-End, UI/UX, dan QA saling beririsan dan telah dipetakan secara harmonis pada portofolio.

---

## 👨‍💻 Hak Cipta & Pengembang
- **Nama**: Aryasha Yusuf Pratama
- **Kampus**: Politeknik Negeri Jember (Kampus 3 Nganjuk)
- **Jurusan**: Teknologi Informasi (D4 Teknik Informatika)
- **Email**: [aryashayusuf@gmail.com](mailto:aryashayusuf@gmail.com)
- **LinkedIn**: [linkedin.com/in/aryasha-yusuf-pratama-3a4776416](https://www.linkedin.com/in/aryasha-yusuf-pratama-3a4776416)

