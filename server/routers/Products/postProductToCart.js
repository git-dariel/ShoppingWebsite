const db = require("../Connection/server");

const postProductToCart = (req, res) => {
  const { id, name, price, quantity } = req.body;

  db.query("SELECT * FROM cart WHERE cartID = ?", [id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Service error");
    } else {
      if (result.length > 0) {
        db.query(
          "UPDATE cart SET quantity = quantity + ? WHERE cartID = ?",
          [quantity, id],
          (err, result) => {
            if (err) {
              console.log(err);
              res.status(500).send("Service error");
            } else {
              res.status(200).send("Product quantity updated.");
            }
          }
        );
      } else {
        db.query(
          "INSERT INTO cart (cartID, name, price, quantity) VALUES (?,?,?,?)",
          [id, name, price, quantity],
          (err, result) => {
            if (err) {
              console.log(err);
              res.status(500).send("Server error");
            } else {
              res.status(200).send("Product added to cart successfully.");
            }
          }
        );
      }
    }
  });
};

module.exports = postProductToCart;
