const express = require('express');
const bcryptjs = require("bcryptjs");
const router = express.Router();
const { buildToken } = require('./buildToken.js');
const Users = require('../users/users-model');

router.post("/register", (req, res) => {
    const credentials = req.body
    if(credentials){
      const rounds = process.env.BCRYPT_ROUNDS || 8;
      const hash = bcryptjs.hashSync(credentials.password, rounds);
      credentials.password = hash;
  
      Users.add(credentials)
        .then(user => {
          res.status(201).json({data: user});
        })
        .catch(err => {
          res.status(500).json({message: err.message})
        })
    } else {
      res.status(400).json({message: 'username taken'})
    }
});

router.post("/login", (req, res) => {
    const { username, password } = req.body;
  
    if(req.body){
      Users.findBy({username: username})
        .then(([user]) => {
          if(user && bcryptjs.compareSync(password, user.password)){
            const token = buildToken(user)
            res.status(200).json({message: `${username} is back!`, token});
          } else {
            res.status(401).json( )
          }
        })
        .catch(error => {
          res.status(500).json({message: error.message})
        })
    } else {
      res.status(400).json({
        message: "please provide username and password and the password shoud be alphanumeric"
      })
    }
});

module.exports = router;