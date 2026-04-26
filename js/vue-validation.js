const { createApp } = Vue

createApp({
    methods: {
        vueCheck() {
            // Vue içinden de DOM'a erişebiliriz ya da formu reaktif yapabiliriz.
            // Öğrenci seviyesinde anlaşılır olması için form verilerini basitçe çekiyoruz.
            const ad = document.getElementById('ad').value;
            const email = document.getElementById('email').value;
            const tel = document.getElementById('tel').value;

            // Hataları tutan dizi
            let errors = [];

            if (!ad) errors.push("Ad alanı eksik (Vue)");
            if (!email.includes("@")) errors.push("Geçersiz e-posta (Vue)");
            if (isNaN(tel.replace(/\s/g, ""))) errors.push("Telefon sadece rakam olmalı (Vue)");

            if (errors.length > 0) {
                alert("Vue.js Mesajı: " + errors.join(", "));
            } else {
                alert("Vue.js Kontrolü: Her şey yolunda! 🟢");
            }
        }
    }
}).mount('#v-app')
