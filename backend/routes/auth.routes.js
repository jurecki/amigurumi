const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/google',
  passport.authenticate('google', { scope: ['email', 'profile'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/api/user/no-permission' }),
  (req, res) => {

    res.redirect(`/api/user/logged`);
  }
);

module.exports = router;