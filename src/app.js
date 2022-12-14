const express = require('express')
const  v1Router = require('./v1/routes/projects.routes')

const app = express()

//middlewares:
app.use(express.json())
express.urlencoded({ extended: false })

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.get('/', (req, res) => {
    res.send(`
      <h1>✌ Hello world</h1>
      <p> <h2>Please go to the following path: 
      <a href="https://api-rest-best-practices.herokuapp.com/api/v1/projects">  /api/v1/projects </a></h2>
    `)
})

app.use('/api/v1/projects', v1Router)

module.exports = app