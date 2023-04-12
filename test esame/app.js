require("dotenv").config();

const express = require("express");

const cors = require("cors");
const helmet = require("helmet");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(helmet());

app.get("/", (req, res) => res.send("Server running"));

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
