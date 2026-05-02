<?php
// Dinamik doğrulama kullanılıyor (Her öğrenci kendi numarası ile girebilir)
?>
<!DOCTYPE html>
<html lang="tr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Giriş Sonucu – Ali Arda Dilek</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Inter:wght@400;500&display=swap"
        rel="stylesheet">
    <style>
        body {
            background: #FAF6F0;
            font-family: 'Inter', sans-serif;
        }

        .result-card {
            background: white;
            border: 1px solid #e8dcc8;
            padding: 40px;
            max-width: 460px;
            margin: 100px auto;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
            text-align: center;
        }

        .result-title {
            font-family: 'Caveat', cursive;
            font-size: 36px;
            color: #6B4C35;
            margin-bottom: 12px;
        }

        .result-msg {
            font-size: 15px;
            color: #555;
            margin-bottom: 28px;
        }

        .btn-custom {
            background: #6B4C35;
            color: white;
            border: none;
            padding: 10px 28px;
            font-size: 14px;
            text-decoration: none;
            display: inline-block;
            transition: background 0.2s;
        }

        .btn-custom:hover {
            background: #4A342C;
            color: white;
        }

        .icon {
            font-size: 56px;
            margin-bottom: 16px;
        }

        footer {
            background: #e8dcc8;
            padding: 20px 0;
            font-family: 'Caveat', cursive;
            font-size: 20px;
            color: #6B4C35;
            text-align: center;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    </style>
</head>

<body>

    <!-- Navbar -->
    <nav class="navbar bg-white border-bottom">
        <div class="container">
            <a class="navbar-brand" href="../index.html"
                style="font-family:'Caveat',cursive; font-size:24px; color:#6B4C35;">arda ✦</a>
        </div>
    </nav>

    <!-- Sonuç Kartı -->
    <div class="result-card">
        <?php
        // POST kontrolü
        if ($_SERVER["REQUEST_METHOD"] == "POST") {

            // Verileri al ve temizle
            $email = isset($_POST['email']) ? htmlspecialchars(trim($_POST['email'])) : '';
            $sifre = isset($_POST['sifre']) ? trim($_POST['sifre']) : '';

            // Boş alan kontrolü
            if (empty($email) || empty($sifre)) {
                echo '<div class="icon">⚠️</div>';
                echo '<div class="result-title">Eksik Bilgi</div>';
                echo '<p class="result-msg">E-posta ve şifre alanlarını doldurunuz.</p>';
                echo '<a href="../login.html" class="btn-custom">Geri Dön</a>';
            }
            // Dinamik kullanıcı doğrulama (girilen e-posta, şifrenin sonuna @gmail.com eklenmiş hali olmalı)
            elseif (!empty($sifre) && $email === $sifre . "@gmail.com") {
                echo '<div class="icon">✅</div>';
                echo '<div class="result-title">Giriş Başarılı!</div>';
                echo '<p class="result-msg">Hoş geldin, <strong>' . $email . '</strong> 🎉</p>';
                echo '<a href="../index.html" class="btn-custom">Ana Sayfaya Git</a>';
            }
            // Hatalı bilgi
            else {
                echo '<div class="icon">❌</div>';
                echo '<div class="result-title">Giriş Başarısız</div>';
                echo '<p class="result-msg">E-posta veya şifre hatalı. Lütfen tekrar deneyiniz.</p>';
                echo '<a href="../login.html" class="btn-custom">Tekrar Dene</a>';
            }

        } else {
            // Doğrudan URL ile erişim engeli
            echo '<div class="icon">🚫</div>';
            echo '<div class="result-title">Geçersiz İstek</div>';
            echo '<p class="result-msg">Bu sayfaya doğrudan erişilemez. Lütfen giriş formunu kullanınız.</p>';
            echo '<a href="../login.html" class="btn-custom">Giriş Sayfasına Git</a>';
        }
        ?>
    </div>

    <footer>✦ ali arda dilek · sakarya üniversitesi bilgisayar mühendisliği ✦</footer>

</body>

</html>