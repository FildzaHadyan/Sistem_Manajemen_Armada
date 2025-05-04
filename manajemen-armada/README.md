# Manajemen Armada Transjakarta (Frontend)

Aplikasi React + Vite untuk menampilkan & memfilter data kendaraan MBTA,
dengan pagination, filter Rute/Trip, dan detail kendaraan.

API MBTA: Dokumentasi lengkap tersedia di https://api-v3.mbta.com/docs/swagger/index.html

## Teknologi

- React + Vite
- TailwindCSS
- Axios
- HeadlessUI

## Cara Menjalankan

1. `git clone <repo-url>`
2. `npm install`
3. `npm run dev`
4. Buka `http://localhost:5173`

## Arsitektur

- `src/services/api.js` → API layer
- `src/pages/Home.jsx` → Halaman utama dengan fetching, filter, pagination
- `src/components/` → UI komponen: Card, Filter, Pagination, Vehicle Detail Modal
- `src/index.css` → Tailwind directives & global CSS
- `App.jsx` & `main.jsx` → Routing & entry point
