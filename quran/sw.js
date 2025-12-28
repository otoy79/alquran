const cacheName = 'quran-v3';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './sw.js',
  './LPMQ.ttf'
];

// Instalasi & Simpan Aset ke Cache
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      // Kita pakai 'addAll' agar semua file masuk ke memori HP
      return cache.addAll(assets);
    })
  );
});

// Ambil data dari Cache kalau Offline
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});