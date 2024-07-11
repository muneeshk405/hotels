const mongoose = require('mongoose');
const mongourl = 'mongodb://localhost:27017/hotels'
mongoose.connect(mongourl);
const db = mongoose.connection;

db.on('connected', () => {
  console.log("Connected to Mongo")
})
db.on('disconnected', () => {
  console.log("disConnected to Mongo")
})
db.on('error', (error) => {
  console.log("error to Mongo", error)
})


module.exports = db;


