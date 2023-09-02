import React, { useState } from "react";
import { styled } from "styled-components";
import img from "../assets/img/img-cropted.jpg";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Image = styled.img`
  height: auto;
  width: auto;
  margin-top: 35px;
  margin-left: 200px;
`;

const ImgWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: flex-start;
`;

const Title = styled.div`
  color: violet;
  margin-left: 90px;
`;

const H1 = styled.h1`
  font-weight: 300;
  margin-bottom: 5px;
  font-family: cursive;
`;

const Ptag = styled.p`
  margin-top: 15px;
  text-align: justify;
  color: black;
  margin-right: 190px;
`;

const Button = styled.button`
  margin-top: 35px;
  height: 35px;
  width: 200px;
  background-color: violet;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  color: white;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  transform-origin: center;

  &:hover {
    transform: scale(1.1);
  }

  &.ButtonAnimation {
    animation: buttonAnimation 0.5s ease-in-out;
  }
`;

const LandingPage = () => {
  const [animateButton, setAnimateButton] = useState(false);

  const handleButtonClick = () => {
    setAnimateButton(true);
  };

  return (
    <Wrapper>
      <ImgWrapper>
        <Image src={img} alt="blank" />
      </ImgWrapper>

      <Title>
        <H1>Merry Christmas</H1>
        <H1>Miss Pauline</H1>
        <Ptag>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum quam
          magni reprehenderit, quis minus qui vitae veniam inventore commodi
          ullam numquam at quo necessitatibus beatae error excepturi enim
          exercitationem odit?
        </Ptag>
        <Button
          className={animateButton ? "ButtonAnimation" : ""}
          onClick={handleButtonClick}
        >
          Start Shopping!
        </Button>
      </Title>
    </Wrapper>
  );
};

export default LandingPage;
