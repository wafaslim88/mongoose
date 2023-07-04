const mongoose = require('mongoose');
const Person = require('./person');

// Create a new person instance
const newPerson = new Person({
    name: 'Wafa',
    age: 35,
    favoriteFoods: ['Salad', 'Lasagna']
  });

  // Save the person to the database
  newPerson.save()
  .then(savedPerson => {
    console.log('Person saved:', savedPerson);
  })
  .catch(error => {
    console.error('Error occurred while saving person:', error);
  });

// Function to create and save multiple people instances
const createManyPeople = () => {
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

  Person.create(arrayOfPeople, (err, people)=> {
    if (err) {
      console.error('Failed to save people:', err);
    } else {
      console.log('People saved successfully:', people);
   
    }
  });
};


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



