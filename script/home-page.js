// Menunggu hingga seluruh halaman HTML dimuat sebelum menjalankan script
document.addEventListener("DOMContentLoaded", function() {

    const isLoggedIn = localStorage.getItem('isLoggedIn');

    // Ambil elemen dari HTML
    const authButtons = document.getElementById('auth-buttons');
    const userIcon = document.getElementById('user-icon');

    if (isLoggedIn === 'true') {
        // Jika user sudah login, sembunyikan tombol login/signup dan tampilkan ikon
        authButtons.style.display = 'none';
        userIcon.style.display = 'block';
    } else {
        // Jika user belum login, tampilkan tombol login/signup dan sembunyikan ikon
        authButtons.style.display = 'flex'; // atau 'block'
        userIcon.style.display = 'none';
    }

    // Mencari semua elemen carousel yang ada di halaman
    const carousels = document.querySelectorAll('.carousel');

    // Melakukan loop untuk setiap carousel yang ditemukan
    carousels.forEach(carousel => {
        const movieList = carousel.querySelector('.movie-list');
        const prevArrow = carousel.querySelector('.prev-arrow');
        const nextArrow = carousel.querySelector('.next-arrow');

        // Jika salah satu elemen penting tidak ditemukan, lewati carousel ini
        if (!movieList || !prevArrow || !nextArrow) {
            return;
        }

        // Fungsi untuk menggeser carousel
        const scroll = (direction) => {
            // Menghitung seberapa jauh harus bergeser: lebar satu film + jarak (gap)
            const scrollAmount = movieList.querySelector('.list-film').offsetWidth + 20; // 20 adalah nilai gap di CSS
            
            if (direction === 'next') {
                movieList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            } else {
                movieList.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
        };

        // Menambahkan event listener saat tombol panah kanan diklik
        nextArrow.addEventListener('click', () => {
            scroll('next');
        });

        // Menambahkan event listener saat tombol panah kiri diklik
        prevArrow.addEventListener('click', () => {
            scroll('prev');
        });
    });
});