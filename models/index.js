/**
 *  models/index.js
 */

const Sequelize = require('sequelize')

// Initialize database settings
var db = {}

const sequelize = new Sequelize('silverspoon', 'root', 'password', {
    host: dbHost,
    dialect: 'mysql',
    dialectOptions: { ssl: false },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false,
    define: {
        charset: 'utf8',
        timestamps: true,
        userscored: true
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

db.users = require('./users')(sequelize, Sequelize)
db.calls = require('./posts')(sequelize, Sequelize)


module.exports = db
