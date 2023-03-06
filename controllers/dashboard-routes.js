const router = require('express').Router();
const { Post } = require('../models/');
const withAuth = require('../utils/auth');

// if logged in shows all posts 
router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        userId: req.session.userId,
      },
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('new-post', {
      layout: 'dashboard',
      posts,
    });
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router; 