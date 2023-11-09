const db = require("../Connection/server");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const registration = (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).send("Username, email, and password are required");
  }

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error hashing password");
    }

    db.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, hash],
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
