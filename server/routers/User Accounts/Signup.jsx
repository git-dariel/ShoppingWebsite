const db = require("../Connection/server");

const registration = (req, res) => {
  const { username, email, password } = req.body;

  db.query(
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
    [username, email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send("User registered successfully");
      }
    }
  );
};

module.exports = registration;
