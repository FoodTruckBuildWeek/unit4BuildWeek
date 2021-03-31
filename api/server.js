const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const authRouter = require('./auth/auth-router.js')
const usersRouter = require('./users/users-router.js')
const dinerRouter = require('./diners/diner-router.js')
const operatorRouter = require('./operators/operator-router.js')
const truckRouter = require('./truck/truck-router.js')

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/auth', authRouter)
server.use('/api/users', usersRouter)
server.use('/api/diners', dinerRouter)
server.use('/api/operators', operatorRouter)
server.use('/api/trucks', truckRouter)

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
      message: err.message,
      stack: err.stack,
    });
  });

module.exports = server
