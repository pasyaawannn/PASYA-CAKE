// INIT EMAILJS
emailjs.init("N6M07xVWVAxJ3KK9M");

// FORM SUBMIT
document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let data = {
    nama: document.getElementById("nama").value,
    email: document.getElementById("email").value,
    wa: document.getElementById("wa").value,
    produk: document.getElementById("produk").value,
    jumlah: document.getElementById("jumlah").value,
    alamat: document.getElementById("alamat").value,
    catatan: document.getElementById("catatan").value,
  };

  emailjs
    .send("ugi_cake", "template_cmxfwtf", data)
    .then(function (response) {
      alert("Pesanan berhasil dikirim ✅");
      document.getElementById("orderForm").reset();
      console.log("SUCCESS!", response.status, response.text);
    })
    .catch(function (error) {
      alert("Gagal mengirim pesanan ❌");
      console.log("ERROR:", error);
    });
});
