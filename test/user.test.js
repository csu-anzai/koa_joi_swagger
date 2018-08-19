const request = require('supertest')
const should = require('should')
const server = require('./index')
const describe = require('mocha').describe
const it = require('mocha').it

describe('GET /users!!!', () => {
  let response
  it('response get /users result!!', () => {
    request(server)
      .get('/users')
      .set('Accept', 'application/json')
      .expect(200)
      .then(res => {
        response = res.body
      })
  })

  it('response mast be String!!', () => {
    should(response).be.String
  })
})

describe('POST /users!!!', () => {
  it('response post /users success!!', () => {
    request(server)
      .post('/users')
      .send({phone: '13322224444', password: 'hahaha.js'})
      .set('Accept', 'application/json')
      .expect(200)
      .then(res => {
        should(res.body).be.String
      })
  })

  it('requires property "password"', function () {
    request(server)
      .post('/users')
      .send({phone: '13322221111'})
      .set('Accept', 'application/json')
      .expect(422)
      .then(response => {
        should(response.error.text).match('requires property "password"')
      })
  })

  it('requires property "phone"', function () {
    request(server)
      .post('/users')
      .send({password: 'hahahahhaha'})
      .set('Accept', 'application/json')
      .expect(422)
      .then(response => {
        should(response.error.text).match('requires property "phone"')
      })
  })
})
