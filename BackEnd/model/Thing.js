const mongoose = require("mongoose");

const thingSchema = mongoose.Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  imageURL: { type: String, required: true },
  year: { type: String, required: true },
  genre: { type: String, required: true },
  averageRating: { type: Number, required: true },
});

module.exports = mongoose.model("Thing", thingSchema);
