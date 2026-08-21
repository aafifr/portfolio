# Folder Sertifikat Pengalaman, Kompetensi & Penghargaan

Taruh file sertifikat kamu (format PDF atau gambar PNG/JPG/WEBP) di dalam folder ini (`public/certificates/`).

### Daftar Rekomendasi Nama File:

#### 1. Pengalaman Kerja (Experience):
- `sertifikat-cybersama.pdf` — untuk PT Cybersama Technology
- `sertifikat-nfa-ai-automation.pdf` — untuk Nurul Fikri Academy (AI Automation)
- `sertifikat-nfa-web-developer.pdf` — untuk Nurul Fikri Academy (Fullstack Web)

#### 2. Sertifikasi Kompetensi & Pelatihan (Credentials):
- `sertifikat-bnsp-web-developer.pdf` — Sertifikat Kompetensi BNSP Junior Web Developer
- `sertifikat-mahasantri-terbaik-petik.pdf` — Sertifikat Program Pondok IT 1 Tahun & Mahasantri Terbaik 2 PeTIK

#### 3. Penghargaan & Lomba (Honors & Awards):
- `sertifikat-juara-1-poster-uny.pdf` — Juara 1 Lomba Poster Nasional (Media Islamic Fest 2024 UNY)

---

### Cara Akses di Kode:
Di file `src/data/portfolioData.ts` atau komponen terkait:
```ts
certificateUrl: "/certificates/nama-file-kamu.pdf"
```

> **Tips:** Pastikan ukuran file PDF/gambar telah dikompres (disarankan < 1MB per file) agar loading di browser visitor tetap instan dan cepat.
