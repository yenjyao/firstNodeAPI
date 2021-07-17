const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
})

const ClimberSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name field is required"]
    },
    age: {
        type: Number
    },
    isMember: {
        type: Boolean,
        default: false
    },
    geometry: GeoSchema
})

const Climber = mongoose.model('climber', ClimberSchema)

module.exports = Climber