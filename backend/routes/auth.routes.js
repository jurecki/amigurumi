const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/user.model');

router.get('/google',
  passport.authenticate('google', { scope: ['email', 'profile'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/api/user/no-permission' }),
  async (req, res) => {
    try {
      const id = req.user.id;
      const firstName = req.user.name.givenName;
      const lastName = req.user.name.familyName;
      const email = req.user.emails[0].value;

      const result = await User.find({ id: id });

      if (result.length === 0) {
        const newUser = new User({ id: id, firstName: firstName, lastName: lastName, email: email });
        await newUser.save();
        res.redirect(`/api/profile/${req.user.id}`);
      } else {
        res.redirect(`/api/profile/${req.user.id}`);
      }

    } catch (err) {
      res.status(500).json(err);
    }
  }
);

module.exports = router;
