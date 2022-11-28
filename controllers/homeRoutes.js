const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
const router = require('express').Router();

// rendering all posts to homepage
router.get('/', // withAuth, */
(req, res) => {
    console.log(req.session);

    Post.findAll({
        attributes: [
          'id',
          'post_text',
          // 'title',
          'created_at',
          [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
        ],
        order: [['created_at', 'DESC']],
        include: [
          {
            model: Comment,
            attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include: {
              model: User,
              attributes: ['username']
            }
          },
          {
            model: User,
            attributes: ['username', 'id']
          }
        ]
      })
        .then(dbPostData => {
          // pass a single post object into the homepage template
          const posts = dbPostData.map(post => post.get({ plain: true }));
    
          // defining log-in status
          let loginStatus;
          if (typeof req.session != 'undefined') {
            loginStatus = req.session.user;
            console.log('loginStatus', loginStatus);
          } else {
              loginStatus = false;
          }
          
          res.render('homepage', { posts,  loggedIn: loginStatus }
          );
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});


// redirecting users to homepage once they log in
router.get('/login', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return; 
    }
    res.render('login');
});


// rendering sign up page 
router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router; 