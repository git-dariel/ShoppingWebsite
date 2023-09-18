import React from "react";
import style from "../styles/SignUp/Registration";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <style.WrapperBack>
      <style.Background>
        <style.Title>Sign up</style.Title>
        <p>Lorem ipsum dolor sit amet.</p>
        <style.InputWrapper>
          <style.Input type="text" placeholder="Name" />
          <style.Input type="text" placeholder="Email" />
          <style.Input type="password" placeholder="Password" />
        </style.InputWrapper>
        <style.ButtonWrap>
          <style.Button>Sign up</style.Button>
        </style.ButtonWrap>

        <style.DesWrapper>
          <style.Descript>Already have an account?</style.Descript>
          <style.Login>
            <Link to="/signin">Login</Link>
          </style.Login>
        </style.DesWrapper>

        <style.Home>
          <style.Login>
            <Link to="/">Go to home</Link>
          </style.Login>
        </style.Home>
      </style.Background>
    </style.WrapperBack>
  );
};

export default Registration;
