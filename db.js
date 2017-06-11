const mongoose = require('mongoose');
const { Schema } = mongoose;
const { DB_URL } = process.env;
mongoose.connect(DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var GoalSchema = new Schema({
  title: {
    type: String
  },
  status: {
    type: Boolean,
    default: false
  },
  created_at: {
    type: Date
  }
}, {
  collection: 'Goals'
});

var UserSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  facebook_id: {
    type: Number
  },
  picture: {
    url: String
  },
  created_at: {
    type: Date,
    default: Date.now
  }
}, {
  collection: 'Users'
});

module.exports = {
  Goal: mongoose.model('Goal', GoalSchema)
  ,User: mongoose.model('User', UserSchema)
}
