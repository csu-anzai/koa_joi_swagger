const knex = require('knex')
const config = {
  client: 'mysql',
  connection: {
    host: '106.15.230.136',
    user: 'teskboom',
    password: 'teskboom@2018',
    database: 'teskboom_db',
    supportBigNumbers: true,
    charset: 'utf8mb4',
    connectTimeout: 15000
  }
}
const db = knex(config)

module.exports = db
