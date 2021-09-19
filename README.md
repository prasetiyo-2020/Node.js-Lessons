## Instalasi
- Download Node.js di https://nodejs.org/en/download/ dan install
- Download MongoDB atau RDBMS

## Membuat Projek
- Pada terminal ketik ``` $ npm install express ``` untuk menginstall express
- Import express pada file app.js
```javascript
const express = require('express');
const app = express();
```

## Menjalankan Server
- Untuk menjalankan server tambahkan kode ``` app.listen(3000) ```
```javascript
const express = require('express');
const app = express();

app.listen(3000);
```
- Lalu pada terminal ketikan perintah ``` $ node app.js ```

## Route
- Untuk menampilkan halaman maka diperlukan kode ``` app.get ``` , halaman biasanya terletak di folder ``` views ``` dengan format file .ejs
```javascript
const express = require('express');
const app = express();

app.get('/top', (req, res) => {
  res.render('top.ejs');
});

app.listen(3000);
```
