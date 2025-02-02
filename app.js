const express = require("express")
require('dotenv').config()
const connectDB = require("./db/connect")
const app = express()
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");
const cors = require("cors")
const corsOptions = {
    origin: "*", // Replace with your allowed origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204
};

//Connect MongoDB
connectDB()

//Middleware
app.use(express.json())
.use(cors(corsOptions));

//Routs Handling
app.use("/contacts", require("./routes/contacts"))

//Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

//Initial base route
app.get("/", (req, res) => {
    res.send("Casey Owens")
})

//Run server
app.listen(process.env.PORT)
console.log("Web server running on port: " + process.env.PORT)