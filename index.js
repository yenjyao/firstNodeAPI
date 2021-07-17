const express = require('express')
const routes = require('./routes/api')
const app = express()
const port = 3000

app.use('/api', routes)

// Listen to hosting (e.g. heroku) port or local port
app.listen(process.env.port || port, () => console.log(`Server running at http://127.0.0.1:${port}/`))
