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
  created_at: {
    type: Date
  }
}, {
  collection: 'Goals'
});

module.exports = {
  Goal: mongoose.model('Goal', GoalSchema)
}
