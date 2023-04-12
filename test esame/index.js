const { Router } = require("express");

const app = Router();

app.get("/", (req, res) => res.send("API"));

app.use("/cryptos", require("./cryptos"));

module.exports = app;
