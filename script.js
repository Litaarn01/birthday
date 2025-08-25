document.getElementById("btnUbahUcapan").addEventListener("click", function() {
    let nama = document.getElementById("namaInput").value.trim();
    if(nama) {
        document.getElementById("ucapan").textContent = `Halo, ${nama}! Selamat datang!`;
    } else {
        alert("Masukkan nama terlebih dahulu!");
    }
});

document.getElementById("confettiTrigger").addEventListener("click", function() {
    let nama = document.getElementById("namaInput").value.trim();
    if(nama) {
        window.location.href = `surprise.html?nama=${encodeURIComponent(nama)}`;
    } else {
        alert("Masukkan nama dulu sebelum mendapatkan kejutan!");
    }
});

