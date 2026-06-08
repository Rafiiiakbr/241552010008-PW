// DARK MODE TOGGLE
const darkBtn = document.getElementById("darkModeBtn");
function updateThemeButton() {
    if (document.body.classList.contains("dark")) {
        darkBtn.textContent = "☀️ Mode Terang";
    } else {
        darkBtn.textContent = "🌙 Mode Gelap";
    }
}

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}
updateThemeButton();

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
    updateThemeButton();
});

// TAB NAVIGATION

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        tab.classList.add("active");

        document
        .getElementById(tab.dataset.tab)
        .classList.add("active");
    });
});

// VALIDASI

function validasi(id, kondisi, pesan){

    const input = document.getElementById(id);
    const error = document.getElementById(id + "Error");

    if(kondisi(input.value)){
        error.textContent = "";
        return true;
    }

    error.textContent = pesan;
    return false;
}


// Real-time nama

document
.getElementById("nama")
.addEventListener("input", () => {

    validasi(
        "nama",
        v => v.length >= 3,
        "Minimal 3 karakter"
    );
});


// Real-time email

document
.getElementById("email")
.addEventListener("input", () => {

    validasi(
        "email",
        v => /\S+@\S+\.\S+/.test(v),
        "Email tidak valid"
    );
});


// Password strength

const password = document.getElementById("password");
const strength = document.getElementById("strength");

password.addEventListener("input", () => {

    const nilai = password.value.length;

    if(nilai < 6){
        strength.textContent = "Lemah";
    }
    else if(nilai < 10){
        strength.textContent = "Sedang";
    }
    else{
        strength.textContent = "Kuat";
    }

    validasi(
        "password",
        v => v.length >= 8,
        "Minimal 8 karakter"
    );
});


// SUBMIT FORM

document
.getElementById("formulir")
.addEventListener("submit", e => {

    e.preventDefault();

    const semuaValid = [

        validasi(
            "nama",
            v => v.length >= 3,
            "Minimal 3 karakter"
        ),

        validasi(
            "email",
            v => /\S+@\S+\.\S+/.test(v),
            "Email tidak valid"
        ),

        validasi(
            "password",
            v => v.length >= 8,
            "Minimal 8 karakter"
        )

    ].every(Boolean);

    if(!semuaValid) return;

    document
    .getElementById("sukses")
    .classList.remove("tersembunyi");

    document
    .getElementById("formulir")
    .classList.add("tersembunyi");
});