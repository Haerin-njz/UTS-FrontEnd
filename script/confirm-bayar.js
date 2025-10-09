document.addEventListener("DOMContentLoaded", () => {
  const bayarBtn = document.getElementById("bayarBtn");
  const historyBtn = document.getElementById("historyBtn");
  const popup = document.getElementById("popup");
  const okBtn = document.getElementById("okBtn");

  bayarBtn.addEventListener("click", () => {
    const va = document.getElementById("vaSelect").value;
    const card = document.getElementById("cardSelect").value;

    // Validasi: salah satu metode harus dipilih
    if (va === "" && card === "") {
      alert("Silakan pilih salah satu metode pembayaran terlebih dahulu!");
      return;
    }

    // Simpan ke localStorage (opsional)
    localStorage.setItem("metodePembayaran", va || card);

    // Tampilkan pop-up pembayaran berhasil
    popup.style.display = "flex";
  });

  okBtn.addEventListener("click", () => {
    // Tutup popup dan ubah tombol
    popup.style.display = "none";
    bayarBtn.style.display = "none";
    historyBtn.style.display = "inline-block";
  });

  historyBtn.addEventListener("click", () => {
    window.location.href = "history.html";
  });
});
