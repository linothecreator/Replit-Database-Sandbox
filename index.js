const express = require('express');
const { DB_SET, DB_GET, DB_LIST, DB_DELETE } = require('./db.js');
const app = express();


var userData = { 'id': '1234', 'name': 'Bob', 'email': 'bob@email.com' };

DB_SET("hello", "bob");
DB_GET("hello");


DB_SET("hello", "Sue");
DB_GET("hello");









app.get('/', (req, res) => {
  // console.log(db.get([userData.name] + [userData.id]));
  res.send('Hello ' + userData.name);

});

app.listen(3000, () => {
  console.log('server started');
});



