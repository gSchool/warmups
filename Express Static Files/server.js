'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const path = require('path');

app.use(express.static('public'));

app.use((req, res) => {
  const filePath = path.join(__dirname, 'public', '404.html');
  res.sendFile(filePath);
});

app.listen(port, () => {
  console.log('Listening on port', port);
});
