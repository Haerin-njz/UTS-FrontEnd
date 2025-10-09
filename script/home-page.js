document.addEventListener('DOMContentLoaded', function() {

    const carousel = document.getElementById('movie-carousel');
    if (!carousel) return;

    const movieList = carousel.querySelector('.movie-list');
    const prevArrow = carousel.querySelector('.prev-arrow');
    const nextArrow = carousel.querySelector('.next-arrow');
    const originalFilms = movieList.querySelectorAll('.list-film');
    
    if (originalFilms.length === 0) return;

    // --- SETUP UNTUK INFINITE LOOP ---
    originalFilms.forEach(film => {
        const clone = film.cloneNode(true);
        movieList.appendChild(clone);
    });

    let currentIndex = 0;
    const totalOriginalFilms = originalFilms.length;
    const gap = parseInt(window.getComputedStyle(movieList).gap) || 20;
    const scrollAmount = originalFilms[0].offsetWidth + gap;
    let autoSlideInterval;

    // --- FUNGSI UTAMA UNTUK MENGGERAKKAN SLIDE ---
    const moveToSlide = (index) => {
        // Geser list film
        movieList.style.transform = `translateX(${-index * scrollAmount}px)`;

        // Trik reset posisi saat mencapai duplikat
        if (index >= totalOriginalFilms) {
            setTimeout(() => {
                movieList.style.transition = 'none';
                currentIndex = 0;
                movieList.style.transform = 'translateX(0)';
                setTimeout(() => {
                    movieList.style.transition = 'transform 0.5s ease-in-out';
                }, 50);
            }, 500);
        }
    };

    // --- FUNGSI UNTUK SLIDE OTOMATIS ---
    const startAutoSlide = () => {
        autoSlideInterval = setInterval(() => {
            currentIndex++;
            moveToSlide(currentIndex);
        }, 3000); // Interval 3 detik
    };

    // --- EVENT LISTENER UNTUK TOMBOL PANAH ---
    nextArrow.addEventListener('click', () => {
        // Hentikan dan reset timer otomatis
        clearInterval(autoSlideInterval);
        startAutoSlide();
        
        // Pindah ke slide berikutnya
        currentIndex++;
        moveToSlide(currentIndex);
    });

    prevArrow.addEventListener('click', () => {
        // Hentikan dan reset timer otomatis
        clearInterval(autoSlideInterval);
        startAutoSlide();

        // Cek jika sedang di slide pertama
        if (currentIndex <= 0) {
            // Logika untuk lompat ke belakang (opsional, bisa disesuaikan)
            // Untuk simple, kita tidak lakukan apa-apa, atau bisa lompat ke akhir
            return; 
        }
        
        // Pindah ke slide sebelumnya
        currentIndex--;
        moveToSlide(currentIndex);
    });

    // --- MULAI SLIDE OTOMATIS SAAT HALAMAN DIBUKA ---
    startAutoSlide();
});