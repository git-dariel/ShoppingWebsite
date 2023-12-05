const db = require("../Connection/server");

const getUsersInformation = (req, res) => {
  const query = "SELECT firstname, lastname, address, contact FROM users";
  db.query(query, (err, data) => {
    if (err) {
      console.log("Database query error:", err);
      return res.json(err);
    }
    if (data.length === 0) {
      console.log("No matching data in the database");
    }
    // else {
    //   console.log("Database query result:", data);
    // }
    return res.json(data);
  });
};

module.exports = getUsersInformation;
