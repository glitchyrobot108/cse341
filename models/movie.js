const mongoose = require('mongoose')
const Schema = mongoose.Schema
 
const movieSchema = new Schema({
    title: String,
    releasedate: Date,
    genre: String,
    rating: String,
    parentRating: String,
    actors: Array,
    director: String
},{versionKey: false}
)
 
const Movie = mongoose.model('Movie', movieSchema)
 
module.exports = Movie