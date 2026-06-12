document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Animasi Scroll Reveal (Memunculkan elemen)
    const daftarElemenMuncul = document.querySelectorAll('.elemen-muncul');

    function periksaVisibilitasElemen() {
        const tinggiJendela = window.innerHeight;
        const titikPemicu = 120;

        daftarElemenMuncul.forEach(elemen => {
            const posisiElemen = elemen.getBoundingClientRect().top;
            if (posisiElemen < tinggiJendela - titikPemicu) {
                elemen.classList.add('tampil');
            }
        });
    }

    periksaVisibilitasElemen();
    window.addEventListener('scroll', periksaVisibilitasElemen);

    // 2. Navbar Sticky 
    const bilahNavigasi = document.getElementById('navigasi');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            bilahNavigasi.classList.add('scrolled');
        } else {
            bilahNavigasi.classList.remove('scrolled');
        }
    });

    // 3. Menu Burger Mobile
    const tombolBurger = document.getElementById('tombol-burger');
    const menuNavigasi = document.getElementById('menu-navigasi');

    tombolBurger.addEventListener('click', function() {
        this.classList.toggle('aktif');
        menuNavigasi.classList.toggle('aktif');
    });

    // Tutup dropdown mobile jika link biasa diklik
    const tautanMobile = document.querySelectorAll('.tautan-navigasi li:not(.wadah-tombol-mobile) a');
    tautanMobile.forEach(tautan => {
        tautan.addEventListener('click', () => {
            tombolBurger.classList.remove('aktif');
            menuNavigasi.classList.remove('aktif');
        });
    });

});