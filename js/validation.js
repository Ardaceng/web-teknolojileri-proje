function vanillaCheck() {
    // Form elemanlarını al
    const ad = document.getElementById('ad').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;
    const konu = document.getElementById('konu').value;
    const mesaj = document.getElementById('mesaj').value;

    // Cinsiyet kontrolü
    const cinsiyet = document.querySelector('input[name="cinsiyet"]:checked');

    // İlgi alanları kontrolü
    const ilgiAlanlari = document.querySelectorAll('input[name="ilgi[]"]:checked');

    // Hata mesajlarını topla
    let errors = [];

    if (ad.trim() === "") errors.push("Ad Soyad alanı boş bırakılamaz.");
    if (email.trim() === "") {
        errors.push("E-posta alanı boş bırakılamaz.");
    } else {
        // Basit email regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.push("Geçersiz e-posta formatı.");
        }
    }

    if (tel.trim() === "") {
        errors.push("Telefon alanı boş bırakılamaz.");
    } else {
        // Sadece rakam kontrolü
        if (!/^\d+$/.test(tel.replace(/\s/g, ""))) {
            errors.push("Telefon numarası sadece rakamlardan oluşmalıdır.");
        }
    }

    if (!konu) errors.push("Lütfen bir konu seçin.");
    if (!cinsiyet) errors.push("Lütfen cinsiyet seçin.");
    if (ilgiAlanlari.length === 0) errors.push("En az bir ilgi alanı seçmelisiniz.");
    if (mesaj.trim() === "") errors.push("Mesaj alanı boş bırakılamaz.");

    // Sonucu göster
    if (errors.length > 0) {
        alert("Vanilla JS Hatası:\n- " + errors.join("\n- "));
    } else {
        alert("Vanilla JS Kontrolü: Form başarıyla doğrulandı! ✅");
    }
}
