import styled from "styled-components";

const WrapperBack = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Background = styled.div`
  width: 390px;
  height: auto;
  background-color: #010101;
  border-radius: 20px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2),
    -10px -10px 20px rgba(255, 255, 255, 0.05),
    -10px 10px 20px rgba(0, 0, 0, 0.2),
    10px -10px 20px rgba(255, 255, 255, 0.05), 0px 10px 20px rgba(0, 0, 0, 0.2),
    0px -10px 20px rgba(255, 255, 255, 0.05);

  p {
    margin-top: 20px;
    text-align: center;
    color: white;
  }
  .apple-logo {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
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
  padding: 10px;
  width: 250px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #7d7dff; /* Change border color on focus */
  }
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 10px;
  width: 250px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s;
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const Button = styled.button`
  height: 40px;
  width: 270px;
  font-size: 16px;
  background-color: #323264;
  color: white;
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

  .home {
    color: gray;
  }
  .signin {
    color: gray;
  }
`;

const Home = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

const style = {
  WrapperBack,
  Background,
  Logo,
  InputWrapper,
  Input,
  ButtonWrap,
  Button,
  DesWrapper,
  Descript,
  Login,
  Home,
  TextArea,
};

export default style;
