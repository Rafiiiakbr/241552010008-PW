const input = document.querySelector("#angka");
const button = document.querySelector("#btn");
const hasil = document.querySelector("#hasil");

// fungsi tampilkan hasil
function tampilkanAngka(){

  const angka = input.value;

  // cek kosong
  if(angka === ""){
    hasil.textContent = "Silakan masukkan angka!";
  }else{
    hasil.textContent = 
      `Kamu memasukkan angka: ${angka}`;
  }

  // tampilkan hasil
  hasil.classList.remove("hidden");

  // kosongkan input
  input.value = "";

  // fokus kembali ke input
  input.focus();
}

// klik button
button.addEventListener("click", tampilkanAngka);

// tekan enter
input.addEventListener("keydown", function(e){

  if(e.key === "Enter"){
    tampilkanAngka();
  }

});