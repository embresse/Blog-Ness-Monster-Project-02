const { Comment } = require('../models');

const commentData = [
    {
        post_id: 1,
        user_id: 2,
        comment_text: 'GREAT POST!!!',
        comment_date: new Date(),
    },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;