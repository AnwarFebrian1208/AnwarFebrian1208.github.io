// Tunggu hingga seluruh DOM selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Inisialisasi AOS (Animate On Scroll)
    AOS.init({
        duration: 800,      // Durasi animasi (ms)
        easing: 'ease-out', // Efek transisi smooth
        once: true,         // Animasi hanya berjalan satu kali saat di-scroll
        offset: 50,         // Jarak (px) dari bawah layar sebelum animasi dimulai
    });

    // 2. Navbar Scroll Effect (Opsional tapi direkomendasikan)
    // Menambahkan bayangan pada navbar saat di-scroll ke bawah
    const navbar = document.querySelector('.custom-navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
});

// 3. Mobile Navbar Auto-Collapse
    // Menutup hamburger menu secara otomatis saat link diklik (khusus mobile)
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const menuToggle = document.getElementById('navbarNav');
    
    // Pastikan elemen Bootstrap collapse tersedia
    if (typeof bootstrap !== 'undefined') {
        const bsCollapse = new bootstrap.Collapse(menuToggle, {
            toggle: false
        });

        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                if (menuToggle.classList.contains('show')) {
                    bsCollapse.toggle();
                }
            });
        });
    }