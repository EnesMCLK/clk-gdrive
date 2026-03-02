const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 1. Statik dosyaları (HTML, CSS, JS) 'public' klasöründen sun
app.use(express.static(path.join(__dirname, 'public')));

// 2. İndirme Köprüsü (Proxy)
app.get('/indir-servis', async (req, res) => {
    const fileId = req.query.id;
    const fileName = req.query.name || 'dosya.dat';
    
    // Sizin Google API Key'iniz (Render Environment Variables'a ekleyebilirsiniz)
    const API_KEY = process.env.DRIVE_API_KEY || 'BURAYA_API_KEY_GELECEK';
    const driveUrl = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${API_KEY}`;

    try {
        const response = await fetch(driveUrl);
        
        if (!response.ok) throw new Error('Drive hatası');

        // Tarayıcıya dosya bilgilerini iletiyoruz
        res.setHeader('Content-Disposition', `attachment; filename="${encodeURIComponent(fileName)}"`);
        res.setHeader('Content-Type', response.headers.get('content-type'));

        // Veriyi parçalar halinde (stream) kullanıcıya akıtıyoruz
        response.body.pipe(res);
        
    } catch (err) {
        console.error("İndirme Hatası:", err);
        res.status(500).send("Dosya çekilemedi.");
    }
});

app.listen(PORT, () => console.log(`Bulut Depom ${PORT} portunda hazır!`));
