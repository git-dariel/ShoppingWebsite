const db = require("../Connection/server");

const getUsername = (req, res) => {
  const query = "SELECT * FROM users";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

module.exports = getUsername;
