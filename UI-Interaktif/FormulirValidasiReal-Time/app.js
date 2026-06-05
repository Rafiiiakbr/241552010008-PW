/**
 * Fungsi Utama Validasi
 * Memeriksa kecocokan nilai input dengan kondisi, lalu menampilkan pesan error jika tidak sesuai.
 */
function validasi(id, fungsiKondisi, pesanError) {
  const inputEl = document.getElementById(id);
  const errorEl = inputEl.parentElement.querySelector('.pesan-error');
  const nilai = inputEl.value;

  if (fungsiKondisi(nilai)) {
    errorEl.textContent = ''; // Hapus pesan error jika valid
    return true;
  } else {
    errorEl.textContent = pesanError; // Tampilkan pesan error jika tidak valid
    return false;
  }
}

// Penanganan Submit Formulir
document.querySelector('#formulir').addEventListener('submit', e => {
  e.preventDefault();

  // Validasi seluruh field secara bersamaan
  const semuaValid = [
    validasi('nama', v => v.length >= 3, 'Min. 3 karakter'),
    
    // PERUBAHAN DI SINI: Regex diubah khusus untuk mendeteksi akhiran @gmail.com
    validasi(
      'email', 
      v => /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(v), 
      'Email tidak valid! Harus menggunakan @gmail.com'
    ),
      ].every(Boolean);
    // Logika Pengecekan Kekuatan Password
const passwordInput = document.getElementById('password');
const isianBilah = document.querySelector('.isian');

passwordInput.addEventListener('input', () => {
  const nilai = passwordInput.value;
  let skor = 0;

  // Jika input kosong, reset bilah indikator
  if (nilai.length === 0) {
    isianBilah.className = 'isian';
    return;
  }

  // Kriteria Penilaian
  if (nilai.length >= 8) skor++;                        // Panjang minimal 8 karakter
  if (/[A-Z]/.test(nilai) && /[a-z]/.test(nilai)) skor++; // Kombinasi huruf besar & kecil
  if (/[0-9]/.test(nilai)) skor++;                      // Memiliki angka
  if (/[^A-Za-z0-9]/.test(nilai)) skor++;               // Memiliki simbol (!@#$ dll)

  // Penentuan Status Berdasarkan Skor
  if (nilai.length < 8 || skor <= 1) {
    isianBilah.className = 'isian lemah';
  } else if (skor === 2 || skor === 3) {
    isianBilah.className = 'isian sedang';
  } else if (skor >= 4) {
    isianBilah.className = 'isian kuat';
  }
});


  if (!semuaValid) return; // Hentikan proses jika ada field yang tidak valid

  // Sembunyikan form dan tampilkan pesan sukses
  document.querySelector('#sukses').classList.remove('tersembunyi');
  document.querySelector('#formulir').classList.add('tersembunyi');

  // Redirect ke halaman dashboard setelah 2 detik
  setTimeout(() => {
    window.location.href = '/dashboard';
  }, 2000);
});