import React, { useState } from "react";
import style from "../styles/User Account/Registration";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!username || !email || !password) {
      toast.error("Please fill all the fields", {
        position: "top-center",
      });
    } else {
      try {
        const response = await axios.post("http://localhost:3001/register", {
          username: username,
          email: email,
          password: password,
        });
  
        console.log(response);
        toast.success("User registered successfully", {
          position: "top-center",
        });
        navigate("/signin");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <style.WrapperBack>
      <style.Background>
        <style.Title>Sign up</style.Title>
        <p>Lorem ipsum dolor sit amet.</p>
        <style.InputWrapper>
          <style.Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <style.Input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <style.Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </style.InputWrapper>
        <style.ButtonWrap>
          <style.Button type="submit" onClick={handleSubmit}>
            Sign up
          </style.Button>
        </style.ButtonWrap>

        <style.DesWrapper>
          <style.Descript>Already have an account?</style.Descript>
          <style.Login>
            <Link to="/signin">Signin</Link>
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
