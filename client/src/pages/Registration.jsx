import React from "react";
import styled from "styled-components";
import "../css/registration/registration.css";
import { Link } from "react-router-dom";

const WrapperBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Background = styled.div`
  width: 380px;
  height: 500px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  margin-top: 30px;
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

const Registration = () => {
  return (
    <div className="App">
      <WrapperBack>
        <Background>
          <Title>Sign up</Title>
          <p>Lorem ipsum dolor sit amet.</p>
          <InputWrapper>
            <Input type="text" placeholder="Name" />
            <Input type="text" placeholder="Email" />
            <Input type="password" placeholder="Password" />
          </InputWrapper>
          <ButtonWrap>
            <Button>Sign up</Button>
          </ButtonWrap>

          <DesWrapper>
            <Descript>Already have an account?</Descript>
            <Login>
              <Link to="/signin">Login</Link>
            </Login>
          </DesWrapper>

          <Home>
            <Login>
              <Link to="/">Go to home</Link>
            </Login>
          </Home>
        </Background>
      </WrapperBack>
    </div>
  );
};

export default Registration;
