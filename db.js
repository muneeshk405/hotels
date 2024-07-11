const mongoose = require('mongoose');
require('dotenv').config();
const mongourl = process.env.DB_ATLAS;
// const mongourl = process.env.DB_LOCAL;
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


