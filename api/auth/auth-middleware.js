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

    module.exports = {
        restricted,
        only,
      }
      