const express = require('express')
const  v1Router = require('./v1/routes/projects.routes')

const app = express()

//middlewares:
app.use(express.json())
express.urlencoded({extended: false})

app.get('/', (req, res) => {
    res.send('✌ Hello world')
})

app.use('/api/v1/projects', v1Router)

module.exports = app