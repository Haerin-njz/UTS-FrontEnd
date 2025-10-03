document.addEventListener("DOMContentLoaded", () => {
  const vaSelect = document.querySelector(".method-section:nth-child(1) select");
  const cardSelect = document.querySelector(".method-section:nth-child(2) select");

  vaSelect.addEventListener("change", () => {
    console.log("Virtual Account dipilih:", vaSelect.value);
    alert(`Anda memilih Virtual Account: ${vaSelect.value}`);
  });

  cardSelect.addEventListener("change", () => {
    console.log("Card dipilih:", cardSelect.value);
    alert(`Anda memilih Card: ${cardSelect.value}`);
  });

  const footer = document.querySelector("footer");
  const confirmBtn = document.createElement("button");
  confirmBtn.textContent = "Konfirmasi Pembayaran";
  confirmBtn.style.width = "100%";
  confirmBtn.style.height = "100%";
  confirmBtn.style.background = "#333";
  confirmBtn.style.color = "#fff";
  confirmBtn.style.border = "none";
  confirmBtn.style.cursor = "pointer";
  confirmBtn.style.fontWeight = "bold";
  
  footer.appendChild(confirmBtn);

  confirmBtn.addEventListener("click", () => {
    const vaChoice = vaSelect.value;
    const cardChoice = cardSelect.value;
    alert(`Metode pembayaran dipilih:\n\nVirtual Account: ${vaChoice}\nCard: ${cardChoice}`);
  });
});
