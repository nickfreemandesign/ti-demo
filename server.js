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

app.listen(8080)




module.exports = app
