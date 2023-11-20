import { styled } from "styled-components";

const Wrapper = styled.section``;

const Image = styled.img`
  height: auto;
  width: 1200px;
  margin-top: 80px;
`;

const ImgWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const Title = styled.div`
  margin-top: 50px;
  color: white;
  text-align: center;
`;

const H1 = styled.h1`
  font-weight: bold;
  font-size: 60px;
`;

const Ptag = styled.p`
  margin-top: 10px;
  color: white;
  font-size: 25px;
`;

const Button = styled.button`
  margin-top: 30px;
  height: 35px;
  width: 150px;
  background-color: white;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  font-weight: bold;
  color: black;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  transform-origin: center;

  &:hover {
    transform: scale(1.05);
  }
`;

const style = {
  Wrapper,
  Image,
  ImgWrapper,
  Title,
  H1,
  Ptag,
  Button,
};

export default style;
