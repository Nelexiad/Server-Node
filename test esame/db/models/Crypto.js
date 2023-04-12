const { Schema, model } = require("mongoose");
const paginate = require("mongoose-paginate-v2");

const CryptoSchema = new Schema({
  name: {
    $type: String,
    required: true,
    unique: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

CryptoSchema.plugin(paginate);

module.exports = model("Crypto", CryptoSchema);
