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

  const {
    title
    ,status = false
    ,user
    ,created_at
  } = req.body;

  let goal = new db.Goal({
    title
    ,status
    ,created_at
    ,user
  });
  goal.save((err, goal) => {
    if (err) {res.send(err);}
    res.send({
      goal
    });
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
app.delete('/goals/:id', function(req, res) {

  const { id } = req.params;
  db.Goal.remove({ _id: id }, function (err) {
    if (err) return res.send(err)

    res.send({})
  });
});

app.post('/auth', function(req, res) {
  const { data } = req.body;
  db.User.findOne({
    facebook_id: data.facebook_id
  }, (err, user) => {
    if (err) { return res.send(err) }
    if (user) { return res.send(user) }
    else {
      const user = db.User(data)
      user.save((err, user) => {
        if (err) { return res.send(err) }
        res.send(user)
      })
    }
  });
})

app.listen(PORT, error => {
  error
  ? console.error(error)
  : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
});
