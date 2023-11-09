import styled from "styled-components";

const WrapperBack = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #ebe3d5;
`;

const Background = styled.div`
  width: 380px;
  height: 500px;
  background-color: #f3eeea;
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);

  p {
    margin-top: 20px;
    text-align: center;
  }
`;

const Title = styled.h1`
  margin-top: 70px;
  text-align: center;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 5px 5px;
  width: 250px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const Button = styled.button`
  height: 30px;
  width: 100px;
  width: 260px;
  font-size: 14px;
  background-color: #323264;
  color: white;
  font-size: 14px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #46468b;
    transition: 0.2s ease-in;
  }
`;

const DesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Descript = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

const Login = styled.p`
  margin-left: 8px;
  font-size: 14px;
  font-weight: 500;
`;

const Home = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

const style = {
  WrapperBack,
  Background,
  Title,
  InputWrapper,
  Input,
  ButtonWrap,
  Button,
  DesWrapper,
  Descript,
  Login,
  Home,
};

export default style;
