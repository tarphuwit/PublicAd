const products = require("../models/productSchema");

exports.read = async (req, res) => {
  try {
    const id = req.params.id;
    const productread = await products.findOne({ _id: id }).exec();
    res.send(productread);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};

exports.list = async (req, res) => {
  try {
    const productlist = await products.find({}).exec();
    res.send(productlist);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};
exports.create = async (req, res) => {
  try {
    console.log(req.body);
    const producted = await products(req.body).save();
    res.send(producted);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const updated = await products
      .findOneAndUpdate({ _id: id }, req.body, { new: true })
      .exec();
    res.send(updated);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};
exports.remove = async (req, res) => {
  try {
    const id = req.params.id;
    const removed = await products.findOneAndDelete({ _id: id }).exec();
    res.send(removed);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};
