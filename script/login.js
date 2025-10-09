document.addEventListener('DOMContentLoaded', function() {

    // --- Seleksi Elemen dari HTML ---
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    
    // Buat elemen untuk pesan error secara dinamis
    let errorMessage = document.querySelector('.error-message');
    if (!errorMessage) {
        errorMessage = document.createElement('p');
        errorMessage.className = 'error-message';
        // Tambahkan elemen error di dalam form, sebelum tombol
        loginForm.appendChild(errorMessage);
    }
    errorMessage.style.display = 'none';

    // --- Fungsi untuk Toggle Password Visibility ---
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.textContent = type === 'password' ? 'visibility' : 'visibility_off';
    });

    // --- Fungsi untuk Submit Form Login ---
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === '' || password === '') {
            errorMessage.textContent = 'Username dan Password tidak boleh kosong!';
            errorMessage.style.display = 'block';
            return;
        }

        // Simulasi Login (username: user, password: 12345)
        if (username === 'user' && password === '12345') {
            errorMessage.style.display = 'none';
            alert('Login berhasil! Anda akan diarahkan ke halaman utama.');
            window.location.href = 'home-page.html'; 
        } else {
            errorMessage.textContent = 'Username atau Password salah!';
            errorMessage.style.display = 'block';
        }
    });
});