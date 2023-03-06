const { User } = require('../models');

// seed data of users for blog
const userData = 
[
    {
      id: 1, 
      username: 'bigfootbeliever',
      password: 'password123',
      user_created: new Date(),

    },
    {
        id: 2, 
        username: 'aliensRreal',
        password: 'password456',
        user_created: new Date(),
      
    },
    {
        id: 3,
        username: 'appalachiangnomes',
        password: 'password789',
        user_created: new Date(),
      
    },
    {
        id: 4,
        username: 'blacklag00n123',
        password: 'password012',
        user_created: new Date(),
      
    },
    {
        id: 5,
        username: 'werewolvvesoflondon',
        password: 'password111',
        user_created: new Date(),
      
    },
  ];

  const seedUsers = () => User.bulkCreate(userData);

  module.exports = seedUsers;

  