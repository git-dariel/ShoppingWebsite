const db = require("../Connection/server");

const postProductToCart = (req, res) => {
  const { name, price } = req.body;

  db.query(
    "INSERT INTO cart (name, price) VALUES (?,?)",
    [name, price],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Server error");
      } else {
        res.status(200).send("Product added to cart successfully");
      }
    }
  );
};

module.exports = postProductToCart;
