const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "store",
});

db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected to database");
  }
});

module.exports = db;
