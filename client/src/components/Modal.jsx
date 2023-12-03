import React, { useState } from "react";
import apple from "../assets/img/apple-white.png";
import "../styles/Cart/Modal.css";

const Modal = ({ open, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 500);
  };

  if (!open) return null;
  return (
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
        <p className="userName">Dariel Avila</p>
        <p className="contact">09387513103</p>
        <p className="person-address">
          Dulo ng PUP Villafuerte Compound Yumul Street Boarding House sa may
          Pulang Gate, Bocboc, Lopez, South Luzon, Quezon 4316
        </p>
        <a href="#" className="change">
          Change
        </a>
      </div>

      <div className="child-ordered">
        <h5 className="title-ordered">Products Ordered</h5>

        <table>
          <tr>
            <th>Name of Product</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Item Subtotal</th>
            <th>Shipping Fee</th>
          </tr>
          <tr>
            <img src={apple} alt="" className="productImg" />
            <td>Product 1</td>
            <td>$10</td>
            <td>2</td>
            <td>$20</td>
          </tr>
        </table>
      </div>

      <div className="orderTotal">
        <p>Order Total</p>
        <div className="total-container">
          <p>$1000</p>
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
          <p>$1000</p>
        </div>
        <p>Shipping Total</p>
        <div className="ship">
          <p>$10</p>
        </div>
        <p>Total Payment</p>
        <div className="total">
          <p>$1010</p>
        </div>
      </div>
      <button className="place-order">Place Order</button>
    </div>
  );
};

export default Modal;
