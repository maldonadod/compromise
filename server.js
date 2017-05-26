const path = require('path');
const express = require('express');
const env = require('node-env-file');
const app = express();
env(__dirname + '/.env_file', { raise: false });
const PORT = process.env.PORT || 80;
const db = require('./db');

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/dist/index.html');
});

app.listen(PORT, error => {
  error
  ? console.error(error)
  : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
});
