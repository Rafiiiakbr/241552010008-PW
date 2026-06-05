// 1. Tab Navigation
const semuaTombol = document.querySelectorAll('.tombol-tab');
const semuaPanel = document.querySelectorAll('.panel');

function gantiTab(idTab) {
  semuaTombol.forEach(btn => {
    btn.classList.toggle('aktif', btn.dataset.tab === idTab);
  });
  semuaPanel.forEach(panel => {
    panel.classList.toggle('aktif', panel.id === idTab);
  });
}

semuaTombol.forEach(btn => {
  btn.addEventListener('click', () => gantiTab(btn.dataset.tab));
});

// 2. Animasi penghitung statistik
function jalankanPenghitung() {
  document.querySelectorAll('.kartu-stat').forEach(kartu => {
    const el = kartu.querySelector('.penghitung');
    const target = +kartu.dataset.target;
    let n = 0;
    const langkah = target / 60;

    const jalankan = () => {
      n = Math.min(n + langkah, target);
      el.textContent = Math.floor(n).toLocaleString();
      if (n < target) requestAnimationFrame(jalankan);
    };
    requestAnimationFrame(jalankan);
  });
}
// Jalankan langsung saat halaman terbuka
jalankanPenghitung();

// 3. Accordion Toggle
const judulAkordion = document.querySelector('.judul-akordion');
if (judulAkordion) {
  judulAkordion.addEventListener('click', () => {
    judulAkordion.parentElement.classList.toggle('buka');
  });
}

// 4. Dark Mode Global (localStorage)
if (localStorage.getItem('tema') === 'gelap') {
  document.body.classList.add('gelap');
}

const tombolTema = document.querySelector('#theme-btn');
if (tombolTema) {
  tombolTema.addEventListener('click', () => {
    document.body.classList.toggle('gelap');
    const isGelap = document.body.classList.contains('gelap');
    localStorage.setItem('tema', isGelap ? 'gelap' : 'terang');
  });
}