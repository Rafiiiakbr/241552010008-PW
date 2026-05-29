const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".card");

filters.forEach(btn => {

  btn.addEventListener("click", () => {

    // Hapus active sebelumnya
    filters.forEach(b => {
      b.classList.remove("active");
    });

    // Tambah active ke button yg diklik
    btn.classList.add("active");

    const cat = btn.dataset.cat;

    // Filter card
    cards.forEach(card => {

      const show =
        cat === "all" ||
        card.dataset.cat === cat;

      card.classList.toggle("hidden", !show);

    });

  });

});