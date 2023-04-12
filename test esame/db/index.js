const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { keepAlive: true });

    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

const models = {
  CryptoModel: require("./models/Crypto"),
};

module.exports = {
  connect,
  ...models,
};
