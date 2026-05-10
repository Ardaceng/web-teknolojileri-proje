// validation.js — Vanilla JS Form Kontrolü

function vanillaCheck() {
    const ad = document.getElementById('ad').value.trim();
    const email = document.getElementById('email').value.trim();
    const tel = document.getElementById('tel').value.trim();
    const konu = document.getElementById('konu').value;
    const mesaj = document.getElementById('mesaj').value.trim();
    const cinsiyet = document.querySelector('input[name="cinsiyet"]:checked');
    const ilgiSecili = document.querySelectorAll('input[name="ilgi[]"]:checked');
    const hatalar = [];

    if (!ad) hatalar.push("Ad Soyad boş bırakılamaz.");
    else if (!/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/.test(ad)) hatalar.push("Ad Soyad sadece harf içermelidir.");

    if (!email) hatalar.push("E-posta boş bırakılamaz.");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) hatalar.push("Geçersiz e-posta formatı.");

    if (!tel) hatalar.push("Telefon boş bırakılamaz.");
    else if (!/^\d+$/.test(tel.replace(/\s/g, ""))) hatalar.push("Telefon sadece rakamlardan oluşmalıdır.");

    if (!konu) hatalar.push("Lütfen bir konu seçin.");
    if (!cinsiyet) hatalar.push("Lütfen cinsiyet seçin.");
    if (!ilgiSecili.length) hatalar.push("En az bir ilgi alanı seçin.");
    if (!mesaj) hatalar.push("Mesaj boş bırakılamaz.");

    const sonuc = document.getElementById('sonuc');
    sonuc.style.display = 'block';

    if (hatalar.length > 0) {
        sonuc.className = 'sonuc-kutu mt-4 hata';
        sonuc.innerHTML = '<strong>⚠️ Hatalar:</strong><ul>' + hatalar.map(h => `<li>${h}</li>`).join('') + '</ul>';
    } else {
        const ilgi = Array.from(ilgiSecili).map(el => el.value).join(', ');
        sonuc.className = 'sonuc-kutu mt-4 basarili';
        sonuc.innerHTML = `<strong>✅ Vanilla JS — Form Bilgileri:</strong><ul>
            <li><strong>Ad Soyad:</strong> ${ad}</li>
            <li><strong>E-posta:</strong> ${email}</li>
            <li><strong>Telefon:</strong> ${tel}</li>
            <li><strong>Konu:</strong> ${konu}</li>
            <li><strong>Cinsiyet:</strong> ${cinsiyet.value}</li>
            <li><strong>İlgi Alanları:</strong> ${ilgi}</li>
            <li><strong>Mesaj:</strong> ${mesaj}</li></ul>`;
    }
}

function gonderKontrol() {
    const ad = document.getElementById('ad').value.trim();
    const email = document.getElementById('email').value.trim();
    const tel = document.getElementById('tel').value.trim();
    const konu = document.getElementById('konu').value;
    const mesaj = document.getElementById('mesaj').value.trim();
    const cinsiyet = document.querySelector('input[name="cinsiyet"]:checked');
    const ilgiSecili = document.querySelectorAll('input[name="ilgi[]"]:checked');

    if (!ad || !email || !tel || !konu || !mesaj || !cinsiyet || !ilgiSecili.length) {
        const sonuc = document.getElementById('sonuc');
        sonuc.style.display = 'block';
        sonuc.className = 'sonuc-kutu mt-4 hata';
        sonuc.innerHTML = '<strong>⚠️ Lütfen tüm alanları doldurun!</strong>';
        return false; // formu gönderme
    }

    return true; // her şey dolu, gönder
}

function temizleSonuc() {
    const sonuc = document.getElementById('sonuc');
    sonuc.style.display = 'none';
    sonuc.innerHTML = '';
}
