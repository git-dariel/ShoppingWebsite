import React, { useState } from "react";
import style from "../styles/User Account/SignIn";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    axios
      .post("http://localhost:3001/signin", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(response.data[0].username);
          navigate("/store");
        }
      });
  };

  return (
    <style.WrapperBack>
      <style.Background>
        <style.Title>Sign in</style.Title>
        <p>Lorem ipsum dolor sit amet.</p>
        <style.InputWrapper>
          <style.Input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <style.Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </style.InputWrapper>
        <style.ButtonWrap>
          <style.Button onClick={handleSignIn}>Log in</style.Button>
        </style.ButtonWrap>
        <style.Result>{loginStatus}</style.Result>

        <style.Descipt>
          Don't have an account? <Link to={"/signup"}>Signup</Link>
        </style.Descipt>

        <style.Home>
          <Link to="/">Go to home</Link>
        </style.Home>
      </style.Background>
    </style.WrapperBack>
  );
};

export default Signin;
