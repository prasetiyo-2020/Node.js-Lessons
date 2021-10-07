# Deploy Node.js

📃 app.js
``` javascript
const connection = mysql.createConnection({
    host: 'db4free.net' || localhost,
    user: 'prasetiyo' || root,
    password: '<your password>',
    database: 'prasetiyo_blog' || blog
});
```

``` javascript
app.listen(process.env.PORT || 3000);
```

📃 .gitignore
``` gitignore
node_modules
package-lock.json
```

📃 package.json
``` json
  "scripts": {
    "start": "node app.js"
  }
```
