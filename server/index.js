const express = require("express");
const cors = require("cors");
const registration = require("./routers/User Accounts/Signup.jsx");
const signin = require("./routers/User Accounts/Signin.jsx");
const getUsername = require("./routers/GetUsername/Username.js");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/register", registration);
app.post("/signin", signin);
app.get("/username", getUsername);

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
