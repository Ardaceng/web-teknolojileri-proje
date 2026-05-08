// vue-validation.js — Vue.js Form Kontrolü

const { createApp } = Vue;

createApp({
    methods: {
        vueCheck() {
            const ad = document.getElementById('ad').value.trim();
            const email = document.getElementById('email').value.trim();
            const tel = document.getElementById('tel').value.trim();
            const konu = document.getElementById('konu').value;
            const mesaj = document.getElementById('mesaj').value.trim();
            const cinsiyet = document.querySelector('input[name="cinsiyet"]:checked');
            const ilgiSecili = document.querySelectorAll('input[name="ilgi[]"]:checked');
            const hatalar = [];

            if (!ad) hatalar.push("Ad alanı boş bırakılamaz (Vue)");
            else if (!/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/.test(ad)) hatalar.push("Ad sadece harf içermelidir (Vue)");

            if (!email.includes("@")) hatalar.push("Geçersiz e-posta (Vue)");
            if (isNaN(tel.replace(/\s/g, ""))) hatalar.push("Telefon sadece rakam olmalı (Vue)");
            if (!konu) hatalar.push("Lütfen bir konu seçin (Vue).");
            if (!cinsiyet) hatalar.push("Lütfen cinsiyet seçin (Vue).");
            if (!ilgiSecili.length) hatalar.push("En az bir ilgi alanı seçin (Vue).");
            if (!mesaj) hatalar.push("Mesaj boş bırakılamaz (Vue).");

            const sonuc = document.getElementById('sonuc');
            sonuc.style.display = 'block';

            if (hatalar.length > 0) {
                sonuc.className = 'sonuc-kutu mt-4 hata';
                sonuc.innerHTML = '<strong>⚠️ Hatalar:</strong><ul>' + hatalar.map(h => `<li>${h}</li>`).join('') + '</ul>';
            } else {
                const ilgi = Array.from(ilgiSecili).map(el => el.value).join(', ');
                sonuc.className = 'sonuc-kutu mt-4 basarili';
                sonuc.innerHTML = `<strong>✅ Vue.js — Form Bilgileri:</strong><ul>
                    <li><strong>Ad Soyad:</strong> ${ad}</li>
                    <li><strong>E-posta:</strong> ${email}</li>
                    <li><strong>Telefon:</strong> ${tel}</li>
                    <li><strong>Konu:</strong> ${konu}</li>
                    <li><strong>Cinsiyet:</strong> ${cinsiyet.value}</li>
                    <li><strong>İlgi Alanları:</strong> ${ilgi}</li>
                    <li><strong>Mesaj:</strong> ${mesaj}</li></ul>`;
            }
        }
    }
}).mount('#v-app');
