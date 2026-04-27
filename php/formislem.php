<!DOCTYPE html>
<html lang="tr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Sonuçları</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background: #FAF6F0;
            padding: 50px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .result-card {
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            border-top: 5px solid #6B4C35;
        }

        h2 {
            color: #6B4C35;
            margin-bottom: 25px;
        }

        .label {
            font-weight: bold;
            color: #555;
        }

        .value {
            color: #2C1F14;
        }
    </style>
</head>

<body>

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="result-card">
                    <h2>Gönderilen Form Bilgileri</h2>
                    <hr>

                    <?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verileri POST ile tek tek alma 
    $ad = isset($_POST['ad']) ? htmlspecialchars($_POST['ad']) : 'Belirtilmedi';
    $email = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : 'Belirtilmedi';
    $tel = isset($_POST['tel']) ? htmlspecialchars($_POST['tel']) : 'Belirtilmedi';
    $konu = isset($_POST['konu']) ? htmlspecialchars($_POST['konu']) : 'Belirtilmedi';
    $cinsiyet = isset($_POST['cinsiyet']) ? htmlspecialchars($_POST['cinsiyet']) : 'Belirtilmedi';
    $mesaj = isset($_POST['mesaj']) ? htmlspecialchars($_POST['mesaj']) : 'Belirtilmedi';

    // Checkbox (Dizi) kontrolü
    $ilgiler = isset($_POST['ilgi']) ? $_POST['ilgi'] : [];

    echo "<div class='mb-3'><span class='label'>Ad Soyad:</span> <span class='value'>$ad</span></div>";
    echo "<div class='mb-3'><span class='label'>E-posta:</span> <span class='value'>$email</span></div>";
    echo "<div class='mb-3'><span class='label'>Telefon:</span> <span class='value'>$tel</span></div>";
    echo "<div class='mb-3'><span class='label'>Konu:</span> <span class='value'>$konu</span></div>";
    echo "<div class='mb-3'><span class='label'>Cinsiyet:</span> <span class='value'>$cinsiyet</span></div>";

    echo "<div class='mb-3'><span class='label'>İlgi Alanları:</span> <span class='value'>";
    echo !empty($ilgiler) ? implode(", ", array_map('htmlspecialchars', $ilgiler)) : 'Seçilmedi';
    echo "</span></div>";

    echo "<div class='mb-3'><span class='label'>Mesaj:</span><br><div class='p-3 border rounded bg-light mt-2 value'>$mesaj</div></div>";
}
else {
    echo "<div class='alert alert-danger'>Hata: Form verileri POST yöntemiyle gönderilmedi!</div>";
}
?>

                    <div class="mt-4">
                        <a href="../iletisim.html" class="btn btn-secondary">Geri Dön</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</body>

</html>