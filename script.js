Fungsi Pindah Halaman
function bukaHalaman(idHalaman) {
    Sembunyikan semua section
    document.getElementById('menuUtama').style.display = 'none';
    document.getElementById('halamanAbjad').style.display = 'none';
    document.getElementById('halamanGame').style.display = 'none';
    
    // Tampilkan halaman yang diminta
    document.getElementById(idHalaman).style.display = 'block';
}

Database Lokasi Gambar
const databaseIsyarat = {
    "a": "assets/a.jpeg", "b": "assets/b.jpeg", "c": "assets/c.jpeg",
    "d": "assets/d.jpeg", "e": "assets/e.jpeg", "f": "assets/f.jpeg",
    "g": "assets/g.jpeg", "h": "assets/h.jpeg", "i": "assets/i.jpeg",
    "j": "assets/j.jpeg", "k": "assets/k.jpeg", "l": "assets/l.jpeg",
    "m": "assets/m.jpeg", "n": "assets/n.jpeg", "o": "assets/o.jpeg",
    "p": "assets/p.jpeg", "q": "assets/q.jpeg", "r": "assets/r.jpeg",
    "s": "assets/s.jpeg", "t": "assets/t.jpeg", "u": "assets/u.jpeg",
    "v": "assets/v.jpeg", "w": "assets/w.jpeg", "x": "assets/x.jpeg",
    "y": "assets/y.jpeg", "z": "assets/z.jpeg", " ": "assets/spasi.jpeg" 
};

Fungsi Translator Abjad
function translateKeIsyarat() {
    const teks = document.getElementById('inputTeks').value.toLowerCase();
    const display = document.getElementById('displayIsyarat');
    display.innerHTML = ""; // Bersihkan tampilan lama

    for (let huruf of teks) {
        if (databaseIsyarat[huruf]) {
            const img = document.createElement('img');
            img.src = databaseIsyarat[huruf];
            display.appendChild(img);
        }
    }
}

 Logika Game
let hurufTarget = "";
let skor = 0;

function startGame() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    hurufTarget = alphabet[Math.floor(Math.random() * alphabet.length)];
    
    const gameDisplay = document.getElementById('gameDisplay');
    const tebakInput = document.getElementById('tebakInput');
    const feedback = document.getElementById('feedback');
    
    Update Tampilan Soal
    gameDisplay.innerHTML = `<img src="assets/${hurufTarget}.jpeg">`;
    tebakInput.style.display = "inline-block";
    tebakInput.value = "";
    tebakInput.focus();
    feedback.innerText = "";
    document.getElementById('btnGame').innerText = "Ganti Huruf";

    // Cek Input User
    tebakInput.oninput = function() {
        if (this.value.toLowerCase() === hurufTarget) {
            feedback.innerText = "✨ BENAR!";
            skor += 10;
            document.getElementById('skor').innerText = skor;
            
            Tunggu sebentar lalu ganti soal otomatis
            setTimeout(startGame, 800);
        }
    };
}