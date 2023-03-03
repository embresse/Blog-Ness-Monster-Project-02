const { Post } = require('../models');

// seed posts for seed users 
const postData = [
    {
        user_id: 1,
        post_title: 'Big Foot: Friend or Foe',
        body: 'Does anyone out there think he is real? Is he our friend?? Please comment your thoughts..',
        post_date: new Date(),
        
    },
    {
        user_id: 2,
        post_title: 'I want to Believe...',
        body: 'My younger sister mysteriously disappeared when we were children...my whole career I have searched for her. If you have any information about ET experiences please comment below!!!',
        post_date: new Date(),
    },
    

]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;