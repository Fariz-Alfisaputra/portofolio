# Portofolio — Muhammad Fariz Alfisaputra

Website portofolio prototype menggunakan **React + Vite + Tailwind**, dengan:
- **Galaxy background** (WebGL OGL)
- **TargetCursor** hover effect (GSAP) untuk navbar
- **Photo Stack** (3 foto menumpuk + animasi swap)
- **ElectricBorder** untuk card playlist
- **Guestbook** (dummy + input langsung muncul, tanpa backend)

## Live site
- `https://fariz-alfi-portoweb.netlify.app`

## Requirements
- Node.js 18+ (disarankan 20+)

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output build ada di folder `dist/`.

## Deploy (Netlify)

### Drag & drop
1. Jalankan `npm run build`
2. Upload **folder `dist/`** ke Netlify (Deploy manually)

### Connect GitHub (auto deploy)
- **Build command**: `npm run build`
- **Publish directory**: `dist`

## Update konten

### Foto
- Foto profil navbar kiri atas: `public/photos/pp-fariz.jpg`
- Foto stack hero:
  - `public/photos/fariz-1.jpg`
  - `public/photos/fariz-2.JPG`
  - `public/photos/fariz-3.JPG`

### Playlist (YouTube Music)
Embed ada di `src/components/YouTubePlaylistCard.tsx`, dipakai di `src/App.tsx`.

### Data & section
- Data umum: `src/lib/data.ts`
  - `thingsIDo` (Website Building, Problem Solving, Video Editing)
  - `workExperience`
  - `funFacts`
  - `seedComments` (Guestbook dummy)

### Contact links
Ada di `src/App.tsx` section `#contact`:
- Email: `mfarizalfisaputra@gmail.com`
- WhatsApp: `+6283194565515` (template chat: "Keren porto nya, boleh tanya?")
- GitHub: `Fariz-Alfisaputra`
- LinkedIn: masih placeholder (`linkedin.com/in/username`) → ganti sesuai akun kamu

### CV button
Tombol CV di hero saat ini **disabled** ("CV (soon)"), bisa diubah di `src/App.tsx`.
