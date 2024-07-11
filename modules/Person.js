const mongoose = require('mongoose')
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,

  },
  work: {
    type: String,
    enum: ['chef', 'manager', 'waiter'],
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  salary: {
    type: Number,
    required: true,
  },
})
const Person = mongoose.model('Person', personSchema);
module.exports = Person;