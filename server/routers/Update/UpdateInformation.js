const db = require("../Connection/server");

const updateUsersInformation = (req, res) => {
  const user_id = req.params.id;
  const { firstname, lastname, address, contact, id } = req.body;

  const q =
    "UPDATE users SET `firstname` = ?, `lastname` = ?, `address` = ?, `contact` = ? WHERE user_id = ?";

  const values = [firstname, lastname, address, contact, user_id];

  db.query(q, values, (err, data) => {
    if (err) return res.json(err);
    return res.json("User Information has been updated successfully");
  });
};

module.exports = updateUsersInformation;
