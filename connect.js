// Import the Mongoose module
const mongoose = require('mongoose');
 
// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/DB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to the database');
})
.catch((error) => {
  console.error('Error connecting to the database:', error);
});


