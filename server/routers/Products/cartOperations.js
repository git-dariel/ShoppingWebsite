const db = require("../Connection/server");

//Increment quantity
const incrementQuantity = (req, res) => {
  const { id, quantity } = req.body;

  db.query(
    "UPDATE cart SET quantity = quantity + ? WHERE cartID = ?",
    [quantity, id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Server error");
      } else {
        res.status(200).send("Product quantity incremented.");
      }
    }
  );
};

// Decrement quantity
const decrementQuantity = (req, res) => {
  const { id, quantity } = req.body;

  db.query(
    "UPDATE cart SET quantity = quantity - ? WHERE cartID = ?",
    [quantity, id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Server error");
      } else {
        // Check if the quantity is now zero
        db.query(
          "SELECT quantity FROM cart WHERE cartID = ?",
          [id],
          (err, result) => {
            if (err) {
              console.log(err);
              res.status(500).send("Server error");
            } else {
              if (result[0].quantity === 0) {
                // If the quantity is zero, delete the product from the cart
                db.query(
                  "DELETE FROM cart WHERE cartID = ?",
                  [id],
                  (err, result) => {
                    if (err) {
                      console.log(err);
                      res.status(500).send("Server error");
                    } else {
                      res
                        .status(200)
                        .send("Product removed from cart successfully");
                    }
                  }
                );
              } else {
                res
                  .status(200)
                  .send("Product quantity decremented successfully");
              }
            }
          }
        );
      }
    }
  );
};

//Delete product based on id
const deleteProduct = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM cart WHERE cartID = ?", [id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Server error");
    } else {
      res.status(200).send("Product removed from cart successfully");
    }
  });
};

//Delete all products
const deleteAllProducts = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM cart", [id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Server error");
    } else {
      res.status(200).send("All products removed from cart.");
    }
  });
};

module.exports = {
  incrementQuantity,
  decrementQuantity,
  deleteProduct,
  deleteAllProducts,
};
