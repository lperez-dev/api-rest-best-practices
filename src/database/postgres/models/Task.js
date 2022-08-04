const { DataTypes, UUIDV4 } = require('sequelize')
const sequelize = require('../../postgres')

const Task = sequelize.define('tasks', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4        
    },
    name: {
        type: DataTypes.STRING,
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: false
})

module.exports = Task