const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
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
