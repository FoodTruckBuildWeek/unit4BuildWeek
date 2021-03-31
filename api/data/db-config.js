const knex = require('knex')
const configs = require('../../knexfile')
const knexPostgis = require('knex-postgis')

const environment = process.env.NODE_ENV || 'development';
const db = knex(configs[environment])
knexPostgis(db)
module.exports = db
