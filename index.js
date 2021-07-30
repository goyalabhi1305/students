const express = require('express')
const bodyParser = require('body-parser')

require('dotenv')
require('./db/db.js')

const app = express()


//setting middleware
app.use(bodyParser.json())


//importing routes definitions
const Data = require('./routes/data.js')

//setting routes imagedisplay
app.use('/data', Data)


app.get('/', (req, res) => {
    res.send('Welcome to server')
})


app.listen(process.env.PORT || 8000, () =>
    console.log('server running')
)