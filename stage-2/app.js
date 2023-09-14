const express = require("express");
const config = require("./src/config/config");
const morgan = require("./src/config/morgan");
const { errorConverter, errorHandler } = require("./src/middleware/error");
const personRoute = require("./src/persons/person.route");

const app = express();

if (config.env !== "test") {
    app.use(morgan.successHandler);
    app.use(morgan.errorHandler);
}
app.use(express.json());

app.use("/api", personRoute);

app.get("/", (req, res) => {
    res.send({ message: "Welcome to Aphatheology HNG Second Task" });
});
app.use("*", (req, res) => {
    res.send({ message: "Route Not found" });
});

app.use(errorConverter);

app.use(errorHandler);

module.exports = app;
