const {expect} = require('chai')

describe('User.byToken', ()=>{
        describe('with a valid token', ()=> {
            it('returns a user', async()=> {
                expect(1).to.equal(1)
            })
        })
    })

const request = require('supertest');
const express = require('express');

const app = express();

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

request(app)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });