var mongoose = require('mongoose');
const url = `mongodb://dan:pQ0nYh0RpPKpPjIk@cluster0-shard-00-00-as0aw.mongodb.net:27017,cluster0-shard-00-01-as0aw.mongodb.net:27017,cluster0-shard-00-02-as0aw.mongodb.net:27017/compromise_test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`
mongoose.connect(url);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
