const {expect} = require('chai')
const { syncAndSeed } = require('../db')
const app = require('supertest')(require('../app'))


describe('User.byToken', ()=>{
        describe('with a valid token', ()=> {
            it('returns a user', async()=> {
                expect(1).to.equal(1)
            })
        })
    })

const request = require('supertest');
const express = require('express');

//const app = express();



describe('Routes', ()=> {
    beforeEach(() => syncAndSeed())
    describe('GET /', ()=> {
        it('show information about the api', async() => {
            const response = await app.get('/');
            expect(response.status).to.equal(200);
        })
    })
})

