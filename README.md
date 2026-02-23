# ☁︎ Bulut Depom

**CLK-GDrive**, Google Drive altyapısını kullanan, tamamen sunucusuz (serverless) ve modern bir web tabanlı dosya yöneticisidir. 

Bu proje, özellikle katı güvenlik duvarlarına (firewall) sahip şirket ağlarında, harici bulut depolama servislerine veya sunuculara erişimin engellendiği durumlarda **yalnızca GitHub ve Google ekosistemini kullanarak** kesintisiz bir dosya erişim deneyimi sunmak amacıyla geliştirilmiştir.

## ✨ Özellikler

* **🚀 Tamamen Sunucusuz (Serverless):** Arka planda Node.js, PHP veya bir veritabanı (MySQL vb.) gerektirmez.
* **🛡️ Güvenlik Duvarı Dostu:** Tüm veri trafiği GitHub Pages ve Google sunucuları (`script.google.com`) üzerinden aktığı için ağ kısıtlamalarına takılmaz.
* **🎨 Modern Arayüz:** Google'ın Material Design prensipleriyle tasarlanmış, kullanıcı dostu temiz arayüz.
* **📂 Dinamik Navigasyon:** Klasörler arasında gezinme, alt klasörlere erişim ve anlık veri çekme yeteneği.
* **⚡ Sıfır Maliyet:** Barındırma için GitHub Pages, depolama ve API için Google Drive & Apps Script kullanılarak 0₺ maliyetle çalışır.

## 🏗️ Mimari Yapı

Sistem üç ana bileşenden oluşur:
1. **Frontend (Arayüz):** HTML, CSS ve Vanilla JavaScript ile yazılmış, GitHub Pages üzerinde barındırılan statik arayüz.
2. **Backend (API Köprüsü):** Google Apps Script. Tarayıcıdan gelen istekleri karşılayıp Drive'dan veriyi JSON formatında frontend'e iletir.
3. **Database (Depolama):** Google Drive. Tüm dosyalar ve klasör hiyerarşisi kullanıcının kişisel veya kurumsal Drive hesabında tutulur.

## 📝 Lisans

Bu proje [MIT Lisansı](LICENSE) ile lisanslanmıştır. Kişisel ve ticari kullanıma, değiştirilmeye ve dağıtılmaya açıktır.
