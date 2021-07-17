const express = require('express')
const router = express.Router()
const Climber = require('../models/climbers.js')
const app = express()
const port = 3000

// Get list of climbers in the db
router.get('/climbers', (req, res) => {
    res.send({type: 'GET'})
})

// Add new climber to the database
router.post('/climbers', (req, res) => {
    Climber.create(req.body).then((climber) => {
        res.send(climber)
    }).catch(next())
})

// Update climber in the db
router.put('/climbers/:id', (req, res) => {
    res.send({type: 'PUT'})
})

// Delete climber in the db
router.delete('/climbers/:id', (req, res) => {
    res.send({type: req.params.id})
})

module.exports = router