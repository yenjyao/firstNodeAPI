const express = require('express')
const routes = require('./routes/api')
const mongoose = require('mongoose')
const app = express()
const port = 3000

mongoose.connect('mongodb+srv://test:test@climberapi.fdxtr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true})

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api', routes)

// Listen to hosting (e.g. heroku) port or local port
app.listen(process.env.port || port, () => console.log(`Server running at http://127.0.0.1:${port}/`))
