const mongoose = require('mongoose')
const Schema = mongoose.Schema
 
const actorSchema = new Schema({
    firstName: String,
    lastName: String,
    birthdate: Date,
    country: String,
    stars_in: Array
},{versionKey: false}
)
 
const Actor = mongoose.model('Actor', actorSchema)
 
module.exports = Actor