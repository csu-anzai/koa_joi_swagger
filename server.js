/********
  Written By AlfieriChou
*********/
const bodyParser = require('koa-bodyparser')
const Koa = require('koa')
const logger = require('koa-logger')
const koabody = require('koa-body')
const views = require('koa-views')
const index = require('./app/routes/index')
const path = require('path')
const config = require('./config')
const context = require('./app/common/context')

const app = new Koa()

app.use(async (ctx, next) => {
  if (ctx.request.method === 'OPTIONS') {
    ctx.response.status = 200
  }
  ctx.set('Access-Control-Allow-Origin', ctx.request.header.origin)
  ctx.set('Access-Control-Allow-Credentials', true)
  ctx.set('Access-Control-Max-Age', 86400000)
  ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST, DELETE')
  ctx.set('Access-Control-Allow-Headers', 'x-requested-with, accept, origin, content-type')
  await next()
})

const keys = Object.keys(context)
keys.map(key => {
  Object.defineProperty(app.context, key, context[key])
})

app
  .use(logger())
  .use(views(path.join('./views'), {map: {html: 'nunjucks'}}))
  .use(koabody({}))
  .use(index.middleware())
  .use(bodyParser())

if (!module.parent) {
  app.listen(config.port)
  console.log(`✅  The server is running at http://localhost:${config.port}`)
}

module.exports = app
