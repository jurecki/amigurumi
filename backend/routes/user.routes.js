const express = require('express');
const router = express.Router();

const User = require('../models/user.model');

router.get('/user/logged', async (req, res) => {
  try {
    const id = req.user.id;
    const firstName = req.user.name.givenName;
    const lastName = req.user.name.familyName;
    const email = req.user.emails[0].value;

    const result = await User.find({ id: id });

    if (result.length === 0) {
      const newUser = new User({ id: id, firstName: firstName, lastName: lastName, email: email });
      await newUser.save();
      res.redirect(`/api/user/logged/${req.user.id}`);
    } else {
      res.redirect(`/api/user/logged/${req.user.id}`);
    }




  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/user/logged/:id', async (req, res) => {
  try {
    const result = await User.find({ id: req.params.id });
    if (!result) res.status(404).json({ post: 'Not found' });
    else {
      console.log('szczególy usera');
      res.json(result);
    }
  }
  catch (err) {
    res.status(500).json(err);
  }
});


router.get('/user/no-permission', (req, res) => {
  console.log('norPermission');
  //res.render('noPermission');
});


module.exports = router;