const { User } = require('../models');

const userData = 
[
    {
      id: 1, 
      username: 'bigfootbeliever',
      email: 'johndoe@example.com',
      password: 'password123',
      user_created: new Date(),

    },
    {
        id: 2, 
        username: 'aliensRreal',
        email: 'foxmulder@example.com',
        password: 'password456',
        user_created: new Date(),
      
    },
    {
        id: 3,
        username: 'appalachiangnomes',
        email: 'gnomeplacelikehome@example.com',
        password: 'password789',
        user_created: new Date(),
      
    },
    {
        id: 4,
        username: 'blacklag00n123',
        email: 'swampmonst3r@example.com',
        password: 'password012',
        user_created: new Date(),
      
    },
    {
        id: 5,
        username: 'werewolvvesoflondon',
        email: 'fullmoonrising@example.com',
        password: 'password111',
        user_created: new Date(),
      
    },
  ];

  const seedUsers = () => User.bulkCreate(userData);

  module.exports = seedUsers;

  