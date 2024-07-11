const mongoose = require('mongoose');

const menuSchema= new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  taste: {
    type: String,
    required: true,
    enum: ['sweet', 'sour', 'spicy']
  },
  is_drink:{
    type: Boolean,
    default: false,
  },
  ingredients: {

    type: Array,
    required: true,
    default: [],
  },

  num_sales:{
    type: Number,
    default: 0,
  }
})

const Menu=mongoose.model('Menu',menuSchema)
module.exports=Menu;