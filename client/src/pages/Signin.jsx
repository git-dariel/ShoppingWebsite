import React from "react";
import style from "../styles/User Account/SignIn";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <style.WrapperBack>
      <style.Background>
        <style.Title>Sign in</style.Title>
        <p>Lorem ipsum dolor sit amet.</p>
        <style.InputWrapper>
          <style.Input type="text" placeholder="Name" />
          <style.Input type="password" placeholder="Password" />
        </style.InputWrapper>
        <style.ButtonWrap>
          <style.Button>Log in</style.Button>
        </style.ButtonWrap>

        <style.Home>
          <Link to="/">Go to home</Link>
        </style.Home>
      </style.Background>
    </style.WrapperBack>
  );
};

export default Signin;
