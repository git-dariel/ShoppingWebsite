import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../features/cartSlice";

import { Link } from "react-router-dom";
import "../styles/Cart/Cart.css";
import axios from "axios";
import ScrollBarStyle from "../styles/ScrollBar/ScrollBarStyles";
import Modal from "../components/Modal";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = async (product) => {
    try {
      dispatch(addToCart(product));

      const response = await axios.post(
        "http://localhost:3001/cartProduct/increment",
        {
          ...product,
          quantity: 1,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDecreaseCart = async (product) => {
    try {
      dispatch(decreaseCart(product));
      const response = await axios.post(
        "http://localhost:3001/cartProduct/decrement",
        {
          ...product,
          quantity: 1,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleRemoveFromCart = async (product) => {
    try {
      dispatch(removeFromCart(product));

      const response = await axios.delete(
        `http://localhost:3001/cartProduct/${product.id}`
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClearCart = async () => {
    try {
      dispatch(clearCart());

      const response = await axios.delete("http://localhost:3001/cart");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/store">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems &&
              cart.cartItems.map((cartItem) => (
                <div className="cart-item" key={cartItem.id}>
                  <div className="cart-product">
                    <img src={cartItem.image} alt={cartItem.name} />
                    <div>
                      <h3>{cartItem.name}</h3>
                      <button onClick={() => handleRemoveFromCart(cartItem)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-product-price">${cartItem.price}</div>
                  <div className="cart-product-quantity">
                    <button
                      className="decrease"
                      onClick={() => handleDecreaseCart(cartItem)}
                    >
                      -
                    </button>
                    <div className="count">{cartItem.cartQuantity}</div>
                    <button
                      className="increase"
                      onClick={() => handleAddToCart(cartItem)}
                    >
                      +
                    </button>
                  </div>
                  <div className="cart-product-total-price">
                    ${cartItem.price * cartItem.cartQuantity}
                  </div>
                </div>
              ))}
          </div>
          <div className="cart-summary">
            <button className="clear-btn" onClick={() => handleClearCart()}>
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button onClick={() => setOpenModal(true)}>Check out</button>
              <Modal open={openModal} onClose={() => setOpenModal(false)} />
              <div className="continue-shopping">
                <Link to="/store">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      <ScrollBarStyle />
    </div>
  );
};

export default Cart;
