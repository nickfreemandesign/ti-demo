'use strict'

const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'users',
        {
            user_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: false,
                allowNull: false
            },
            first_name: {
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: null
            },
            last_name: {
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: null
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false
            },
            password: {
                // TODO: ONLY FOR MVP. replace with properties for HASH and SALT.
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: null
            },
            ratings: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true
            }
        },
        {
            timestamps: false
        }
    )
}
