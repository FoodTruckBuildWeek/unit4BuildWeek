const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const session = require('express-session');
const knexSessionStore = require('connect-session-knex')(session)

const authRouter = require('./auth/auth-router.js')
const usersRouter = require('./users/users-router.js')
const dinerRouter = require('./diners/diner-router.js')
const operatorRouter = require('./operators/operator-router.js')
const menuRouter = require('./menu/menu-router.js')
const truckRouter = require('./truck/truck-router.js')

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/auth', authRouter)
server.use('/api/users', usersRouter)
server.use('/api/diners', dinerRouter)
server.use('api/operators', operatorRouter)
server.use('api/menu', menuRouter)
server.use('api/trucks', truckRouter)

server.use((err, req, res, next) => {
    res.status(500).json({
      message: err.message,
      stack: err.stack,
    });
  });

  const sessionOptions = {
    name: 'mycookie',
    secret: 'cookiesareyumyummewantcookies',
    cookie: {
      maxAge: 1000 * 60 * 60,
      secure: false,
      httpOnly: true
    },
    resave: false,
    saveUninitialized: false,
  
    store: new knexSessionStore({
      knex: require('./data/db-config'),
      tablename: 'sessions',
      sidfieldname: 'sid',
      createtable: true,
      clearInterval: 1000 * 60 * 60
    })
  }

  server.use(session(sessionOptions))

module.exports = server
