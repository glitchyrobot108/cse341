const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    favoriteColor: String,
    birthdate: Date
})

const Contact = mongoose.model("Contact", schema)

module.exports = Contact