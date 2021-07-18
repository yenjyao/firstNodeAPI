const express = require('express')
const router = express.Router()
const Climber = require('../models/climbers.js')
const app = express()
const port = 3000

// Get list of climbers in the db
router.get('/climbers', async (req, res, next) => {
    /* Climber.aggregate().near({ 
        near: {
            type: 'point',
            coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
        },
        distanceField: "dist.calculated", // required
        maxDistance: 1000000,
        query: { type: "public" },
        spherical: true,
        includeLocs: "dist.location",
        uniqueDocs: true
        }) */
        
        
        Climber.aggregate().match({

            id: ObjectId("60f30d60e5529055584eefca")

        }).then(function(climbers){
            res.send(climbers);
         })
})

// Add new climber to the database
router.post('/climbers', (req, res, next) => {
    try {
        Climber.create(req.body)
    } catch(err) {
        res.status(400).send({err: err.message})
    }
}) // if error, go to next middleware (error handling)


// Update climber in the db
router.put('/climbers/:id', getClimber, async (req, res, next) => {
    if(req.body.name != null) res.climber.name = req.body.name
    if(req.body.age != null) res.climber.age = req.body.age
    if(req.body.isMember != null) res.climber.isMember = req.body.isMember
    try {
        await res.climber.save()
        res.send({type: req.params.id, message: `${res.climber} is successfully updated`})
    } catch(err) {
        res.status(400).send({err: err.message})
    }
})

// Delete climber in the db
router.delete('/climbers/:id', getClimber, async (req, res, next) => {
    try{
        await res.climber.remove()
        res.send({type: req.params.id, message: `${res.climber} is successfully deleted`})
    } catch(err) {
        res.status(500).send({err: err.message})
    }    
})

async function getClimber(req, res, next) {
    let climber
    try {
        climber = await Climber.findById({_id: req.params.id})
        if(climber == null) return res.status(404).send("Cannot find climber")
    } catch(err) {
        return res.status(500).send({message: err.message})
    }
    res.climber = climber
    next()
}

module.exports = router