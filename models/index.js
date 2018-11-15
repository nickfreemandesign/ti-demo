/**
 *  models/index.js
 */

const Sequelize = require('sequelize')

// Initialize database settings
var db = {}

const sequelize = new Sequelize('silverspoon', 'root', 'password', {
    host: 'localhost',
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

var User = require('./users')(sequelize, Sequelize)
var Post = require('./posts')(sequelize, Sequelize)

User.hasMany(Post, { foreignKey: 'borrower_id' })
User.hasMany(Post, { foreignKey: 'lender_id' })

Post.belongsTo(User, { foreignKey: 'lender_id' })

db.users = User
db.posts = Post

module.exports = db
