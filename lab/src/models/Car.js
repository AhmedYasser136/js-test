// External Dependancies
const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
  title: String,
  tags: String,
  brand: String,
  price: String,
  age: Number,
})

module.exports = mongoose.model('Car', carSchema)