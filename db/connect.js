require("dotenv").config()
const mongoose = require("mongoose")

const connectDB =  () => {
     mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    console.log("Connected to DB")
}

module.exports = connectDB