const express = require("express")
require('dotenv').config()
const app = express()

app.get("/", (req, res) => {
    res.send("Casey Owens")
})

app.listen(process.env.PORT)
console.log("Web server running on port: " + process.env.PORT)