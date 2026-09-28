// Simulasi Loading Screen (Hilang setelah 2 detik)
setTimeout(() => {
    document.getElementById('loading-screen').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('main-menu').style.display = 'block';
    }, 500);
}, 2000);

// Fungsi Pindah Menu (Utama <-> Pembayaran)
function toggleMenu(menuId) {
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('payment-menu').style.display = 'none';
    
    // Sembunyikan detail pembayaran yang sedang terbuka
    const details = document.querySelectorAll('.payment-detail');
    details.forEach(detail => detail.style.display = 'none');

    document.getElementById(menuId).style.display = 'block';
}

// Fungsi Tampilkan Detail Pembayaran (Qris, Dana, dll)
function showDetail(type) {
    // Sembunyikan semua detail terlebih dahulu
    const details = document.querySelectorAll('.payment-detail');
    details.forEach(detail => detail.style.display = 'none');

    // Tampilkan detail yang dipilih
    document.getElementById(type + '-detail').style.display = 'block';
}

// Fungsi Ubah Warna Background
function changeTheme(color) {
    document.body.style.backgroundColor = color;
}

// Fungsi Salin Nomor Rekening/E-Wallet
function copyText(elementId) {
    const textToCopy = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Berhasil disalin: ' + textToCopy);
    }).catch(err => {
        alert('Gagal menyalin text');
    });
}
