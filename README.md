# ☁️ Bulut Depom

![Version](https://img.shields.io/badge/version-1.3.1-blue.svg)
![Architecture](https://img.shields.io/badge/architecture-Serverless-success.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

**Bulut Depom Enterprise**, işletmeler ve bireysel kullanıcılar için geliştirilmiş; güvenli, şeffaf ve yüksek performanslı bir modern bulut dosya yönetim arayüzüdür. Tarayıcı sınırlarını zorlayan mimarisi sayesinde, uzak sunucudaki devasa dosyalarınızı **Sıfır RAM (0 RAM)** tüketimi ile doğrudan yerel diskinize akıtır (Stream).

Tamamen istemci tarafında (Client-side) çalışan modern arayüzü, işletim sistemlerinin (Windows/macOS) yerleşik dosya gezgini deneyimini doğrudan web tarayıcısına taşır.

---

## 🌟 Öne Çıkan Özellikler (Altın Standart Mimarisi)

### 🚀 Sıfır RAM Tüketimli İndirme Motoru (Zero-RAM Chunking)
Geleneksel web indirmelerinin aksine dosyaları tarayıcı belleğine (RAM) yüklemez. Modern `File System Access API` (`showSaveFilePicker` & `showDirectoryPicker`) kullanarak, bulut sunucudan gelen veriyi milisaniyeler içinde doğrudan bilgisayarınızın fiziksel diskine yazar. Cihazınız yorulmaz, indirmeler kopmaz.

### 🗂️ Akıllı Toplu İndirme & Sandbox Koruması
Birden fazla dosya seçildiğinde tarayıcının spam engelleme (Sandbox) sistemine takılmamak için kullanıcıdan tek bir "Hedef Klasör" izni ister ve tüm dosyaları o klasörün içine sırayla, sessizce ve güvenle indirir. Akıllı uyarı sistemi (Flash Toast) kök dizin (C:\, Masaüstü vb.) güvenlik engellerini önceden algılar ve kullanıcıyı yönlendirir.

### 💻 Native (Yerleşik) Windows Gezgini Deneyimi
- **Çoklu Seçim:** Klasik masaüstü alışkanlıkları web'e uyarlandı. Normal tıklama ile çapa (anchor) atma, `Ctrl` (veya `Cmd`) ile tekil dosya ekleme/çıkarma ve `Shift` ile pürüzsüz aralık seçimi!
- **Görünüm Modları:** Ayrıntılar, Döşemeler, Büyük/Orta/Küçük Simgeler, İçerik ve Liste modları arasında dinamik geçiş.
- **Sağ Tık Menüsü:** Özelleştirilmiş ve sistem stiline uygun akıllı Context Menu.
- **Dinamik Ekmek Kırıntısı (Breadcrumbs):** Klasörler arası derinlemesine ve limitsiz gezinme hafızası.

### 🌙 Dinamik ve Yerleşik (Native) Karanlık Mod
Harici bir kütüphane veya eklenti (örn: Dark Reader) gerektirmez. Cihazınızın sistem temasını otomatik okur. `FOIT` (Flash of Inaccurate Theme) engelleme sistemi sayesinde sayfa yüklenirken ekran patlaması yaşanmaz. Güneş ve Ay arasında geçiş yapan *Saf CSS SVG Morphing* animasyonu ile premium bir hissiyat sunar.

### 🔗 LNK ve URL Akıllı Okuyucu
Sisteme yüklenen Windows kısayol (`.lnk`) veya `.url` dosyalarına çift tıklandığında anlamsızca indirmek yerine; ikili (binary) ve UTF-16 veriyi ayıklar, içindeki `http://`, `https://` veya `//localhost` formatlı hedef bağlantıyı tespit edip sizi doğrudan o adrese ışınlar. 

### 📱 Kusursuz Mobil Uyumluluk (100dvh Mimarisi)
Tasarım, mobil tarayıcıların açılıp kapanan adres çubuklarından etkilenmemesi için `position: fixed` ve esnek kutu (flex) mimarisiyle cihaz ekranına milimetrik kilitlenir. Hiçbir öğe yarım görünmez, tam bir "Native App" gibi hissettirir. Profil sisteminde Base64 resim desteği ile kişiselleştirilebilir arayüz.

---

## 🛠️ Sistem Kurulumu

Proje, geleneksel veritabanı veya sunucu kiralama gereksinimlerini ortadan kaldıran **Serverless (Sunucusuz)** bir mimari üzerine inşa edilmiştir.

### 1. Backend (Serverless Cloud) Kurulumu
1. Uygun bir sunucusuz çalışma ortamı (Cloud Function) oluşturun.
2. Projedeki backend kod alanına yapılandırma dosyasının içeriğini entegre edin.
3. Kod içerisindeki `ROOT_FOLDER_ID` değişkenine, dosyaları çekeceğiniz ana dizinin referans ID'sini yazın.
4. `yetkiliKullanicilar` JSON objesi içerisine kullanıcı adı, şifre ve (opsiyonel) Base64 profil resmi (`pp`) değerlerinizi girin.
5. Dağıtımı tamamlayın ve oluşan güvenli URL'yi bir kenara kopyalayın.

### 2. Güvenli API Anahtarı
Bulut depolama sağlayıcınız üzerinden bir okuma yetkisi (API Key) oluşturun ve bu anahtarı backend kodundaki ilgili değişkene atayın. *(Mimarimiz gereği bu key HTML dosyasında yer almaz, böylece asla dışarıdan çalınamaz. Sadece şifre ile başarılı giriş yapan kullanıcılara backend tarafından anlık olarak iletilir.)*

### 3. Frontend (HTML) Kurulumu
1. `index.html` dosyasını bir kod editöründe açın.
2. `const APPS_SCRIPT_URL = 'BURAYA_APPS_SCRIPT_URL_GELECEK';` satırını bulun.
3. Kopyaladığınız Backend URL'sini buraya yapıştırın.
4. Dosyayı kurumsal ağınızda, GitHub Pages, Vercel veya statik bir sunucuda yayınlayın.

---

## 🔒 Güvenlik & İzolasyon

* Sistem, indirme işlemi için açık (Public) veri anahtarlarını Frontend'de kesinlikle barındırmaz.
* Tüm yetkilendirme, şifreleme ve klasör hiyerarşisi sorguları dışa kapalı izole sunucularda çalışır.
* Hatalı şifre denemelerinde Backend, sistem anahtarını veya klasör yapısını asla geri döndürmez. Yetkisiz iletişim kapıda kesilir.

---

## 🏛️ Mimari & Bakım (Maintainer)

Bu projenin çekirdek mimarisi, sıfır-RAM akış (stream) motoru ve güvenlik entegrasyonları **EnesMCLK** tarafından tasarlanmış ve sürdürülmektedir.

[![GitHub Profile](https://img.shields.io/badge/GitHub-EnesMCLK-181717?style=flat-square&logo=github)](https://github.com/enesmclk)

### 🤝 Katkıda Bulunma (Contributing)
Kurumsal standartları ve kod kalitesini korumak kaydıyla, sisteme yapılacak her türlü profesyonel katkıya açığız. Çekirdek yapıyı geliştirecek veya performans optimizasyonu sağlayacak **Pull Request (PR)** gönderimleri değerlendirmeye alınacaktır. Lütfen PR göndermeden önce sistemin *Serverless* ve *Zero-RAM* ilkelerine sadık kaldığından emin olun.

Karşılaştığınız mimari sorunlar veya iyileştirme tavsiyeleri için **Issue** oluşturabilirsiniz.

---

📝 *Lisans:* Bu yazılım **MIT Lisansı** altında açık kaynak olarak sunulmuştur. Güvenlik politikaları ve kopyalama şartları için detayları `LICENSE` dosyasında bulabilirsiniz.
