const mongoose = require('mongoose');

// Create a personSchema using the Mongoose.Schema constructor
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  favoriteFoods: {
    type: [String]
  }
});

// Create a Person model based on the personSchema
const Person = mongoose.model('Person', personSchema);

module.exports=Person