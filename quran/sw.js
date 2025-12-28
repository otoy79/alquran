const cacheName = 'quran-v1';
const assets = [
  './',
  './index.html',
  // Tambahkan file CSS atau gambar kamu di sini jika ada, contoh:
  // './style.css',
  // './script.js'
];

// 1. Proses "Memfotokopi" file saat aplikasi dibuka pertama kali
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// 2. Proses menyajikan file "Fotokopi" saat internet mati
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});