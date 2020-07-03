const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
const passportConfig = require('./config/passport');

const productsRoutes = require('./routes/products.routes');
const categoriesRoutes = require('./routes/categories.routes');
const ordersRoutes = require('./routes/orders.routes');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const app = express();
const app1 = express();
/* MIDDLEWARE */

//init session mechanism
app.use(session({
  secret: 'anything',
  resave: true,
  saveUninitialized: true,
}));

// init passport
app.use(passport.initialize());
app.use(passport.session());

// standard middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



/* API ENDPOINTS */
app.use('/api', productsRoutes);
app.use('/api', categoriesRoutes);
app.use('/api', ordersRoutes);
app.use('/api', authRoutes);
app.use('/api', userRoutes);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ post: 'Not found...' });
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '../build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});


/* MONGOOSE */
mongoose.connect('mongodb://localhost:27017/amigurumiShop', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', err => console.log('Error: ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});

app1.listen(3000, () => {
  console.log('Server is running on port: ' + port);
});

app1.use('/api', userRoutes);
