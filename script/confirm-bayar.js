document.addEventListener("DOMContentLoaded", () => {
  const vaSelect = document.getElementById("vaSelect");
  const cardSelect = document.getElementById("cardSelect");
  const lanjutBtn = document.getElementById("lanjutBtn");

  lanjutBtn.addEventListener("click", () => {
    const vaChoice = vaSelect.value;
    const cardChoice = cardSelect.value;

    localStorage.setItem("virtualAccount", vaChoice);
    localStorage.setItem("cardType", cardChoice);

    window.location.href = "ringkasan-pesanan.html";
  });
});
