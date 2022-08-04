const { UUIDV4 } = require('sequelize')
const { DataTypes }  = require('sequelize')
const sequelize = require('../../postgres/')
const Task = require('./Task')

const Project = sequelize.define('projects', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    name: {
        type: DataTypes.STRING,
    },
    priority: {
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.STRING
    }
}, {
    timestamps: true
})

Project.hasMany(Task, {
    foreignKey: 'projectid',
    sourceKey: 'id'
})

Task.belongsTo(Project, {
    foreignKey: 'projectid',
    targetId: 'id'
})

module.exports = Project