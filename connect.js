// Import the Mongoose module
const mongoose = require('mongoose');
//import and configure the dotenv module
require('dotenv').config();
 
// Connect to the MongoDB database

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 30000
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

module.exports = connectDB;
  

