const swaggerAutogen = require("swagger-autogen")();

const host = "casey-cse341-24.onrender.com";
const schemes = ["https"];

const doc = {
    info: {
        title: "My Contacts Swagger API",
        description: "API Documentation",
    },
    host: host,
    schemes: schemes,
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./app.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require("./app");
});