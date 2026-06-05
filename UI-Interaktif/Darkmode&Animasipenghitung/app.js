// 1. Terapkan tema tersimpan saat halaman pertama kali dimuat
if (localStorage.getItem('tema') === 'gelap') {
  document.body.classList.add('gelap');
  document.querySelector('#theme-btn').textContent = 'Mode Terang';
}

// 2. Toggle tema dan simpan preferensi ke localStorage
document.querySelector('#theme-btn').addEventListener('click', (e) => {
  document.body.classList.toggle('gelap');
  const d = document.body.classList.contains('gelap');
  localStorage.setItem('tema', d ? 'gelap' : 'terang');
  e.target.textContent = d ? 'Mode Terang' : 'Mode Gelap';
});

// 3. Animasi count-up pada elemen penghitung
document.querySelectorAll('.penghitung').forEach(el => {
  const target = +el.dataset.target;
  let n = 0; 
  const langkah = target / 60; // Mengatur kecepatan penambahan angka
  
  const jalankan = () => {
    n = Math.min(n + langkah, target);
    el.textContent = Math.floor(n).toLocaleString();
    
    if (n < target) {
      requestAnimationFrame(jalankan);
    }
  };
  
  requestAnimationFrame(jalankan);
});