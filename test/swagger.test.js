const request = require('supertest')
const should = require('should')
const server = require('./index')

let swagger

describe('GET /swagger.json!!!', function () {
  it('respond with json', function () {
    request(server)
      .get('/swagger.json')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        swagger = response.body
      })
  })
})

describe('test swagger', () => {
  it('swagger.json mast be an Object!!', () => {
    should(swagger).be.an.Object()
  })

  it('swagger.json have property openapi!!', () => {
    should(swagger).have.property('openapi', '3.0.0')
  })
})