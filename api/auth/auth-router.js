const express = require('express');
const bcryptjs = require("bcryptjs");
const router = express.Router();
const { buildToken } = require('./buildToken.js');
const { checkUsernameExists, validateRoleName } = require('./auth-middleware.js');
const Users = require('../users/users-model');

router.post("/register", validateRoleName, (req, res, next) => {
    const credentials = req.body
    if(credentials){
      const rounds = process.env.BCRYPT_ROUNDS || 8;
      const hash = bcrypts.hashSync(credentials.password, rounds);
      credentials.password = hash;
  
      Users.add(credentials)
        .then(user => {
          res.status(201).json({data: user});
        })
        .catch(err => {
          res.status(500).json({message: 'username and password required'})
        })
    } else {
      res.status(400).json({message: 'username taken'})
    }
});

router.post("/login", checkUsernameExists, (req, res, next) => {
    const { username, password } = req.body;
  
    if(req.body){
      Users.findBy({username: username})
        .then(([user]) => {
          if(user && bcryptjs.hashSync(password, user.password)){
            const token = buildToken(user)
            res.status(200).json({message: `${username} is back!`, token});
          } else {
            res.status(401).json({message: "Invalid credentials"})
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