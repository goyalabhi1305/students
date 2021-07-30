const mongoose = require('mongoose')
require('dotenv/config')
mongoose.connect(
    process.env.DATABASE_URL,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    }
).then(() => {
    console.log('connected db')
}).catch((e) => {
    console.log("An error occured. Error: " + e)
})