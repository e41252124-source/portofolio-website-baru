/**
 * PORTFOLIO DATA CENTRALIZED STORE
 * Portofolio Aryasha Yusuf Pratama
 * Sumber data terpusat untuk Profil, Pendidikan, Pengalaman, Keterampilan,
 * Proyek, Sertifikasi, Prestasi, Organisasi, dan Kontak.
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Aryasha Yusuf Pratama",
    headline: "Halo, Saya Aryasha Yusuf Pratama",
    subheadline: "Mahasiswa Teknik Informatika | UI/UX Designer | Front-End Developer | Software Quality Assurance",
    description: "Saya mahasiswa D4 Teknik Informatika di Politeknik Negeri Jember yang memiliki minat dalam pengembangan perangkat lunak, desain antarmuka, pengujian kualitas aplikasi, dan pengembangan game. Saya senang mempelajari teknologi baru, berkolaborasi dalam tim, serta mengembangkan solusi digital yang bermanfaat dan mudah digunakan.",
    about1: "Saya adalah mahasiswa D4 Teknik Informatika di Politeknik Negeri Jember dengan ketertarikan pada pengembangan teknologi dan desain digital. Saya memiliki pengalaman melalui kegiatan Project Based Learning, pengembangan aplikasi web, desain UI/UX, Software Quality Assurance, dan pengembangan game.",
    about2: "Selain keterampilan teknis, saya aktif mengembangkan kemampuan komunikasi, kepemimpinan, kerja sama tim, serta organisasi. Saya memiliki semangat untuk terus belajar dan meningkatkan keterampilan profesional melalui berbagai pengalaman serta proyek.",
    avatar: "assets/images/profile/profile.jpg",
    initials: "AY",
    domicile: "Wonogiri, Jawa Tengah",
    status: "Mahasiswa D4 Teknik Informatika (Politeknik Negeri Jember)",
    gpa: "3,95",
    languages: "Bahasa Indonesia (Fasih) & English (Dasar)",
    email: "aryashayusuf@gmail.com",
    phone: "+62 812 258 863 092",
    phoneClean: "62812258863092",
    linkedin: "https://www.linkedin.com/in/aryasha-yusuf-pratama-3a4776416",
    cvPath: "assets/cv/CV_Aryasha_Yusuf_Pratama.pdf",
    badges: {
      gpa: "3,95",
      campus: "Politeknik Negeri Jember",
      major: "D4 Teknik Informatika"
    }
  },

  education: [
    {
      institution: "Politeknik Negeri Jember",
      degree: "D4 Teknik Informatika",
      period: "2025 – Sekarang",
      gpa: "3,95",
      description: "Menempuh pendidikan vokasi sarjana terapan dengan fokus keahlian pada rekayasa perangkat lunak, pengujian sistem, pengembangan antarmuka, dan multimedia game.",
      courses: [
        "Konsep Basis Data",
        "Pemrograman Dasar (Java)",
        "Pengembangan Perangkat Lunak",
        "Pemrograman Berorientasi Objek",
        "Interaksi Manusia dan Komputer",
        "Sistem Informasi Berbasis Dekstop",
        "Sistem Informasi Berbasis Web dan Framework",
        "Perencanaan & Manajemen Proyek",
        "Konsep Jaringan Komputer",
        "Manajemen Kualitas Perangkat Lunak",
        "Pengujian Perangkat Lunak",
        "Perawatan Perangkat Lunak",
        "Multimedia Permainan",
        "Sistem Cerdas & Pengolahan Citra"
      ]
    },
    {
      institution: "SMK Negeri 1 Giritontro",
      degree: "Teknik Jaringan Komputer dan Telekomunikasi",
      period: "2022 – 2025",
      description: "Mempelajari dasar infrastruktur teknologi informasi, administrasi jaringan, troubleshooting perangkat keras, serta konfigurasi perangkat jaringan.",
      courses: [
        "Perakitan PC dan Laptop",
        "Instalasi Windows & Linux",
        "Troubleshooting Hardware & Software",
        "Konfigurasi MikroTik",
        "Pengalamatan IP",
        "Manajemen Bandwidth & NAT",
        "Administrasi Jaringan"
      ]
    }
  ],

  experiences: [
    {
      id: "exp-1",
      role: "Software Developer",
      company: "UMKM BU Nanda",
      type: "Project Based Learning",
      period: "September 2025 – Desember 2025",
      status: "verified",
      tasks: [
        "Menganalisis kebutuhan pengguna aplikasi kasir berbasis desktop untuk pelaku usaha UMKM.",
        "Merancang daftar kebutuhan fitur transaksi penjualan dan alur operasional kasir.",
        "Membangun program perangkat lunak bagian transaksi penjualan pada aplikasi kasir UMKM BU Nanda.",
        "Mengimplementasikan antarmuka dan logika pemrograman menggunakan HTML, CSS, dan JavaScript."
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "Analisis Sistem"]
    },
    {
      id: "exp-2",
      role: "Front-End Web Developer",
      company: "Nettyzen Access",
      type: "Project Based Learning",
      period: "Februari 2026 – Mei 2026",
      status: "verified",
      tasks: [
        "Mengembangkan tampilan website dan antarmuka aplikasi AcomptStore.",
        "Mengimplementasikan fitur interaktif untuk mempermudah transaksi kasir dan belanja pelanggan.",
        "Menyusun komponen tata letak responsif dan navigasi pengguna yang efisien.",
        "Melakukan penyempurnaan antarmuka secara berkala untuk pengalaman pengguna yang nyaman."
      ],
      techStack: ["PHP", "Flutter", "HTML5", "CSS3", "JavaScript"]
    },
    {
      id: "exp-3",
      role: "UI/UX Web Designer",
      company: "Nettyzen Access",
      type: "Project Based Learning",
      period: "Februari 2026 – Maret 2026",
      status: "verified",
      tasks: [
        "Mendesain antarmuka pengguna (User Interface) aplikasi AcomptStore berbasis website.",
        "Menentukan layout, skema warna, tipografi, ikon, dan struktur tombol navigasi.",
        "Meningkatkan kenyamanan pengguna melalui alur transaksi belanja dan kasir yang intuitif.",
        "Memastikan konsistensi elemen visual antarmuka di berbagai ukuran layar."
      ],
      techStack: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"]
    },
    {
      id: "exp-4",
      role: "Quality Assurance",
      company: "Nettyzen Access",
      type: "Project Based Learning",
      period: "Februari 2026 – Mei 2026",
      status: "verified",
      tasks: [
        "Melakukan pengujian fungsional (functional testing) pada seluruh modul aplikasi toko.",
        "Mendokumentasikan temuan bug dan kendala teknis sebagai acuan perbaikan developer.",
        "Melakukan pengujian ulang (retesting) setelah perbaikan bug guna menjamin stabilitas sistem.",
        "Memverifikasi kesesuaian fitur aplikasi dengan spesifikasi kebutuhan pengguna."
      ],
      techStack: ["Software QA", "Functional Testing", "Bug Documentation", "Retesting"]
    },
    {
      id: "exp-5",
      role: "Quality Assurance",
      company: "SENTRA",
      type: "Project Based Learning",
      period: "Agustus 2026 – Desember 2026",
      status: "verified",
      badgeText: "Sedang Berlangsung / Selesai",
      tasks: [
        "Melakukan pengujian kualitas perangkat lunak (Software QA) pada website pelaporan dinas dan aplikasi pengaduan masyarakat.",
        "Menjalankan functional testing dan regression testing komprehensif pada fitur pelaporan.",
        "Mengidentifikasi dan mendokumentasikan bug secara terstruktur untuk bahan evaluasi tim developer.",
        "Melakukan pengujian ulang setelah pembaruan sistem guna menjamin stabilitas aplikasi.",
        "Menyusun laporan hasil pengujian beserta statistik kualitas sistem sebagai referensi keandalan aplikasi."
      ],
      techStack: ["Software QA", "Regression Testing", "Issue Tracking", "Quality Metrics"]
    },
    {
      id: "exp-6",
      role: "Game Developer",
      company: "SATGAS KALI",
      type: "KMIPN VIII",
      period: "Juni 2026 – Juli 2026",
      status: "verified",
      tasks: [
        "Merancang dan mengembangkan aplikasi game SATGAS KALI bertema edukasi kebersihan sungai untuk KMIPN VIII.",
        "Menyusun alur permainan, tipe gameplay, karakter, dan sound effect pendukung.",
        "Membangun mekanik permainan interaktif menggunakan game engine berbasis HTML5 yaitu Construct.",
        "Melakukan optimasi performa dan responsivitas game pada peramban web."
      ],
      techStack: ["Construct", "HTML5", "Game Design", "Audio Effects"]
    },
    {
      id: "exp-7",
      role: "UI/UX Web Designer",
      company: "PT. Otak Kanan",
      type: "Internship — BayuQR & Web Accounting",
      period: "Agustus 2024 – Desember 2024",
      status: "verified",
      tasks: [
        "Mendesain antarmuka pengguna pada aplikasi BayuQR dan Website Accounting agar modern, menarik, dan mudah digunakan.",
        "Membuat prototipe interaktif untuk validasi alur penggunaan aplikasi.",
        "Menyusun elemen desain: layout, pemilihan warna, jenis font, ikonografi, dan komponen navigasi.",
        "Memastikan konsistensi tampilan guna meningkatkan kenyamanan dan User Experience (UX)."
      ],
      techStack: ["Figma", "Canva", "Prototyping", "UI Style Guide"]
    },
    {
      id: "exp-8",
      role: "Scrum Master",
      company: "Aplikasi Nettyzen Access",
      type: "Project Based Learning",
      period: "Februari 2022 – Juni 2022 (Perlu Verifikasi CV)",
      status: "needs_verification",
      verificationNote: "Catatan: Tertulis periode Februari – Juni 2022 dalam CV. Perlu konfirmasi sinkronisasi dengan tahun pendidikan.",
      tasks: [
        "Menerapkan konsep Agile dan Scrum kepada stakeholder dan anggota tim.",
        "Memberikan coaching, arahan, dan saran kepada anggota tim agar menjalankan tanggung jawab dengan optimal.",
        "Mengorganisir dan memfasilitasi pertemuan seperti Daily Scrum dan Sprint Planning.",
        "Membantu menyelesaikan kendala koordinasi kerja tim dalam sprint pengembangan."
      ],
      techStack: ["Agile / Scrum", "Sprint Planning", "Daily Standup", "Trello"]
    },
    {
      id: "exp-9",
      role: "Game Developer",
      company: "ARKAPAN – SATGAS KALI",
      type: "KMIPN VIII",
      period: "Juli 2026 – Agustus 2023 (Perlu Verifikasi CV)",
      status: "needs_verification",
      verificationNote: "Catatan: Tertulis rentang Juli 2026 – Ags 2023 pada CV. Memerlukan konfirmasi urutan tahun yang tepat.",
      tasks: [
        "Berkontribusi dalam pengembangan game SATGAS KALI dan PETA berbasis Android dengan tema sungai.",
        "Merancang karakter, alur permainan, dan tata letak kontrol permainan layar sentuh.",
        "Mengembangkan interaksi game engine berbasis Construct.",
        "Mengarahkan gameplay agar sesuai dengan tema kompetisi lingkungan."
      ],
      techStack: ["Construct", "Android Game", "Level Design", "Sprite Animation"]
    },
    {
      id: "exp-10",
      role: "Game Artist",
      company: "Agate Academy (MSIB Batch 6 Kampus Merdeka)",
      type: "MSIB Kampus Merdeka (Draft)",
      period: "Februari 2027 – Juni 2027 (Draft Konfirmasi)",
      status: "draft",
      verificationNote: "Catatan: Status draft rencana kegiatan MSIB Kampus Merdeka berdasarkan CV.",
      tasks: [
        "Merancang UI game 'Code Crusader: Anti-Virus Assault' menggunakan Figma dari wireframe hingga prototipe.",
        "Membuat elemen antarmuka: tombol, ikon, health bar, kotak dialog, background, dan menu.",
        "Membuat aset 3D (rumah, karakter, box container) menggunakan Blender.",
        "Mengembangkan dan menerapkan efek visual (VFX Gate) menggunakan Unity untuk meningkatkan interaktivitas visual."
      ],
      techStack: ["Figma", "Blender 3D", "Unity VFX", "Game UI"]
    }
  ],

  projects: [
    {
      id: "umkm-bu-nanda",
      title: "UMKM BU Nanda — Aplikasi Kasir",
      category: "web",
      categoryLabel: "Web & Desktop App",
      icon: "fa-solid fa-cash-register",
      role: "Software Developer",
      description: "Aplikasi kasir berbasis desktop dan web yang dirancang untuk UMKM BU Nanda guna menyederhanakan pencatatan transaksi penjualan secara cepat, terstruktur, dan akurat.",
      features: [
        "Analisis kebutuhan alur operasional kasir kafe/warung UMKM.",
        "Perancangan modul pencatatan transaksi penjualan langsung.",
        "Perhitungan total belanja dan kembalian otomatis bebas human error.",
        "Antarmuka pengguna yang bersih, responsif, dan mudah dipelajari kasir baru."
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "Analisis Sistem"],
      demoUrl: null,
      codeUrl: null
    },
    {
      id: "acomptstore",
      title: "AcomptStore — Sistem Kasir & Toko",
      category: "web",
      categoryLabel: "Web / E-Commerce",
      icon: "fa-solid fa-store",
      role: "Front-End Developer & UI/UX Designer",
      description: "Aplikasi toko berbasis website untuk mendukung kemudahan belanja pelanggan sekaligus membantu kasir mencatat transaksi pesanan secara cepat dan teratur.",
      features: [
        "Desain antarmuka toko yang ramah pengguna dan responsif di berbagai perangkat.",
        "Fitur katalog produk dan proses pemesanan terstruktur.",
        "Modul pencatatan transaksi kasir untuk efisiensi operasional harian.",
        "Navigasi bersih dengan hierarki tombol dan informasi yang jelas."
      ],
      techStack: ["PHP", "Flutter", "HTML5", "CSS3", "JavaScript"],
      demoUrl: null,
      codeUrl: null
    },
    {
      id: "nettyzen-access",
      title: "Nettyzen Access Application",
      category: "web",
      categoryLabel: "Web Application & QA",
      icon: "fa-solid fa-laptop-code",
      role: "Front-End Developer & Quality Assurance",
      description: "Pengembangan komponen antarmuka pengguna website serta pelaksanaan pengujian menyeluruh guna memastikan setiap fitur bekerja optimal dan stabil.",
      features: [
        "Penyusunan tata letak dan komponen antarmuka responsif.",
        "Pelaksanaan functional testing berkala untuk menemukan bug sebelum rilis.",
        "Dokumentasi laporan pengujian bug sistem secara transparan.",
        "Retesting berkelanjutan pasca perbaikan bug oleh tim pengembang."
      ],
      techStack: ["PHP", "JavaScript", "HTML/CSS", "Manual QA"],
      demoUrl: null,
      codeUrl: null
    },
    {
      id: "sentra",
      title: "SENTRA — Pelaporan Dinas & Pengaduan",
      category: "qa",
      categoryLabel: "Software Quality Assurance",
      icon: "fa-solid fa-list-check",
      role: "Quality Assurance Specialist",
      description: "Pengujian kualitas perangkat lunak (SQA) pada website pelaporan dinas dan sistem pengaduan masyarakat untuk menjamin keandalan sistem pelayanan publik.",
      features: [
        "Pengujian fungsional modul pelaporan dinas dan pengaduan warga.",
        "Regression testing berkala pasca pembaruan dan penambahan modul baru.",
        "Pencatatan dan dokumentasi temuan cacat sistem (bugs) secara mendalam.",
        "Penyusunan laporan evaluasi statistik mutu dan stabilitas aplikasi."
      ],
      techStack: ["Software QA", "Functional Testing", "Regression Testing", "Quality Metrics"],
      demoUrl: null,
      codeUrl: null
    },
    {
      id: "satgas-kali",
      title: "SATGAS KALI — River Awareness Game",
      category: "game",
      categoryLabel: "Game Development",
      icon: "fa-solid fa-gamepad",
      role: "Game Developer (KMIPN VIII)",
      description: "Game bertema pelestarian lingkungan sungai yang dikembangkan untuk kompetisi KMIPN VIII menggunakan game engine Construct berbasis HTML5.",
      features: [
        "Perancangan alur cerita, karakter utama, dan mekanik rintangan permainan.",
        "Integrasi efek suara (sound effect) dan transisi animasi.",
        "Optimasi jalannya permainan berbasis HTML5 pada browser.",
        "Pesan edukasi lingkungan tentang menjaga kebersihan dan kelestarian aliran sungai."
      ],
      techStack: ["Construct", "HTML5 Game", "Game Design", "Audio Effects"],
      demoUrl: null,
      codeUrl: null
    },
    {
      id: "arkapan",
      title: "ARKAPAN — Android Environmental Game",
      category: "game",
      categoryLabel: "Game Development",
      icon: "fa-solid fa-mobile-screen-button",
      role: "Game Developer (KMIPN VIII)",
      description: "Game edukasi lingkungan berbasis Android dengan rancangan alur gameplay dinamis, karakter khas, dan antarmuka kontrol sentuh intuitif.",
      features: [
        "Pengembangan alur gameplay dan desain level rintangan.",
        "Perancangan aset karakter, sprite lingkungan, dan tombol sentuh layar.",
        "Integrasi game engine Construct ke format aplikasi Android.",
        "Pengujian responsivitas kendali karakter pada berbagai resolusi layar ponsel."
      ],
      techStack: ["Construct", "Android Game", "Sprite Design", "Mobile UI"],
      demoUrl: null,
      codeUrl: null
    },
    {
      id: "bayuqr-accounting",
      title: "BayuQR & Website Accounting",
      category: "uiux",
      categoryLabel: "UI/UX Design",
      icon: "fa-solid fa-pen-ruler",
      role: "UI/UX Web Designer (PT Otak Kanan)",
      description: "Perancangan antarmuka pengguna (UI/UX) pada aplikasi BayuQR dan Website Accounting dengan fokus pada kemudahan navigasi transaksi dan konsistensi visual.",
      features: [
        "Pembuatan alur wireframe low-fidelity hingga high-fidelity mockup.",
        "Penyusunan prototipe interaktif untuk pengujian alur navigasi pengguna.",
        "Standarisasi panduan gaya visual: palet warna, tipografi, dan ikonografi.",
        "Optimasi kenyamanan alur scan QR dan pencatatan buku kas akuntansi."
      ],
      techStack: ["Figma", "Canva", "Prototyping", "Design System"],
      demoUrl: null,
      codeUrl: null
    },
    {
      id: "code-crusader",
      title: "Code Crusader: Anti-Virus Assault",
      category: "game",
      categoryLabel: "Game Art & UI/UX (Draft Konfirmasi)",
      icon: "fa-solid fa-shield-virus",
      role: "Game Artist & UI Designer (Agate Academy)",
      description: "Rancangan aset visual 3D, efek visual gerbang (VFX Gate), dan antarmuka game 'Code Crusader: Anti-Virus Assault' (Draft rencana kegiatan MSIB).",
      features: [
        "Desain antarmuka game: low-fidelity wireframe hingga prototipe interaktif di Figma.",
        "Pembuatan elemen UI: tombol, ikon, health bar, kotak dialog, dan tata letak menu.",
        "Pembuatan aset 3D lingkungan game (rumah, karakter, box container) di Blender.",
        "Penerapan efek visual (VFX Gate) menggunakan Unity engine."
      ],
      techStack: ["Figma", "Blender 3D", "Unity VFX", "Game Art"],
      demoUrl: null,
      codeUrl: null,
      note: "Status: Draft persiapan kegiatan berdasarkan data CV."
    }
  ],

  certifications: [
    {
      id: "lkmm-pra-td",
      title: "LKMM Pra-TD",
      date: "September 2025",
      issuer: "Politeknik Negeri Jember",
      badge: "Kepemimpinan & Manajemen",
      description: "Mengikuti kegiatan Latihan Keterampilan Manajemen Mahasiswa Pra-Tingkat Dasar (LKMM Pra-TD) untuk mengembangkan kemampuan kepemimpinan, komunikasi, kerja sama tim, manajemen waktu, serta meningkatkan kedisiplinan dan tanggung jawab berorganisasi.",
      image: "assets/images/certificates/lkmm-pra-td.jpg"
    },
    {
      id: "pkkmb",
      title: "Sertifikat PKKMB",
      date: "Agustus 2025",
      issuer: "Politeknik Negeri Jember",
      badge: "Pengenalan Kampus",
      description: "Mengikuti kegiatan Pengenalan Kehidupan Kampus bagi Mahasiswa Baru (PKKMB) di Politeknik Negeri Jember sebagai pembekalan wawasan kebangsaan, integritas akademik, dan adaptasi kultur perguruan tinggi.",
      image: "assets/images/certificates/pkkmb.jpg"
    },
    {
      id: "toefl",
      title: "Test of English as a Foreign Language (TOEFL)",
      date: "Juli 2026",
      issuer: "Kampus 3 Nganjuk, Politeknik Negeri Jember",
      badge: "Kemahiran Bahasa",
      description: "Sertifikasi kemampuan Bahasa Inggris resmi yang diselenggarakan oleh Kampus 3 Nganjuk, Politeknik Negeri Jember untuk menguji kemampuan mendengarkan, struktur kalimat, dan membaca.",
      image: "assets/images/certificates/toefl.jpg"
    },
    {
      id: "ospek-tif",
      title: "Ospek Jurusan Teknologi Informasi",
      date: "Oktober 2025",
      issuer: "Jurusan Teknologi Informasi - Politeknik Negeri Jember",
      badge: "Pengenalan Jurusan",
      description: "Mengikuti kegiatan pengenalan jurusan dan lingkungan akademik kampus Teknologi Informasi (TIF) guna mengenal kultur keteknikan dan kompetensi profesional bidang IT.",
      image: "assets/images/certificates/ospek-tif.jpg"
    }
  ],

  achievements: [
    {
      id: "achieve-1",
      title: "Best Spirit — Aplikasi Sunshine Florist",
      date: "September 2025",
      organizer: "Expo Pekan Ilmiah Mahasiswa Teknologi Informasi (EPIM TI) | Politeknik Negeri Jember",
      description: "Meraih penghargaan kategori Best Spirit dalam ajang bergengsi Expo Pekan Ilmiah Mahasiswa Teknologi Informasi (EPIM TI) atas inovasi dan dedikasi pengembangan aplikasi digital Sunshine Florist.",
      icon: "fa-solid fa-trophy trophy-gold"
    }
  ],

  organizations: [
    {
      id: "org-1",
      role: "C.O / Pengurus Divisi Pengembangan Sumber Daya Manusia (PSDM)",
      organization: "Forum Komunikasi Mahasiswa Kampus Tiga (Politeknik Negeri Jember)",
      period: "2025 – 2026",
      description: "Melaksanakan program kerja pengaktifan media Website, Instagram, dan YouTube, penyusunan jadwal kepenulisan karya, pembuatan rubrik dan majalah cetak, penyusunan mini buletin anggota magang, buletin pengurus, serta pembuatan PDL dan perlengkapan pengurus UKPM Explant.",
      icon: "fa-solid fa-users-gear"
    }
  ],

  publicSpeaking: [
    {
      id: "ps-1",
      role: "Speaker (Pemateri)",
      event: "LDK OSIS & Polisi Taruna",
      organizer: "SMK Negeri 1 Giritontro",
      period: "Juli 2023",
      description: "Menjadi narasumber dalam kegiatan Latihan Dasar Kepemimpinan (LDK) untuk menumbuhkan jiwa kepemimpinan, kedisiplinan taruna, dan tanggung jawab berorganisasi bagi calon pengurus.",
      icon: "fa-solid fa-bullhorn"
    },
    {
      id: "ps-2",
      role: "Moderator",
      event: "Rapat Keberlanjutan Pengurus Polisi Taruna Angkatan 2023",
      organizer: "Unit Kegiatan Polisi Taruna Provos 1 HUMAS SMK Negeri 1 Giritontro",
      period: "Juli 2023",
      description: "Memimpin dan memfasilitasi jalannya musyawarah evaluasi serta perencanaan keberlanjutan kepengurusan Korps Polisi Taruna angkatan 2023.",
      icon: "fa-solid fa-comments"
    }
  ],

  committees: [
    {
      id: "com-1",
      role: "Divisi Perlengkapan",
      event: "Nganjuk Skill Up (Mobile Legends: Bang Bang)",
      organizer: "Unit Kegiatan Perlengkapan Kampus 3 Politeknik Negeri Jember",
      period: "September 2026",
      description: "Bertanggung jawab atas ketersediaan logistik teknis, kelayakan sarana turnamen e-sport, dan kelancaran perlengkapan acara.",
      icon: "fa-solid fa-boxes-packing"
    },
    {
      id: "com-2",
      role: "Hubungan Masyarakat (Humas)",
      event: "Nganjuk Skill Up (Classmeet Futsal Antar Jurusan)",
      organizer: "Unit Kegiatan Divisi Humas Kampus 3 Politeknik Negeri Jember",
      period: "Oktober 2026",
      description: "Mengelola saluran komunikasi antar jurusan, publikasi informasi turnamen, dan koordinasi hubungan delegasi peserta.",
      icon: "fa-solid fa-handshake"
    }
  ],

  skills: {
    programming: [
      { name: "HTML5", icon: "fa-brands fa-html5" },
      { name: "CSS3", icon: "fa-brands fa-css3-alt" },
      { name: "JavaScript", icon: "fa-brands fa-js" },
      { name: "PHP", icon: "fa-brands fa-php" },
      { name: "Flutter", icon: "fa-solid fa-mobile-screen-button" },
      { name: "C++", icon: "fa-solid fa-code" },
      { name: "Java (Dasar)", icon: "fa-brands fa-java" }
    ],
    designGame: [
      { name: "Figma", icon: "fa-brands fa-figma" },
      { name: "Canva", icon: "fa-solid fa-palette" },
      { name: "Corel", icon: "fa-solid fa-pen-nib" },
      { name: "Unity", icon: "fa-brands fa-unity" },
      { name: "Blender", icon: "fa-solid fa-cube" },
      { name: "Construct", icon: "fa-solid fa-gamepad" }
    ],
    toolsProductivity: [
      { name: "Visual Studio Code", icon: "fa-solid fa-code" },
      { name: "Trello", icon: "fa-brands fa-trello" },
      { name: "Microsoft Office", icon: "fa-solid fa-file-lines" }
    ],
    networking: [
      { name: "Konfigurasi Router & Switch", icon: "fa-solid fa-network-wired" },
      { name: "Routing Statis & Dinamis", icon: "fa-solid fa-route" },
      { name: "MikroTik", icon: "fa-solid fa-microchip" },
      { name: "DHCP & DNS Server", icon: "fa-solid fa-server" },
      { name: "Web & FTP Server", icon: "fa-solid fa-globe" }
    ],
    softSkills: [
      { name: "Public Speaking", icon: "fa-solid fa-microphone-lines" },
      { name: "Leadership", icon: "fa-solid fa-users-gear" },
      { name: "Teamwork", icon: "fa-solid fa-handshake" },
      { name: "Communication", icon: "fa-solid fa-comments" },
      { name: "Critical Thinking", icon: "fa-solid fa-brain" },
      { name: "Problem Solving", icon: "fa-solid fa-lightbulb" },
      { name: "Creativity", icon: "fa-solid fa-wand-magic-sparkles" },
      { name: "Organizational Skills", icon: "fa-solid fa-sitemap" }
    ]
  },

  socialLinks: {
    email: "aryashayusuf@gmail.com",
    phone: "+62 812 258 863 092",
    whatsapp: "https://wa.me/62812258863092",
    linkedin: "https://www.linkedin.com/in/aryasha-yusuf-pratama-3a4776416"
  },

  verificationNotes: [
    {
      topic: "Tingkat Semester & Awal Pendidikan",
      detail: "Pada CV tertulis semester 8, sedangkan tahun masuk D4 Teknik Informatika tertulis 2025. Perlu konfirmasi apakah status semester mengacu pada alih jenjang atau penyesuaian kalender akademik."
    },
    {
      topic: "Periode Proyek ARKAPAN (KMIPN VIII)",
      detail: "Tercantum rentang tahun terbalik 'Juli 2026 – Agustus 2023'. Memerlukan konfirmasi urutan tahun pelaksanaan kompetisi."
    },
    {
      topic: "Periode Scrum Master Nettyzen Access",
      detail: "Tertulis Februari 2022 – Juni 2022 (bertepatan masa awal SMK). Perlu konfirmasi apakah proyek PBL dilakukan di perkuliahan atau masa sekolah."
    },
    {
      topic: "Game Artist Agate Academy (MSIB Batch 6)",
      detail: "Tertulis Februari 2027 – Juni 2027. Disimpan sebagai draft rencana/persiapan MSIB Kampus Merdeka hingga diverifikasi."
    },
    {
      topic: "Keterkaitan Nettyzen Access & AcomptStore",
      detail: "Dalam CV, proyek AcomptStore diasosiasikan dengan peranan Front-End, UI/UX, dan QA di tim Nettyzen Access."
    }
  ]
};

// Export global jika browser
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}

