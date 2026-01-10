const cacheName = 'quran-pro-v8'; // Naikkan versinya!
const assets = [
  './',
  './index.html',
  './asmaul-husna.html',
  './tahlil.html',
  './doa.html',
  './tanggal.html',
  './quran.html',
  './jadwal.html',
  './css/style.css',
  './img/icon.png',
  './data/asmaul-husna.js',
  './data/tahlil.js',
  './data/doa.js',
  './data/1.js',
  './data/2.js',
  './data/3.js'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      // Pake map biar kalau satu gagal, yang lain lanjut terus
      return Promise.all(
        assets.map(url => {
          return cache.add(url).catch(err => console.log("Gagal simpan file:", url));
        })
      );
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      // Ambil dari cache, kalau gak ada baru ambil dari internet
      return res || fetch(e.request);
    })
  );
});
