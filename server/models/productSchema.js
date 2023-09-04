const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    strategy: String,
    implementation: String,
    email: String,
    mobile: Number,
    budget: Number,
    year: Number,
    evaluation: Number,
    strength: String,
    weak: String,
    development: String,
    improvement: String,
    suggestion: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("products", productSchema);
