// const sequelize = require('../config/connection');

// const seedUsers = require('./seed-users');
// const seedPosts = require('./seed-posts');
// const seedComments = require('./seed-comments');

// // syncs all seed data
// const seedALL = async () => {
//     await sequelize.sync({ force: true });
//     console.log('\n----- DATABASE SYNCED -----\n');

//     await seedUsers();
//     console.log('\n----- USERS SYNCED -----\n');

//     await seedPosts();
//     console.log('\n----- POSTS SYNCED -----\n');

//     await seedComments();
//     console.log('\n----- COMMENTS SYNCED -----\n');

//     process.exit(0);
// };

// seedALL();

const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const posts = await Post.bulkCreate(postData);

  process.exit(0);
};

seedDatabase();