// Tunggu hingga seluruh konten halaman dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', function() {

    // Ambil elemen-elemen form yang dibutuhkan
    const signUpForm = document.getElementById('signup-form');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const errorContainer = document.getElementById('error-messages');

    // Tambahkan event listener untuk form submission
    signUpForm.addEventListener('submit', function(event) {
        // Mencegah form dikirim secara default agar validasi bisa berjalan
        event.preventDefault();

        // Kosongkan pesan error sebelumnya
        errorContainer.innerHTML = '';
        errorContainer.style.display = 'none';

        // Array untuk menampung semua pesan kesalahan
        let errors = [];

        // --- MULAI VALIDASI ---

        // 1. Validasi "Semua field wajib isi"
        const inputs = [usernameInput, emailInput, phoneInput, passwordInput, confirmPasswordInput];
        let isAnyFieldEmpty = false;
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                isAnyFieldEmpty = true;
            }
        });
        if (isAnyFieldEmpty) {
            errors.push('Semua field wajib diisi, tidak boleh kosong.');
        }

        // 2. Validasi "Nama minimal 3 karakter"
        if (usernameInput.value.trim().length > 0 && usernameInput.value.trim().length < 3) {
            errors.push('Username minimal harus 3 karakter.');
        }

        // 3. Validasi "Email valid format"
        // Regex untuk format email umum
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim().length > 0 && !emailRegex.test(emailInput.value.trim())) {
            errors.push('Format email tidak valid (contoh: user@gmail.com).');
        }

        // 4. Validasi "No Hp hanya angka, minimal 10 digit, diawali 08"
        // Regex: diawali '08', diikuti oleh 8 digit angka atau lebih
        const phoneRegex = /^08\d{8,}$/;
        if (phoneInput.value.trim().length > 0 && !phoneRegex.test(phoneInput.value.trim())) {
            errors.push('No. HP harus diawali 08 dan minimal 10 digit angka.');
        }
        
        // 5. Validasi "Password minimal 8 karakter"
        if (passwordInput.value.trim().length > 0 && passwordInput.value.trim().length < 8) {
            errors.push('Password minimal harus 8 karakter.');
        }
        
        // 6. Validasi "Konfirmasi password harus sama"
        if (confirmPasswordInput.value.trim().length > 0 && passwordInput.value.trim() !== confirmPasswordInput.value.trim()) {
            errors.push('Konfirmasi password tidak sama dengan password.');
        }

        // --- SELESAI VALIDASI ---

        // Cek jika ada error yang ditemukan
        if (errors.length > 0) {
            // Jika ada, tampilkan semua error dalam bentuk list
            errorContainer.style.display = 'block';
            const errorList = document.createElement('ul');
            errors.forEach(error => {
                const listItem = document.createElement('li');
                listItem.innerText = error;
                errorList.appendChild(listItem);
            });
            errorContainer.appendChild(errorList);
        } else {
            // Jika tidak ada error, pendaftaran berhasil!
            alert('Pendaftaran Berhasil!');
            
            
            const user = {
                username: usernameInput.value.trim(),
                email: emailInput.value.trim(),
                phone: phoneInput.value.trim(),
                password: passwordInput.value.trim()
            };
            localStorage.setItem('user', JSON.stringify(user));

            signUpForm.reset();

            window.location.href = 'login.html';

            
        }
    });
});