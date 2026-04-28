// validation.js — Vanilla JS Form Kontrolü

function vanillaCheck() {
    const ad = document.getElementById('ad').value.trim();
    const email = document.getElementById('email').value.trim();
    const tel = document.getElementById('tel').value.trim();
    const konu = document.getElementById('konu').value;
    const mesaj = document.getElementById('mesaj').value.trim();
    const cinsiyet = document.querySelector('input[name="cinsiyet"]:checked');
    const ilgiSecili = document.querySelectorAll('input[name="ilgi[]"]:checked');

    let hatalar = [];

    // Ad: boş olamaz, sadece harf
    if (ad === "")
        hatalar.push("Ad Soyad boş bırakılamaz.");
    else if (!/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/.test(ad))
        hatalar.push("Ad Soyad sadece harf içermelidir.");

    // E-posta: boş olamaz, geçerli format
    if (email === "")
        hatalar.push("E-posta boş bırakılamaz.");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        hatalar.push("Geçersiz e-posta formatı. (örn: ad@mail.com)");

    // Telefon: boş olamaz, sadece rakam
    if (tel === "")
        hatalar.push("Telefon boş bırakılamaz.");
    else if (!/^\d+$/.test(tel.replace(/\s/g, "")))
        hatalar.push("Telefon sadece rakamlardan oluşmalıdır.");

    if (!konu) hatalar.push("Lütfen bir konu seçin.");
    if (!cinsiyet) hatalar.push("Lütfen cinsiyet seçin.");
    if (ilgiSecili.length === 0) hatalar.push("En az bir ilgi alanı seçin.");
    if (mesaj === "") hatalar.push("Mesaj boş bırakılamaz.");

    if (hatalar.length > 0)
        alert("⚠️ Hatalar:\n\n• " + hatalar.join("\n• "));
    else
        alert("✅ Vanilla JS: Form başarıyla doğrulandı!");
}
