// vue-validation.js — Vue.js Form Kontrolü

const { createApp } = Vue;

createApp({
    methods: {
        vueCheck() {
            const ad = document.getElementById('ad').value.trim();
            const email = document.getElementById('email').value.trim();
            const tel = document.getElementById('tel').value.trim();

            let hatalar = [];

            // Ad: boş olamaz, sadece harf
            if (ad === "")
                hatalar.push("Ad alanı boş bırakılamaz (Vue)");
            else if (!/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/.test(ad))
                hatalar.push("Ad alanı sadece harf içermelidir (Vue)");

            // E-posta: @ içermeli
            if (!email.includes("@"))
                hatalar.push("Geçersiz e-posta (Vue)");

            // Telefon: sadece rakam
            if (isNaN(tel.replace(/\s/g, "")))
                hatalar.push("Telefon sadece rakam olmalı (Vue)");

            if (hatalar.length > 0)
                alert("⚠️ Vue Hataları:\n\n• " + hatalar.join("\n• "));
            else
                alert("✅ Vue.js: Her şey yolunda!");
        }
    }
}).mount('#v-app');
