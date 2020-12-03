const { Router } = require("express");
var express = require("express");
var router = express.Router();
const mysql = require('mysql');
const passport = require('passport');
require('./auth');

router.get("/profile", 
(req, res) => {
  if(req.user){
    const connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      database: 'enthire'
    }); 
    connection.connect(function(err) {
      if (err) {
        console.error('error connecting');
        return;
      }
      console.log('connected to DB');
    });
    console.log(req.user)
  
    var post  = {id: req.user.id, name: req.user.displayName, email: req.user.emails.value, image:req.user.photos.value};
    var query = 'INSERT INTO credentials (id,name,email,image) SELECT * FROM (SELECT `id` = '+req.user.id+', `name` = '+req.user.displayName+', `email` ='+req.user.emails.value+', `image` = '+req.user.photos.value+') AS tmp WHERE NOT EXISTS ( SELECT id FROM credentials WHERE id = '+req.user.id+' ) LIMIT 1';
    connection.query(query, function (error, results, fields) {
      if(error){
        console.log(error);
      }
      if(results){
        console.log(results);
      }
    });
    return res.json(req.user.displayName)
  }
  else{
    return res.status(400).json({
      error:"Failed"
  });
  }
  }
  );

router.get("/auth/google", passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback',  passport.authenticate('google', { failureRedirect: '/api/failed' }),
  function(req, res) {
    res.redirect('/api/profile');
  });

router.get('/failed',(req,res)=>{
    res.json("Failed");
});

router.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.json('success');
})

module.exports = router;