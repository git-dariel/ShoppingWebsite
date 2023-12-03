const db = require("../Connection/server");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const registration = (req, res) => {
  const { firstname, lastname, address, email, password, contact } = req.body;

  if ( !email || !password || !firstname || !lastname || !address || !contact) {
    return res.status(400).send("firstname, lastname, address, contact, email, and password are required");
  }

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error hashing password");
    }

    db.query(
      "INSERT INTO users (firstname, lastname, address, email, password, contact) VALUES (?, ?, ?, ?, ?, ?)",
      [firstname, lastname, address, email, hash, contact],
      (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).send("Error registering user");
        } else {
          res.status(200).send("User registered successfully");
        }
      }
    );
  });
};

module.exports = registration;
