import React from "react";
import style from "../styles/Home/NavBar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <style.Container>
      <style.Wrapper>
        <style.Left>
          <style.Logo>STORE by persyphone</style.Logo>
        </style.Left>
        <style.Center></style.Center>
        <style.Right>
          <style.MenuItem>
            <Link className="link" to="/signup">
              REGISTRATION
            </Link>
          </style.MenuItem>

          <style.MenuItem>
            <Link className="link" to="/signin">
              SIGN IN
            </Link>
          </style.MenuItem>
        </style.Right>
      </style.Wrapper>
    </style.Container>
  );
};

export default NavBar;
