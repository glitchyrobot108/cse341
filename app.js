const express = require("express")
require('dotenv').config()
const connectDB = require("./db/connect")
const app = express()

//Connect MongoDB
connectDB()

//Middleware
app.use(express.json())

//Routs Handling
app.use("/contacts", require("./routes/contacts"))

//Initial base route
app.get("/", (req, res) => {
    res.send("Casey Owens")
})

//Run server
app.listen(process.env.PORT)
console.log("Web server running on port: " + process.env.PORT)