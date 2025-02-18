const swaggerAutogen = require("swagger-autogen")()

const host = "cse341-r34r.onrender.com"
const schemes = ["https"]
// const host = "localhost:3000"
// const schemes = ["http"]

const doc = {
    info: {
        title: "My NotNetflix Swagger API",
        description: "API Documentation",
    },
    host: host,
    schemes: schemes
}

const outputFile = "./swagger_output.json"
const endpointsFiles = ["./app.js"]

swaggerAutogen(outputFile, endpointsFiles, doc)