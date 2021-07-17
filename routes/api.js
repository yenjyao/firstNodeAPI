const express = require('express')
const app = express()
const port = 3000
const router = express.Router()

// Get list of climbers in the db
router.get('/climbers', (req, res) => {
    res.send({type: 'GET'})
})

// Add new climber to the database
router.post('/climbers', (req, res) => {
    res.send({type: 'POST'})
})

// Update climber in the db
router.put('/climbers/:id', (req, res) => {
    res.send({type: 'PUT'})
})

// Delete climber in the db
router.delete('/climbers/:id', (req, res) => {
    res.send({type: 'DELETE'})
})

module.exports = router