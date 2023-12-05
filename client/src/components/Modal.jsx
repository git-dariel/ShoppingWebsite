import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import apple from "../assets/img/apple-white.png";
import "../styles/Cart/Modal.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cartSlice";

const Modal = ({ open, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(clearCart());
    navigate("/success");
  };

  const updateClick = () => {
    navigate(`/updateInfo/${userInfo.user_id}`)
  }

  let shippingFee = 10;

  useEffect(() => {
    if (open) {
      axios
        .get("http://localhost:3001/userinfo")
        .then((response) => {
          // Access the first object in the response array
          const user = response.data[0];
          setUserInfo(user);
        })
        .catch((error) => console.log(error));
    }
  }, [open]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 500);
  };

  if (!open) return null;
  return (
    <>
    {open && <div className="backdrop" onClick={handleClose}></div>}
    <div className={`parent-container ${isClosing ? "closing" : ""}`}>
      <h6 className="close-button" onClick={handleClose}>
        x
      </h6>
      <div className="header">
        <img src={apple} alt="apple-logo" className="appleLogo" />
        <h1 className="check">Checkout</h1>
      </div>
      <h5 className="title-address">Delivery Address</h5>
      <div className="child-address">
        <h1 className="userName">
          {userInfo.firstname} {userInfo.lastname}
        </h1>
        <h1 className="contact">{userInfo.contact}</h1>
        <h1 className="person-address">{userInfo.address}</h1>
        <a onClick={updateClick} className="change">
          Change
        </a>
      </div>

      <div className="child-ordered">
        <h5 className="title-ordered">Products Ordered</h5>
        <table>
          <tr>
            <th>Product</th>
            <th>Name of the Product</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Item Subtotal</th>
          </tr>
          {cart.cartItems.map((item) => (
            <tr key={item.id}>
              <img src={item.image} alt="" className="productImg" />
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.cartQuantity}</td>
              <td>${item.price * item.cartQuantity}</td>
            </tr>
          ))}
        </table>
      </div>

      <div className="shipping-fee">
        <h1 className="fee">Shipping Fee</h1>
        <div className="shipping-container">
          <h4>${shippingFee}</h4>
        </div>
      </div>

      <div className="orderTotal">
        <p>Order Total</p>
        <div className="total-container">
          <p>${cart.cartTotalAmount}</p>
        </div>
      </div>

      <div className="payment-method">
        <p>Payment Method</p>

        <select>
          <option value="cash">Cash on Delivery</option>
          <option value="card">Credit/Debit</option>
          <option value="banking">Online Banking</option>
          <option value="googlePay">Google Pay</option>
          <option value="eWallet">E-Wallet</option>
        </select>
      </div>

      <div className="totals">
        <p>Merchandise Total</p>
        <div className="mer">
          <p>${cart.cartTotalAmount}</p>
        </div>
        <p>Shipping Total</p>
        <div className="ship">
          <p>$10</p>
        </div>
        <p>Total Payment</p>
        <div className="total">
          <p>${cart.cartTotalAmount + shippingFee}</p>
        </div>
      </div>
      <button onClick={handleButtonClick} className="place-order">
        Place Order
      </button>
    </div>
    </>
  );
};

export default Modal;
