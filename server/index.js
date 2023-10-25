const express = require("express");
const cors = require("cors");
const registration = require("./routers/User Accounts/Signup.jsx");
const signin = require("./routers/User Accounts/Signin.jsx");
const getUsername = require("./routers/GetUsername/Username.js");
const getProducts = require("./routers/Connection/apiProducts.js");
const app = express();

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post("/register", registration);
app.post("/signin", signin);
app.get("/username", getUsername);
app.get("/products", getProducts);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
