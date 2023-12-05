import React from "react";
import NavBar from "../components/NavBar";
import LandingPage from "../components/LandingPage";
import "../App.css";
import ScrollBarStyles from "../styles/ScrollBar/ScrollBarStyles";
import Section from "../components/Section";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <LandingPage />
      <Section />
      <Footer />
      <ScrollBarStyles />
    </div>
  );
};

export default Home;
