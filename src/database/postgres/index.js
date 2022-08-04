const { Sequelize } = require('sequelize')
require('dotenv').config()

const { DB_HOST, DB_USER, DB_PASSWORD, DATABASE } = process.env

const sequelize = new Sequelize(
    DATABASE,
    DB_USER,
    DB_PASSWORD,
    {
        host: DB_HOST,
        dialect: 'postgres'
    }
)

module.exports = sequelize