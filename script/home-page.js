document.addEventListener('DOMContentLoaded', function() {

    const carousel = document.getElementById('movie-carousel');
    if (!carousel) return;

    const movieList = carousel.querySelector('.movie-list');
    const originalFilms = movieList.querySelectorAll('.list-film');
    
    if (originalFilms.length === 0) return;

    // --- TAHAP 1: DUPLIKASI ITEM UNTUK EFEK INFINITE ---
    // Kita duplikasi semua film yang ada dan tempel di bagian akhir
    originalFilms.forEach(film => {
        const clone = film.cloneNode(true);
        movieList.appendChild(clone);
    });

    let currentIndex = 0; // Melacak posisi slide
    
    // Dapatkan semua film (termasuk yang hasil duplikasi)
    const allFilms = movieList.querySelectorAll('.list-film');
    const totalOriginalFilms = originalFilms.length;

    // Hitung seberapa jauh harus bergeser
    const gap = parseInt(window.getComputedStyle(movieList).gap) || 20;
    const scrollAmount = originalFilms[0].offsetWidth + gap;

    // --- TAHAP 2: ATUR INTERVAL UNTUK SLIDE OTOMATIS ---
    setInterval(() => {
        // Pindah ke slide berikutnya
        currentIndex++;
        
        // Geser list film ke posisi yang baru
        const newTransformValue = -currentIndex * scrollAmount;
        movieList.style.transform = `translateX(${newTransformValue}px)`;

        // --- TAHAP 3: TRIK RESET POSISI SAAT MENCAPAI DUPLIKAT ---
        // Saat ini kita berada di film pertama hasil duplikasi
        if (currentIndex >= totalOriginalFilms) {
            
            // Tunggu animasi slide selesai (durasinya harus sama dengan di CSS, yaitu 0.5s atau 500ms)
            setTimeout(() => {
                // Matikan transisi agar lompatan tidak terlihat
                movieList.style.transition = 'none';
                
                // Reset index dan posisi ke awal (ke film asli pertama)
                currentIndex = 0;
                movieList.style.transform = 'translateX(0)';

                // Setelah sepersekian detik, nyalakan lagi transisinya untuk gerakan selanjutnya
                setTimeout(() => {
                    movieList.style.transition = 'transform 0.5s ease-in-out';
                }, 50);

            }, 500); // 500ms = durasi transisi di CSS
        }
    }, 3000); // Interval 3 detik
});