const fs = require('fs');


try {
    // 1. index.html dosyasını oku
    let content = fs.readFileSync('index.html', 'utf8');
    
    // 2. Ortam değişkenini al. Alamazsa boş bırakır.
    const scriptUrl = process.env.APPS_SCRIPT_URL || '';
    
    if(!scriptUrl) {
        console.warn("UYARI: APPS_SCRIPT_URL ortam değişkeni bulunamadı!");
    }

    // 3. Değişkeni HTML içine yerleştir
    content = content.replace('BURAYA_APPS_SCRIPT_URL_GELECEK', scriptUrl);
    
    // 4. Dosyayı yeni haliyle kaydet
    fs.writeFileSync('index.html', content);
    
} catch (err) {
    console.error("HATA: Dosya değiştirilemedi!", err);
    process.exit(1); // Hata verirse derlemeyi durdur
}