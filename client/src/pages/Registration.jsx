import React, { useState } from "react";
import style from "../styles/User Account/Registration";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import appleLogo from "../assets/img/apple-white.png";

const Registration = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !firstname ||
      !lastname ||
      !address ||
      !contact ||
      !email ||
      !password
    ) {
      toast.error("Please fill all the fields", {
        position: "top-center",
      });
    } else if (contact.length > 11) {
      toast.error("Your contact number exceeds the 11-number limit.", {
        position: "top-center",
      });
    } else {
      try {
        const response = await axios.post("http://localhost:3001/register", {
          firstname: firstname,
          lastname: lastname,
          address: address,
          email: email,
          password: password,
          contact: contact,
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
        <div className="apple-logo">
          <style.Logo src={appleLogo} alt="apple logo" />
        </div>
        <p>Create an Account</p>
        <style.InputWrapper>
          <style.Input
            type="text"
            placeholder="Enter your firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <style.Input
            type="text"
            placeholder="Enter your lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <style.Input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <style.Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <style.Input
            type="number"
            placeholder="Enter your contact number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <style.TextArea
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
            <Link className="signin" to="/signin">
              Signin
            </Link>
          </style.Login>
        </style.DesWrapper>

        <style.Home>
          <style.Login>
            <Link className="home" to="/">
              Go to home
            </Link>
          </style.Login>
        </style.Home>
      </style.Background>
    </style.WrapperBack>
  );
};

export default Registration;
