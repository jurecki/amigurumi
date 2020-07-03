const express = require('express');
const router = express.Router();

const User = require('../models/user.model');


router.post('/users', async (req, res) => {
  try {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new User({ firstName, lastName, email, password });
    await newUser.save();
    res.json(newUser);

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile/:id', async (req, res) => {
  try {
    const result = await User.find({ id: req.params.id });
    if (!result) res.status(404).json({ post: 'Not found' });
    else {
      res.json(result);
    }
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/users/login', async (req, res) => {
  try {
    console.log('userlogin', req.body);
    const result = await User.find({ email: req.body.email, password: req.body.password });
    if (result.length === 0) res.status(404).json({ messsage: 'Not found' });
    else {
      console.log('poprawnie zalogowany', result);
      res.json(result);
      //res.redirect(`/api/profile/${result[0]._id}`);

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