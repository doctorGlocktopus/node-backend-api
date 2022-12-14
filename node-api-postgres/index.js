const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 13000
var cors = require('cors')

const db = require('./queries')

app.use(cors())

app.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.use(bodyParser.json())
app.use(
        bodyParser.urlencoded({
            extended: true,
        })
        )

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})