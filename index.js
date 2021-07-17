const express = require('express')
const routes = require('./routes/api')
const mongoose = require('mongoose')
const app = express()
const port = 3000

mongoose.connect('mongodb+srv://test:test@climberapi.fdxtr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api', routes)

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(422).send({error: err.message})
})

// Listen to hosting (e.g. heroku) port or local port
app.listen(process.env.port || port, () => console.log(`Server running at http://127.0.0.1:${port}/`))
