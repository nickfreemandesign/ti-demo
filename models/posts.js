'use strict'

const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'posts',
        {
            post_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: false,
                allowNull: false
            },
            item: {
                type: Sequelize.STRING,
                allowNull: false
            },
            description: {
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: null
            },
            status: {
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: null
            }
            //borrower_id
            //lender_id
        }
    )
}
