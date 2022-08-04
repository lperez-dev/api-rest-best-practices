const app = require('./app')
const sequelize = require('./database/postgres/index')

require('dotenv').config()
const PORT = process.env.PORT

async function connectSequelize() {
    try {
        await sequelize.sync({ force: true })
        app.listen(PORT, () => {
            console.log(`🚀 API listening on port ${PORT}`)
        })
    } catch (err) {
        console.error('Unable to connect to the database:', err)        
    }
}

connectSequelize()