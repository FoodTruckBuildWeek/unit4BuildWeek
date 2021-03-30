const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../secrets/index"); 

const restricted = (req, res, next) => {
  const token = req.headers.authorization
  if(!token){
    res.status(401).json({message: 'Token required'})
  } else {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if(err){
        res.status(401).json({message: 'Token invalid'})
      } else {
        req.decodedJwt = decoded
        next()
      }
    })
  }
}

const only = role_name => (req, res, next) => {
    if(req.decodedJwt.role_name === role_name){
      next()
    } else {
      res.status(403).json({message: 'This is not for you'})
     
    }
  }

// const checkUsernameExists = (req, res, next) => {
//     if(!req.body.user_username){
//       res.status(401).json({message: "Invalid credentials"})
//     } else {
//       next()
//     }
// }
//change this
// const validateRoleName = (req, res, next) => {
//     const { role } = req.body;
//     if(!role || role.trim() === '') {
//       req.role = 'diner';
//       next();
//     } else if (role.trim() === 'operator') {
//       res.status(422).json({ message: 'Role name can not be admin'});
//     } else if (role.trim().length > 32) {
//       res.status(422).json({ message: 'Role name can not be longer than 32 chars' });
//     } else {
//       req.role = role.trim()
//       next();
//     }
// }

    module.exports = {
        restricted,
        only,
      }
      