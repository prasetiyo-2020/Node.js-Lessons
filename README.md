## Instalasi
- Download Node.js di https://nodejs.org/en/download/ dan install
- Download MongoDB atau RDBMS

## Dokumentasi Node.js
- https://nodejs.org/en/docs/

## Membuat Projek
- Pada terminal ketik ``` $ npm install express ``` untuk menginstall express
- Import express pada file app.js
```javascript
const express = require('express');
const app = express();
```

## Menginstall Embedded JavaScript atau ejs
- Pada terminal ketik ``` $ npm install ejs ```
- Maka sekarang kita bisa menggunakan format ejs sebagai ganti dari html, misalnya dari index.html menjadi index.ejs
- EJS memungkinkan kita untuk memasukan kode javascript pada struktur halaman
- Simbol ``` <% %> ``` digunakan untuk menetapkan variabel, contoh : ``` <% const item = {id: 4, name: 'tomat'} %> ```
- Simbol ``` <%= %> ``` digunakan untuk mencetak variabel yang akan ditampilkan, contoh : ``` <%= item.id %> ```, ``` <%= item.name %> ```

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

## CSS dan Gambar
- Style dan gambar disimpan di folder ``` public ```
``` javascript
const express = require('express');
const app = express();

// Menspesifikasikan folder yang menyimpan file CSS dan gambar 
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('hello.ejs');
});

app.get('/top', (req, res) => {
  res.render('top.ejs');
});

app.listen(3000);
```
- Untuk memuat style dan gambar untuk diaplikasikan file top.ejs, maka diperlukan kode berikut
``` html
<link rel="stylesheet" href="/css/style.css">
<img src="/images/top.png">
```

## Menampilkan HTML menggunakan forEach
- Pada file .ejs, definisikan variabel yang berupa array
``` javascript
<% const items = [
   {id: 1, name: 'kentang'},
   {id: 2, name: 'wortel'},
   {id: 3, name: 'bawang'}
]; %>
```
- Pada file .ejs, variabel items yang menggunakan ```forEach``` menerapkan fungsi yang ditentukan untuk setiap item dalam array tertentu secara individual
``` javascript
<% items.forEach((item) => { %>
<li>
  <span class="id-column"><%= item.id %></span>
  <span class="name-column"><%= item.name %></span>
</li>
<% }); %>
```

## Menambahkan Tautan Diantara Halaman
``` html
<a class="index-button" href="/index">Lihat daftar</a>
```


## Mengintegrasikan Database
- Untuk menghubungkan MySQL ke Node.js https://www.mysqltutorial.org/mysql-nodejs/connect/
- install paket mysql di terminal : ```$ npm install mysql```
- Import paket mysql pada file app.js
``` javascript
 const mysql = require('mysql');
 const connection = mysql.createConnection({
  host: 'localhost',
  user: 'progate',
  password: 'password',
  database: 'list_app'
});
```

## Menggunakan Database
- Pada file app.js, atur route agar dapat mengakses data dari database
``` javascript
app.get('/index', (req, res) => {
  // Mengakses data dari database 
  connection.query(
    'SELECT * FROM items',
    (error, results) => {
      console.log(results);
      res.render('index.ejs');
    }
});
```
