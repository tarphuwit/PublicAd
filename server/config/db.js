const mongoose = require("mongoose");
const DB = process.env.DATABASE;

const connectDB = async () => {
  try {
    await mongoose.connect(DB);
    console.log("DB connected successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
