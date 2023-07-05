const mongoose = require('mongoose');
const Person = require('./person');
const connectDB = require('./connect');
connectDB();

// Create a new person instance
const newPerson = new Person({
    name: 'Wafa',
    age: 35,
    favoriteFoods: ['Salad', 'Lasagna']
  });


// Save the new person asynchronously
const savePerson = async () => {
  try {
    const savedPerson = await newPerson.save();
    console.log('Person saved successfully:', savedPerson);
  } catch (error) {
    console.error('Error occurred while saving person:', error);
  }
};

savePerson();

// Function to create and save multiple people instances
const createManyPeople = async () => {
  const arrayOfPeople = [
    {
      name: 'Lina',
      age: 8,
      favoriteFoods: ['Sandwich', 'Burger']
    },
    {
      name: 'Loujayn',
      age: 5,
      favoriteFoods: ['Sushi', 'Ice Cream']
    },
  ];

  try {
    const savedPeople = await Person.create(arrayOfPeople);
    console.log('People saved successfully:', savedPeople);
  } catch (error) {
    console.error('Failed to save people:', error);
  }
};

createManyPeople();

// Use Model.find() to search for people with the given name
const searchName = 'Lina';

Person.find({ name: searchName })
.then(people => {
  console.log('People found with the name', searchName + ':', people);
})
.catch(err => {
  console.error('Error occurred while searching:', err);
});

// Use Model.findOne() to search for a person with the specified favorite food
const food = 'Sushi';

Person.findOne({ favoriteFoods: food })
  .then(person => {
    console.log('Person found with the favorite food', food + ':', person);
  })
  .catch(err => {
    console.error('Error occurred while searching:', err);
  });

// Use Model.findById() to search for a person with the specified _id
const personId = '64a5894cabc8e165049ed1a5';

Person.findById(personId)
  .then(foundPerson => {
    if (foundPerson) {
      console.log('Person found:', foundPerson);
    } else {
      console.log('No person found with the provided ID');
    }
  })
  .catch(error => {
    console.error('Error finding person:', error);
  });

//Find a person by _id, add "hamburger" to the list of the person's favoriteFoods and save the updated Person 

Person.findById({_id: '64a5d7fca07739e572058559'})
  .then(foundPerson => {
    if (foundPerson) {
      foundPerson.favoriteFoods.push('hamburger'); // Add "hamburger" to the favoriteFoods array
      foundPerson.markModified('favoriteFoods'); // Mark the field 'favoriteFoods' as edited

     // Save the updated Person
      foundPerson.save()
        .then(updatedPerson => {
          console.log('Person updated:', updatedPerson);
        })
        .catch(error => {
          console.error('Error occurred while saving updated person:', error);
        });
    } else {
      console.log('No person found with the provided ID');
    }
  })
  .catch(error => {
    console.error('Error finding person:', error);
  });


// Find a person by name and update the age to 20 using findOneAndUpdate()
const personName = 'Lina';

Person.findOneAndUpdate(
  { name: personName }, 
  { age: 20 }, // Update age to 20
  { new: true } // Return the updated document
)
  .then(updatedPerson => {
    if (updatedPerson) {
      console.log('Person updated:', updatedPerson);
    } else {
      console.log('No person found with the provided name');
    }
  })
  .catch(error => {
    console.error('Error occurred while updating person:', error);
  });

  // Delete a person by _id using the findByIdAndRemove() method 
 
  Person.findByIdAndRemove({_id:'64a5894cabc8e165049ed1a5'})
  .then(removedPerson => {
    if (removedPerson) {
      console.log('Person removed:', removedPerson);
    } else {
      console.log('No person found with the provided ID');
    }
  })
  .catch(error => {
    console.error('Error removing person:', error);
  });

//Delete all people whose name is "Mary" using Model.remove() or deleteMany()

Person.deleteMany({ name: 'Mary' })
.then((result) => {
  console.log('Number of people removed:', result.deletedCount);
})
.catch((error) => {
  console.error('Error removing people:', error);
});

// Chain Search Query Helpers to Narrow Search Results

Person.find({ favoriteFoods: 'Burger' })
  .sort('name')
  .limit(2)
  .select('-age')
  .exec()
  .then(data => {
    console.log('People who like Burger:', data);
  })
  .catch(error => {
    console.error('Error occurred while searching:', error);
  });



