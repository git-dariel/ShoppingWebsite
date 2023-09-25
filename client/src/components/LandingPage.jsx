import React, { useState } from "react";
import img from "../assets/img/img-cropted.jpg";
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
      <style.ImgWrapper>
        <style.Image src={img} alt="blank" />
      </style.ImgWrapper>

      <style.Title>
        <style.H1>Merry Christmas</style.H1>
        <style.H1>Miss Pauline</style.H1>
        <style.Ptag>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum quam
          magni reprehenderit, quis minus qui vitae veniam inventore commodi
          ullam numquam at quo necessitatibus beatae error excepturi enim
          exercitationem odit?
        </style.Ptag>
        <style.Button
          className={animateButton ? "ButtonAnimation" : ""}
          onClick={handleButtonClick}
        >
          Start Shopping!
        </style.Button>
      </style.Title>
    </style.Wrapper>
  );
};

export default LandingPage;
