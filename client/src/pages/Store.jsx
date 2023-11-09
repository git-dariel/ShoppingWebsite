import { default as React, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import style from "../../src/styles/Store/Store";
import Contents from "../components/store-components/Contents";
import NavBar from "../components/store-components/NavBar";

const Store = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/store") {
      navigate(-1);
    }
  }, [location, navigate]);

  return (
    <style.Wrapper>
      <NavBar />
      <Contents />
    </style.Wrapper>
  );
};

export default Store;
