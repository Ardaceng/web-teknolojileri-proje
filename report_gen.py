import os
import asyncio
# pyrefly: ignore [missing-import]
from playwright.async_api import async_playwright

pages = [
    ("Hakkımda", "index.html", "Hakkımda sayfası. Kişisel bilgilerin, hobi ve yeteneklerin özetlendiği ana sayfa."),
    ("CV", "cv.html", "Özgeçmiş sayfası. Eğitim geçmişi, deneyimler ve becerilerin detaylı bir şekilde sunulduğu alan."),
    ("Şehrim", "sehrim.html", "Yaşadığım şehrin tanıtıldığı sayfa. Slider ile fotoğrafların sergilendiği ve şehir hakkında bilgilerin verildiği bölüm."),
    ("Mirasımız", "miras.html", "Şehrin veya bölgenin kültürel mirasının tanıtıldığı sayfa."),
    ("İlgi Alanlarım", "ilgi.html", "İlgi alanlarının gösterildiği ve TVMaze API üzerinden dinamik dizi/film araması yapılabilen sayfa."),
    ("İletişim", "iletisim.html", "İletişim formu sayfası. Vue.js ve Vanilla JS kullanılarak form kontrollerinin gerçekleştirildiği bölüm."),
    ("Giriş", "login.html", "Kullanıcı giriş sayfası. PHP tabanlı kontrol mekanizması ile e-posta ve şifre doğrulama işlemi yapılan sayfa.")
]

current_dir = os.path.dirname(os.path.abspath(__file__))
output_pdf = os.path.join(current_dir, "Proje_Raporu.pdf")

html_content = """
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Proje Raporu</title>
    <style>
        body { font-family: 'Arial', sans-serif; margin: 0; padding: 0; }
        .page-break { page-break-after: always; }
        .cover { height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
        .cover h1 { font-size: 3em; margin-bottom: 20px; }
        .cover p { font-size: 1.5em; margin: 10px 0; }
        .screenshot-page { padding: 40px; }
        .screenshot-page h2 { font-size: 2em; margin-bottom: 10px; border-bottom: 2px solid #ccc; padding-bottom: 10px; }
        .screenshot-page p { font-size: 1.2em; margin-bottom: 20px; }
        .img-container { text-align: center; }
        .img-container img { max-width: 100%; border: 1px solid #ddd; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
    </style>
</head>
<body>

    <!-- Kapak Sayfası -->
    <div class="cover page-break">
        <h1>Web Teknolojileri Proje Raporu</h1>
        <p><strong>Öğrenci:</strong> Ali Arda Dilek</p>
        <p><strong>Üniversite:</strong> Sakarya Üniversitesi</p>
        <p><strong>Bölüm:</strong> Bilgisayar Mühendisliği</p>
        <div style="margin-top: 50px;">
            <p><strong>GitHub Linki:</strong> <a href="https://github.com/aliardadilek/web-teknolojileri-proje">github.com/aliardadilek/web-teknolojileri-proje</a></p>
            <p><strong>Canlı Site Linki:</strong> <a href="http://aliardadilek.infinityfreeapp.com">aliardadilek.infinityfreeapp.com</a></p>
        </div>
    </div>
"""

async def main():
    if not os.path.exists("screenshots"):
        os.makedirs("screenshots")

    global html_content
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        for title, file_name, desc in pages:
            page = await browser.new_page(viewport={"width": 1280, "height": 800})
            file_url = f"file://{os.path.join(current_dir, file_name)}"
            await page.goto(file_url, wait_until="networkidle")
            # scroll and take full page if needed, but let's take a regular screenshot
            screenshot_path = os.path.join("screenshots", f"{file_name}.png")
            await page.screenshot(path=screenshot_path, full_page=True)
            
            html_content += f"""
            <div class="screenshot-page page-break">
                <h2>{title} Menüsü</h2>
                <p>{desc}</p>
                <div class="img-container">
                    <img src="file://{os.path.join(current_dir, screenshot_path)}" alt="{title} Screenshot">
                </div>
            </div>
            """
            await page.close()

        html_content += "</body></html>"
        
        # Now render the HTML to PDF
        pdf_page = await browser.new_page()
        await pdf_page.set_content(html_content)
        await pdf_page.pdf(path=output_pdf, format="A4", print_background=True)
        await browser.close()
        
    print(f"Rapor oluşturuldu: {output_pdf}")

if __name__ == '__main__':
    asyncio.run(main())
