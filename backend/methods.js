require('./auth');
const passport = require('passport');

// Middleware - Check user is Logged in
exports.checkUserLoggedIn = (req, res, next) => {
    req.user ? next(): res.sendStatus(401);
  }

exports.authenticate = () =>{
    passport.authenticate('google', { scope: ['profile', 'email'] });
}

exports.callback = (req,res)=>{
    passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {
    res.redirect('/profile');
  }
}