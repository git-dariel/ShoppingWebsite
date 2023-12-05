const express = require("express");
require("dotenv").config();
const cors = require("cors");
const registration = require("./routers/User Accounts/Signup.jsx");
const signin = require("./routers/User Accounts/Signin.jsx");
const getUsersInformation = require("./routers/GetUsername/UsersInformation.js");
const getProducts = require("./routers/Connection/apiProducts.js");
const postProductToCart = require("./routers/Products/postProductToCart.js");
const updateUsersInformation = require("./routers/Update/UpdateInformation.js");
const {
  incrementQuantity,
  decrementQuantity,
  deleteProduct,
  deleteAllProducts,
} = require("./routers/Products/cartOperations.js");
const app = express();

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post("/register", registration);
app.post("/signin", signin);
app.get("/userinfo", getUsersInformation);
app.get("/products", getProducts);
app.post("/cartProduct", postProductToCart);
app.post("/cartProduct/increment", incrementQuantity);
app.post("/cartProduct/decrement", decrementQuantity);
app.delete("/cartProduct/:id", deleteProduct);
app.delete("/cart", deleteAllProducts);
app.put("/updateUser/:id", updateUsersInformation);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
