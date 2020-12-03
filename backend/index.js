const express = require("express");
const app = express();
require('dotenv').config()
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require('mysql');
const passport = require('passport');
const Routes = require('./routes');
const cookieSession = require('cookie-session');
//const port = 8000;

app.use(bodyParser.json());
app.use(cors());
//Configure Session Storage
app.use(cookieSession({
  name: 'session-name',
  keys: ['key1', 'key2']
}));
//Configure Passport
app.use(passport.initialize());
app.use(passport.session());
//DB Connection

app.use("/api", Routes);
//starting server
app.listen(8000,()=>(console.log("Running!!")));

// app.get('/failed', (req, res) => {
//   res.send('<h1>Log in Failed :(</h1>')
// });
// app.get('/', (req, res) => {
//   res.send('<h1>Home</h1>')
// });
// // Middleware - Check user is Logged in
// const checkUserLoggedIn = (req, res, next) => {
//   req.user ? next(): res.sendStatus(401);
// }

// //Protected Route.
// app.get('/profile', checkUserLoggedIn, (req, res) => {
//   res.send(`<h1>${req.user.displayName}'s Profile Page</h1>`)
// });

// //Auth Routes
// app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
//   function(req, res) {
//     res.redirect('/profile');
//   }
// );

// //Logout
// app.get('/logout', (req, res) => {
//     req.session = null;
//     req.logout();
//     res.redirect('/');
// })
