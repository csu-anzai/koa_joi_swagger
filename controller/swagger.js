const swagger = require('../common/swagger')

class SwaggerController {
  async doc (ctx) {
    ctx.body = await swagger.generateSwagger()
  }
}

const swaggerdoc = new SwaggerController()
module.exports = swaggerdoc