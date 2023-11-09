import React, { useEffect, useState } from "react";
import style from "../../styles/Store/NavBar";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import axios from "axios";
import { toast } from "react-toastify";

const NavBar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3001/username");
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    const confirm = window.confirm("Are you sure you want to logout?");

    if (!confirm) {
      return;
    } else {
      localStorage.removeItem("token");
      navigate("/");
      toast.success("User logged out successfully", {
        position: "top-center",
      });
    }
  };

  return (
    <style.Container>
      <style.Wrapper>
        <style.Left>
          <style.Logo>Welcome</style.Logo>
        </style.Left>
        <style.Right>
          <style.MenuItem>
            <Link className="cart-link" to="/cart">
              <MdOutlineShoppingCart className="cart-icon" />
            </Link>

            <HiOutlineLogout className="logout-icon" onClick={handleLogout} />
          </style.MenuItem>
        </style.Right>
      </style.Wrapper>
    </style.Container>
  );
};

export default NavBar;
