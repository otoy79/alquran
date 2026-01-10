 // 2. PASUKAN NOTIFIKASI (Biar bisa kasih tau waktu sholat)
  function mintaIzinNotif() {
    if (!("Notification" in window)) {
      console.log("Browser tidak dukung notifikasi.");
    } else if (Notification.permission !== "granted" && Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          new Notification("Izin Aktif!", {
            body: "Siap ingatkan waktu sholat, Bossku!",
            icon: "img/icon.png"
          });
        }
      });
    }
  }

  // Jalankan minta izin pas halaman kelar loading
  window.addEventListener('load', mintaIzinNotif);
 
   // Jadwal Slolat
    const audioAdzan = document.getElementById('audioAdzan');
const statusBtn = document.getElementById('adzan-status');
let jadwalSholat = {};

// 1. Fungsi Aktifkan Suara (Unlock Audio Browser)
statusBtn.addEventListener('click', () => {
    audioAdzan.play().then(() => {
        audioAdzan.pause();
        audioAdzan.currentTime = 0;
        statusBtn.innerHTML = "✅ Adzan Otomatis Aktif (Tangerang)";
        statusBtn.style.background = "#2e7d32";
    }).catch(e => console.log("Gagal unlock audio"));
});

// 2. Ambil Jadwal Sholat dari API (Tangerang)
async function getJadwal() {
    try {
        const response = await fetch('https://api.aladhan.com/v1/timingsByCity?city=Tangerang&country=Indonesia&method=11');
        const data = await response.json();
        jadwalSholat = data.data.timings;
        console.log("Jadwal Sholat Hari Ini:", jadwalSholat);
    } catch (err) {
        console.log("Gagal ambil jadwal sholat");
    }
}

// 3. Cek Waktu Tiap Menit
setInterval(() => {
    const sekarang = new Date();
    const jam = String(sekarang.getHours()).padStart(2, '0');
    const menit = String(sekarang.getMinutes()).padStart(2, '0');
    // const waktuSekarang = `${jam}:${minit}`;
         const waktuSekarang = "01:00"; // Paksa jam tes di sini (sesuaikan jam HP Masbrow sekarang!)

    const listSholat = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
    
    listSholat.forEach(sholat => {
        if (jadwalSholat[sholat] === waktuSekarang) {
            bunyiAdzan(sholat);
        }
    });
}, 60000); // Cek tiap 60 detik

function bunyiAdzan(namaSholat) {
    // Bunyi Suara
    audioAdzan.play();
    
    // Muncul Notif HP
    if (Notification.permission === "granted") {
        new Notification(`Waktunya Sholat ${namaSholat}!`, {
            body: `Sudah masuk waktu ${namaSholat} untuk wilayah Tangerang.`,
            icon: "img/icon.png"
        });
    }
}

   statusBtn.addEventListener('click', () => {
    console.log("Tombol diklik, mencoba memutar audio...");
    
    // Coba putar langsung
    audioAdzan.play()
    .then(() => {
        console.log("Berhasil! Audio sedang diputar.");
        statusBtn.innerHTML = "✅ SUARA AKTIF!";
        statusBtn.style.background = "green";
    })
    .catch(error => {
        console.error("Gagal putar audio. Error:", error);
        alert("Gagal putar suara! Cek apakah file audio/adzan.mp3 sudah di-upload?");
    });
});
  
// Jalankan fungsi ambil jadwal
getJadwal();
  
