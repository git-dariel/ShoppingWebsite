import { default as React, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import Contents from "../components/store-components/Contents";
import NavBar from "../components/store-components/NavBar";
import ScrollBarStyle from "../styles/ScrollBar/ScrollBarStyles";

const Store = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/store") {
      navigate(-1);
    }
  }, [location, navigate]);

  return (
    <>
      <NavBar />
      <Contents />
      <ScrollBarStyle />
    </>
  );
};

export default Store;
