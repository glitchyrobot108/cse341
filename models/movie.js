const mongoose = require('mongoose')
const Schema = mongoose.Schema
 
const movieSchema = new Schema({
    title: String,
    releasedata: Date,
    genre: String,
    rating: String,
    parentRating: String,
    starring: Array,
    director: String
},{versionKey: false}
);
 
const Movie = mongoose.model('Movie', movieSchema)
 
module.exports = Movie