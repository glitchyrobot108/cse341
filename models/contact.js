const mongoose = require('mongoose')
const Schema = mongoose.Schema
 
const contactSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    favoriteColor: String,
    birthday: String
});
 
const Contact = mongoose.model('Contact', contactSchema)
 
module.exports = Contact