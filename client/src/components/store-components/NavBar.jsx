import React, { useEffect, useState } from "react";
import style from "../../styles/Store/NavBar";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import axios from "axios";

const NavBar = () => {
  const [username, setUsername] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3001/username");
        setUsername(res.data[0].username);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <style.Container>
      <style.Wrapper>
        <style.Left>
          <style.Logo>Welcome {username}</style.Logo>
        </style.Left>
        <style.Right>
          <style.MenuItem>
            <Link className="cart-link" to="/cart">
              <MdOutlineShoppingCart className="cart-icon" />
            </Link>
            <Link className="logout-link" to="/">
              <HiOutlineLogout className="logout-icon" />
            </Link>
          </style.MenuItem>
        </style.Right>
      </style.Wrapper>
    </style.Container>
  );
};

export default NavBar;
