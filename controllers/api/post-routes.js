const router = require('express').Router();
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');

// get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.findAll({ include: { model: User, attributes: ['username'] } });
        res.status(200).json(posts);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// get one post
router.get('/:id', async (req, res) => {
    try {
      const post = await Post.findByPk(req.params.id, {include: { model: User, attributes: ['username'] } });
      
      if (!post) { // return specific error 
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// create a new post
router.post('/', withAuth, async (req, res) => {
    try {
      const newPost = await Post.create({
        post_title: req.body.post_title,
        body: req.body.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  module.exports = router; 