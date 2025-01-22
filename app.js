const express = require("express")
require('dotenv').config()
const connectDB = require("./db/connect")
const app = express()

connectDB()

const contactsRoute = require("./routes/contacts")

app.get("/", (req, res) => {
    res.send("Casey Owens")
})
app.use("/contacts", contactsRoute)
app.use(express.json())

app.listen(process.env.PORT)
console.log("Web server running on port: " + process.env.PORT)