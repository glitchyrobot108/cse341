const swaggerAutogen = require("swagger-autogen")();

const host = "https://cse341-r34r.onrender.com";
const schemes = ["https"];

const doc = {
    info: {
        title: "My Movies Swagger API",
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