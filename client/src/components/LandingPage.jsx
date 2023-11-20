import React, { useState } from "react";
import img from "../assets/img/apple.png";
import style from "../styles/Home/LandingPage";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [animateButton, setAnimateButton] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setAnimateButton(true);
    navigate("./signin");
  };

  return (
    <style.Wrapper>
      <style.Title>
        <style.H1>iPhone 15 Pro</style.H1>
        <style.Ptag>Titanium. So strong. So light. So Pro</style.Ptag>
        <style.Button
          className={animateButton ? "ButtonAnimation" : ""}
          onClick={handleButtonClick}
        >
          Discover
        </style.Button>
      </style.Title>
      <style.ImgWrapper>
        <style.Image src={img} alt="blank" />
      </style.ImgWrapper>
    </style.Wrapper>
  );
};

export default LandingPage;
