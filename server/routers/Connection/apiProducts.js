const products = require("../Products/products");

const getProducts = (req, res) => {
  res.send(products);
};

module.exports = getProducts;
