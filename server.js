const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')

const morgan = require('morgan')
const path = require('path')
const app = express()

const db = require('./models')
const Sequelize = require('sequelize')
const {
    or,
    gt,
    lt
} = Sequelize.Op

// middleware
app.use(cors())
app.use(bodyParser.json({
    type: 'application/*+json'
}))
app.use(bodyParser.raw({
    type: 'application/*'
}))
app.use(bodyParser.urlencoded({
    extended: false
}))


app.get('/', function(req, res, next) {
    console.log('works')
    res.end()
})

app.get('/borrow', async function(req, res) {
    const items = await db.posts.findAll({
       where: {
            status: 'open'
        }
    })

    res.send(items)
})

app.patch('/borrow', async function(req, res) {
    // TODO: parse body and alter record to show 'shared' instead of 'open'
})

app.post('/lend', async function(req, res) {
    // TODO: parse body and post record to POSTS 
})

app.post('/user', async function (req, res) {
    // TODO: parse body and post new user
})

app.post('/user/rate/:id', async function (req, res) {
    // TODO: parse body to get rating and alter record for user to reflect new rating
})



app.listen(8080)




module.exports = app
