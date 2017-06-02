const path = require('path');
const express = require('express');
const env = require('node-env-file');
const app = express();
env(__dirname + '/.env_file', { raise: false });
const PORT = process.env.PORT || 80;
const db = require('./db');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(req, res) {
  response.sendFile(__dirname + '/dist/index.html');
});
app.get('/goals', function(req, res) {

  let { created_at = Date.now() } = req.query;

  var start = new Date(created_at);
  start.setHours(0,0,0,0);

  var end = new Date(created_at);
  end.setHours(23,59,59,999);

  db.Goal.find({
    created_at: {
      $gte: start
      ,$lt: end
    }
  }, (err, goals) => {
    res.send({
      goals
    });
  });
});
app.post('/goals', function(req, res) {

  const { body } = req;

  let goal = new db.Goal(body);
  goal.save((err, goal) => {
    if (err) {res.send(err);}
    res.send(goal);
  });
});

app.put('/goals/:id', function(req, res) {

  const { body } = req;
  const { id } = req.params;

  db.Goal.update({
    _id: id
  }, body, (err) => {
    if (err) {
      return res.send(err)
    }
    res.send({})
  });
});

app.listen(PORT, error => {
  error
  ? console.error(error)
  : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
});
