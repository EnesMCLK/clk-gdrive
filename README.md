# ☁️ clk-gdrive

**clk-gdrive**, Google Drive altyapısını kullanan, tamamen sunucusuz (serverless) ve modern bir web tabanlı dosya yöneticisidir. 

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

## 🚀 Kurulum ve Kullanım

Kendi `clk-gdrive` sisteminizi kurmak oldukça basittir:

1. Bu repoyu kendi GitHub hesabınıza **fork'layın** (veya indirin).
2. Google Drive üzerinde dosyalarınızı tutacağınız bir klasör oluşturun ve URL'sindeki klasör kimliğini (`folderId`) kopyalayın.
3. [Google Apps Script](https://script.google.com/) üzerinden yeni bir proje oluşturup, API kodunu ekleyin ve `rootFolderId` kısmına kopyaladığınız kimliği yapıştırın.
4. Apps Script projesini **Web Uygulaması** (Web App) olarak dağıtın (Erişim: Herkes).
5. Size verilen Web App URL'sini bu repodaki `index.html` dosyasının alt kısmında yer alan `APPS_SCRIPT_URL` değişkenine yapıştırın.
6. Projeyi **GitHub Pages** üzerinden yayına alın!

## 📝 Lisans

Bu proje [MIT Lisansı](LICENSE) ile lisanslanmıştır. Kişisel ve ticari kullanıma, değiştirilmeye ve dağıtılmaya açıktır.
