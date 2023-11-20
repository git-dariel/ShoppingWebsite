import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "../styles/User Account/SignIn";
import appleLogo from "../assets/img/apple-white.png";

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
          navigate("/loading");
        }
      });
  };

  return (
    <style.WrapperBack>
      <style.Background>
        <div className="apple-logo">
          <style.Logo src={appleLogo} alt="apple logo" />
        </div>

        <p>Sign in your Account</p>
        <style.InputWrapper>
          <style.Input
            type="text"
            placeholder="Enter your username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <style.Input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </style.InputWrapper>
        <style.ButtonWrap>
          <style.Button onClick={handleSignIn}>Log in</style.Button>
        </style.ButtonWrap>
        <style.Result>{loginStatus}</style.Result>

        <style.Descipt>
          Don't have an account?{" "}
          <Link className="signup" to={"/signup"}>
            Signup
          </Link>
        </style.Descipt>

        <style.Home>
          <Link className="home" to="/">
            Go to home
          </Link>
        </style.Home>
      </style.Background>
    </style.WrapperBack>
  );
};

export default Signin;
