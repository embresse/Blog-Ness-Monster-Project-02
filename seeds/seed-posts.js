const { Post } = require('../models');

const postData = [
    {
        user_id: 1,
        post_title: 'Big Foot: Friend or Foe',
        post_content: 'Does anyone out there think he is real? Is he our friend?? Please comment your thoughts..',
        post_date: new Date(),
        
    },
    {
        user_id: 2,
        post_title: 'I want to Believe...',
        post_content: 'My younger sister mysteriously disappeared when we were children...my whole career I have searched for her. If you have any information about ET experiences please comment below!!!',
        post_date: new Date(),
    },
    

]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;