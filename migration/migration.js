const fs = require('fs')
const path = require('path')
const _ = require('lodash')
global.Promise = require('bluebird')
const db = require('./index')

let tasks = []
fs.readdirSync(path.join('./operation')).map(file => {
  let migrations = require(path.join(__dirname, file))(db)
  let funcArray = []
  migrations.map(migration => {
    // knex不能定义model 正在考虑最优方案
  })
  tasks = _.union(tasks, migrations)
})

Promise
  .reduce(tasks, (total, task) => Promise.resolve().then(task), 0)
  .then(() => {
    console.log('sync db done!')
    process.exit()
  })
