const { Router } = require("express");
const Joi = require("joi");
const { CryptoModel } = require("../db/index");

const app = Router();

try {
  app.get("/", async (req, res) => {
    const cryptos = await CryptoModel.find();

    res.json({ cryptos });
  });
} catch (error) {
  console.log(error);
  res.status(500).json({ err: `${error.name}:${error.message}` });
}

app.post("/", async (req, res) => {
  const JoiSchema = Joi.object().keys({
    name: Joi.string().required().max(128),
    quantity: Joi.number().required(),
  });
  try {
    const { name, quantity } = await JoiSchema.validateAsync(req.body);

    const slug = `${name
      .trim()
      .toLowerCase()} ${new Date().toLocaleString()}`.replace(
      /\s+|\,\s|\:|\//gm,
      "-"
    );

    const newCrypto = await CryptoModel.create({
      slug,
      name,
      quantity,
    });

    res.status(201).json({ newPost });
  } catch (error) {
    res.status(500).json({ err: `${error.name}:${error.message}` });
  }
});

module.exports = app;
