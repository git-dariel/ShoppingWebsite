import React from "react";
import NavBar from "../components/NavBar";
import LandingPage from "../components/LandingPage";
import "../App.css";
import ScrollBarStyles from "../styles/ScrollBar/ScrollBarStyles";

const Home = () => {
  return (
    <div>
      <NavBar />
      <LandingPage />
      <ScrollBarStyles />
    </div>
  );
};

export default Home;
