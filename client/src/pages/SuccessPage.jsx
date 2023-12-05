import React from "react";
import "../styles/SuccessOrder/SuccessPage.css";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/store");
  };

  return (
    <div className="success-page">
      <h1 className="success-message">
        Congratulations, you have successfully ordered your stuff.
      </h1>

      <button className="goBack" onClick={handleButtonClick}>Continue Shopping</button>
    </div>
  );
};

export default SuccessPage;
