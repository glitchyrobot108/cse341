const mongoose = require('mongoose')
const Schema = mongoose.Schema
 
const actorSchema = new Schema({
    firstName: String,
    lastName: String,
    birthdate: Date,
    country: String,
    movies: String
},{versionKey: false}
)
 
const Actor = mongoose.model('Actor', actorSchema)
 
module.exports = Actor