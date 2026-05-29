const TOTAL = 25 * 60; // 25 menit dalam detik

let remaining = TOTAL;
let interval = null;

// format waktu
function updateDisplay() {

  const m = String(
    Math.floor(remaining / 60)
  ).padStart(2, "0");

  const s = String(
    remaining % 60
  ).padStart(2, "0");

  document.querySelector("#display")
    .textContent = `${m}:${s}`;

  // progress bar
  const pct = (remaining / TOTAL) * 100;

  document.querySelector("#bar")
    .style.width = pct + "%";
}

// countdown
function tick() {

  remaining--;

  if (remaining <= 0) {

    clearInterval(interval);

    interval = null;

    remaining = 0;

    updateDisplay();

    document.querySelector("#status")
      .textContent = "Selesai!";

    return;
  }

  updateDisplay();
}

// START
document.querySelector("#start")
  .addEventListener("click", () => {

    if (interval) return;

    interval = setInterval(tick, 1000);

    document.querySelector("#status")
      .textContent = "Berjalan...";
  });

// PAUSE
document.querySelector("#pause")
  .addEventListener("click", () => {

    clearInterval(interval);

    interval = null;

    document.querySelector("#status")
      .textContent = "Dijeda";
  });

// RESET
document.querySelector("#reset")
  .addEventListener("click", () => {

    clearInterval(interval);

    interval = null;

    remaining = TOTAL;

    updateDisplay();

    document.querySelector("#status")
      .textContent = "Direset";
  });

// pertama kali load
updateDisplay();