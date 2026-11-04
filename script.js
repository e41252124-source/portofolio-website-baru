/**
 * PORTFOLIO JAVASCRIPT LOGIC
 * Aryasha Yusuf Pratama - Portfolio Website
 * Fitur: Navigation, Dark/Light Mode, Project Filter, Project Modal (Text-Only),
 * Certificate Preview Modal, Avatar Fallback, Mailto Contact Form, Real CV Download, ScrollSpy
 */

// Helper global error handler untuk foto profil & sertifikat
if (typeof window.handleProfileImageError !== "function") {
  window.handleProfileImageError = function(img) {
    if (!img) return;
    img.style.display = "none";
    const fallback = document.getElementById("avatar-fallback");
    if (fallback) {
      fallback.classList.add("show");
    }
  };
}

if (typeof window.handleCertImgError !== "function") {
  window.handleCertImgError = function(img) {
    if (!img) return;
    img.style.display = "none";
    const parent = img.parentElement;
    if (parent) {
      const noImg = parent.querySelector(".cert__no-img");
      if (noImg) noImg.style.display = "flex";
      const overlay = parent.querySelector(".cert__img-overlay");
      if (overlay) overlay.style.display = "none";
      parent.style.cursor = "default";
    }
    const card = img.closest ? img.closest(".cert__card") : null;
    if (card) {
      const btn = card.querySelector(".cert__btn-preview");
      if (btn) {
        btn.innerHTML = `<i class="fa-solid fa-file-circle-check"></i> Bukti Terdaftar di CV`;
        btn.style.opacity = "0.75";
        btn.style.cursor = "default";
        btn.setAttribute("title", "Dokumentasi gambar sertifikat dapat ditambahkan ke folder assets");
      }
    }
  };
}

document.addEventListener("DOMContentLoaded", () => {
  // 1. Tahun Dinamis Footer
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Deteksi & Inisialisasi Foto Profil Hero
  const profileImg = document.getElementById("profile-img");
  const avatarFallback = document.getElementById("avatar-fallback");

  if (profileImg) {
    // Periksa bila gambar langsung error atau belum ada
    profileImg.addEventListener("error", () => {
      handleProfileImageError(profileImg);
    });

    // Jika gambar sudah selesai load tapi naturalWidth = 0
    if (profileImg.complete) {
      if (profileImg.naturalWidth === 0) {
        handleProfileImageError(profileImg);
      }
    }
  }

  // 3. Deteksi Gambar Sertifikat yang Sudah Ada / Belum
  const certImgs = document.querySelectorAll(".cert__img");
  certImgs.forEach((img) => {
    img.addEventListener("error", () => {
      handleCertImgError(img);
    });
    if (img.complete && img.naturalWidth === 0) {
      handleCertImgError(img);
    }
  });

  // 4. Mobile Menu Toggle
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }

  if (navClose && navMenu) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }

  // Tutup mobile menu saat salah satu link diklik
  const navLinks = document.querySelectorAll(".nav__link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu && navMenu.classList.contains("show-menu")) {
        navMenu.classList.remove("show-menu");
      }
    });
  });

  // Tutup mobile menu saat klik di luar area menu
  document.addEventListener("click", (e) => {
    if (navMenu && navMenu.classList.contains("show-menu")) {
      if (!navMenu.contains(e.target) && navToggle && !navToggle.contains(e.target)) {
        navMenu.classList.remove("show-menu");
      }
    }
  });

  // 5. Header Background Blur & Scroll To Top Visibility
  const header = document.getElementById("header");
  const scrollUpBtn = document.getElementById("scroll-up");

  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;

    if (header) {
      if (scrollY >= 50) {
        header.classList.add("scroll-header");
      } else {
        header.classList.remove("scroll-header");
      }
    }

    if (scrollUpBtn) {
      if (scrollY >= 400) {
        scrollUpBtn.classList.add("show-scroll");
      } else {
        scrollUpBtn.classList.remove("show-scroll");
      }
    }
  });

  // 6. Scroll Spy (Active Link Highlight)
  const sections = document.querySelectorAll("section[id]");
  function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");
      const targetNav = document.querySelector(`.nav__menu a[href*='${sectionId}']`);

      if (targetNav) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetNav.classList.add("active-link");
        } else {
          targetNav.classList.remove("active-link");
        }
      }
    });
  }
  window.addEventListener("scroll", scrollActive);

  // 7. Dark & Light Mode Theme Toggle
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const htmlRoot = document.documentElement;

  // Baca preferensi dari localStorage
  const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
  htmlRoot.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = htmlRoot.getAttribute("data-theme");
      const nextTheme = currentTheme === "dark" ? "light" : "dark";

      htmlRoot.setAttribute("data-theme", nextTheme);
      localStorage.setItem("portfolio-theme", nextTheme);
      updateThemeIcon(nextTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === "light") {
      themeIcon.classList.remove("fa-moon");
      themeIcon.classList.add("fa-sun");
    } else {
      themeIcon.classList.remove("fa-sun");
      themeIcon.classList.add("fa-moon");
    }
  }

  // 8. Filter Proyek
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project__card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      projectCards.forEach((card) => {
        const cardCat = card.getAttribute("data-category");
        if (filterValue === "all" || cardCat === filterValue) {
          card.classList.remove("hide");
        } else {
          card.classList.add("hide");
        }
      });
    });
  });

  // 9. Modal Detail Proyek (Text-Only, No Dummy Images)
  const projectModal = document.getElementById("project-modal");
  const projectModalContent = document.getElementById("modal-content");
  const projectModalClose = document.getElementById("modal-close");
  const projectModalOverlay = document.getElementById("modal-overlay");
  const viewDetailBtns = document.querySelectorAll(".view-detail-btn");
  let lastActiveProjectTrigger = null;

  function openProjectModal(projectId, triggerBtn) {
    lastActiveProjectTrigger = triggerBtn;

    // Ambil data proyek dari centralized PORTFOLIO_DATA jika tersedia
    let project = null;
    if (typeof PORTFOLIO_DATA !== "undefined" && PORTFOLIO_DATA.projects) {
      project = PORTFOLIO_DATA.projects.find((p) => p.id === projectId);
    }

    if (!project) return;

    projectModalContent.innerHTML = `
      <div class="project__header" style="margin-bottom: 0.75rem;">
        <div class="project__icon-box"><i class="${project.icon}"></i></div>
        <span class="project__cat">${escapeHtml(project.categoryLabel || "Proyek")}</span>
      </div>
      <h2 class="modal-title" id="project-modal-title">${escapeHtml(project.title)}</h2>
      <div class="modal-role"><i class="fa-solid fa-user-gear"></i> ${escapeHtml(project.role)}</div>
      <p class="modal-desc">${escapeHtml(project.description)}</p>

      <h4 class="modal-section-title"><i class="fa-solid fa-sparkles"></i> Fitur & Implementasi Utama</h4>
      <ul class="modal-features">
        ${(project.features || []).map((f) => `<li>${escapeHtml(f)}</li>`).join("")}
      </ul>

      <h4 class="modal-section-title"><i class="fa-solid fa-layer-group"></i> Teknologi yang Digunakan</h4>
      <div class="modal-tags">
        ${(project.techStack || []).map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
      </div>

      ${project.note ? `
        <div class="modal-note">
          <i class="fa-solid fa-circle-info"></i> ${escapeHtml(project.note)}
        </div>
      ` : ""}
    `;

    projectModal.classList.add("active");
    projectModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    // Fokus ke tombol close untuk accessibility
    if (projectModalClose) projectModalClose.focus();
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove("active");
    projectModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    // Kembalikan fokus keyboard ke trigger button
    if (lastActiveProjectTrigger) {
      lastActiveProjectTrigger.focus();
    }
  }

  viewDetailBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute("data-target");
      openProjectModal(targetId, btn);
    });
  });

  if (projectModalClose) projectModalClose.addEventListener("click", closeProjectModal);
  if (projectModalOverlay) projectModalOverlay.addEventListener("click", closeProjectModal);

  // 10. Modal Pratinjau Sertifikat Asli (Dedicated Certificate Modal)
  const certModal = document.getElementById("certificate-modal");
  const certModalImg = document.getElementById("cert-modal-img");
  const certModalTitle = document.getElementById("cert-modal-title");
  const certModalIssuer = document.getElementById("cert-modal-issuer");
  const certModalDate = document.getElementById("cert-modal-date");
  const certModalDesc = document.getElementById("cert-modal-desc");
  const certModalClose = document.getElementById("cert-modal-close");
  const certModalOverlay = document.getElementById("cert-modal-overlay");
  let lastActiveCertTrigger = null;

  function openCertModal(certData, triggerBtn) {
    if (!certModal || !certData) return;
    lastActiveCertTrigger = triggerBtn;

    // Periksa apakah gambar sertifikat valid
    const imgTest = new Image();
    imgTest.src = certData.image;
    imgTest.onload = () => {
      certModalImg.src = certData.image;
      certModalImg.alt = `Sertifikat ${certData.title}`;
      certModalTitle.textContent = certData.title;
      certModalIssuer.innerHTML = `<i class="fa-solid fa-building-columns"></i> ${escapeHtml(certData.issuer || "")}`;
      certModalDate.innerHTML = `<i class="fa-regular fa-calendar-check"></i> ${escapeHtml(certData.date || "")}`;
      certModalDesc.textContent = certData.description || "";

      certModal.classList.add("active");
      certModal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";

      if (certModalClose) certModalClose.focus();
    };

    imgTest.onerror = () => {
      alert(`Gambar sertifikat asli belum ditemukan di path:\n${certData.image}\n\nAnda dapat memasukkan file foto sertifikat asli ke folder tersebut untuk mengaktifkan pratinjau penuh.`);
    };
  }

  function closeCertModal() {
    if (!certModal) return;
    certModal.classList.remove("active");
    certModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (lastActiveCertTrigger) {
      lastActiveCertTrigger.focus();
    }
  }

  // Event listener tombol "Lihat Sertifikat"
  const certPreviewBtns = document.querySelectorAll(".cert__btn-preview");
  certPreviewBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute("data-cert-target");
      let certData = null;
      if (typeof PORTFOLIO_DATA !== "undefined" && PORTFOLIO_DATA.certifications) {
        certData = PORTFOLIO_DATA.certifications.find((c) => c.id === targetId);
      }
      if (certData) {
        openCertModal(certData, btn);
      }
    });
  });

  // Event listener klik thumbnail foto sertifikat
  const certImgWraps = document.querySelectorAll(".cert__img-wrap");
  certImgWraps.forEach((wrap) => {
    wrap.addEventListener("click", (e) => {
      // Jika error no-img sedang tampil, jangan buka modal
      const noImg = wrap.querySelector(".cert__no-img");
      if (noImg && noImg.style.display !== "none") return;

      const certId = wrap.closest(".cert__card")?.getAttribute("data-cert-id");
      let certData = null;
      if (typeof PORTFOLIO_DATA !== "undefined" && PORTFOLIO_DATA.certifications) {
        certData = PORTFOLIO_DATA.certifications.find((c) => c.id === certId);
      }
      if (!certData) {
        certData = {
          image: wrap.getAttribute("data-img-src"),
          title: wrap.getAttribute("data-title"),
          issuer: wrap.getAttribute("data-issuer"),
          date: wrap.getAttribute("data-date"),
          description: wrap.getAttribute("data-desc")
        };
      }
      if (certData) {
        openCertModal(certData, wrap);
      }
    });
  });

  if (certModalClose) certModalClose.addEventListener("click", closeCertModal);
  if (certModalOverlay) certModalOverlay.addEventListener("click", closeCertModal);

  // 11. Global Keyboard Navigation (ESC to close any active modal)
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (projectModal && projectModal.classList.contains("active")) {
        closeProjectModal();
      }
      if (certModal && certModal.classList.contains("active")) {
        closeCertModal();
      }
    }
  });

  // 12. Contact Form Handling (Transparan via Mailto, Bukan Simulasi Palsu)
  const contactForm = document.getElementById("contact-form");
  const formAlert = document.getElementById("form-alert");
  const submitBtn = document.getElementById("submit-btn");
  const spinner = document.getElementById("form-spinner");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameVal = document.getElementById("name").value.trim();
      const emailVal = document.getElementById("email").value.trim();
      const subjectVal = (document.getElementById("subject")?.value || "").trim();
      const messageVal = document.getElementById("message").value.trim();

      if (!nameVal || !emailVal || !messageVal) {
        showFormAlert("Harap isi seluruh kolom yang bertanda bintang (*).", "error");
        return;
      }

      // Validasi format email regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailVal)) {
        showFormAlert("Harap masukkan format alamat email yang valid.", "error");
        return;
      }

      const recipient = "aryashayusuf@gmail.com";
      const subjectLine = subjectVal ? `[Portofolio] ${subjectVal} - dari ${nameVal}` : `[Portofolio] Pesan dari ${nameVal}`;
      const emailBody = `Halo Aryasha Yusuf Pratama,

Nama Pengirim: ${nameVal}
Email Pengirim: ${emailVal}

Pesan:
${messageVal}

---
Dikirim melalui formulir kontak portofolio.`;

      const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(emailBody)}`;

      // Buka aplikasi email
      window.location.href = mailtoUrl;

      showFormAlert(
        `Membuka aplikasi email Anda untuk mengirim pesan kepada <strong>${recipient}</strong>.<br><small style="opacity:0.9;">Jika aplikasi email tidak terbuka otomatis, silakan kirim langsung pesan Anda ke <a href="mailto:${recipient}" style="color:inherit; text-decoration:underline;">${recipient}</a>.</small>`,
        "success"
      );

      contactForm.reset();
    });
  }

  function showFormAlert(message, type) {
    if (!formAlert) return;
    formAlert.innerHTML = message;
    formAlert.className = `form-alert ${type}`;
    formAlert.style.display = "block";

    setTimeout(() => {
      formAlert.style.display = "none";
    }, 10000);
  }

  function escapeHtml(string) {
    if (!string) return "";
    const div = document.createElement("div");
    div.innerText = string;
    return div.innerHTML;
  }

  // 13. Download CV Asli
  const downloadCvBtn = document.getElementById("download-cv");
  if (downloadCvBtn) {
    downloadCvBtn.addEventListener("click", (e) => {
      // Biarkan browser mengunduh file PDF secara alami melalui atribut download
      // Berikan notifikasi bantuan jika ada kendala
      const cvPath = downloadCvBtn.getAttribute("href") || "assets/cv/CV_Aryasha_Yusuf_Pratama.pdf";
      fetch(cvPath, { method: "HEAD" })
        .then((res) => {
          if (!res.ok) {
            e.preventDefault();
            alert("File CV sedang disiapkan. Silakan hubungi aryashayusuf@gmail.com untuk meminta CV langsung.");
          }
        })
        .catch(() => {
          // Bila di environment lokal tanpa server CORS head, biarkan unduhan default berjalan
        });
    });
  }
});
