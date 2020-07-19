const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Auth 2.0 config
passport.use(new GoogleStrategy({
  clientID: '421600316763-t3uratm8sbpbarbhvfa9c6r1railigr0.apps.googleusercontent.com',
  clientSecret: '80lGpREqxN8bWoF2e0T_-tyS',
  callbackURL: 'http://localhost:8000/api/google/callback',
}, (accessToken, refreshToken, profile, done) => {
  done(null, profile);
}));

// serialize user when saving to session
passport.serializeUser((user, serialize) => {
  serialize(null, user);
});

// deserialize user when reading from session
passport.deserializeUser((obj, deserialize) => {
  deserialize(null, obj);
});
