import React from "react";
import style from "../styles/Home/NavBar";
import { Link } from "react-router-dom";
import appleLogo from "../assets/img/apple-white.png";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  return (
    <style.Container>
      <style.Wrapper>
        <style.Left>
          <style.Logo src={appleLogo} alt="apple logo" />
        </style.Left>
        <style.Center></style.Center>
        <style.Right>
          <style.MenuItem>
            <Link className="link" to="/signin">
              SIGN IN
            </Link>
          </style.MenuItem>

          <style.MenuItem>
            <Link className="link" to="/signup">
              SIGN UP
            </Link>
          </style.MenuItem>

          <style.MenuItem>
            <ScrollLink
              to="apple-section"
              smooth={true}
              duration={500}
              className="link"
            >
              ABOUT US
            </ScrollLink>
          </style.MenuItem>
        </style.Right>
      </style.Wrapper>
    </style.Container>
  );
};

export default NavBar;
