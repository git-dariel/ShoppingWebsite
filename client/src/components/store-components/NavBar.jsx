import React from "react";
import { HiOutlineLogout } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import style from "../../styles/Store/NavBar";
import appleLogo from "../../assets/img/apple-white.png";

const NavBar = () => {
  const navigate = useNavigate();

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
          <style.Logo src={appleLogo} alt="apple logo" />
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
