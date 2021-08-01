// You need to learn how to write specs

const {expect} = require('chai') // remember, expect is from chai
const { syncAndSeed } = require('../db') 
const {models: {Actor, Movie, Role}} = require('../db')
const app = require('supertest')(require('../app')) //


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
    describe('GET api/movies', ()=>{
        it('returns products', async()=>{
            const response = await app.get('/api/movies')
            expect(response.status).to.equal(200);
            //console.log(response.body.length)
            expect(response.body.length).to.equal(4)
        })
    })
    describe('GET api/actors', ()=>{
        it('returns products', async()=>{
            const response = await app.get('/api/actors')
            expect(response.status).to.equal(200);
            //console.log(response.body.length)
            expect(response.body.length).to.equal(5)
        })
    })
})

