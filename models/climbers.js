const mongoose = require('mongoose')
const Schema = mongoose.Schema

const climberSchema = new Schema({
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
    }
})

const Climber = mongoose.model('climber', climberSchema)

module.exports = Climber