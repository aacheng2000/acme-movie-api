const express = require('express')
const app = express()
const {models: {Movie,Actor,Role}} = require('./db')

module.exports = app

app.get('/', (req,res) => {
    res.send(`
    <html>
        <body>
            The Acme
        </body>
    </html>
    `)
})

app.get('/api/movies', async(req,res,next)=> {
    try {
        res.send(await Movie.findAll())
    }
    catch(ex){
        next(ex)
    }
})

app.get('/api/actors', async(req,res,next)=> {
    try {
        res.send(await Actor.findAll())
    }
    catch(ex){
        next(ex)
    }
})