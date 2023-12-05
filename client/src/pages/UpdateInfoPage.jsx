import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import appleLogo from "../assets/img/apple-white.png";
import style from "../styles/User Account/Registration";
import { useNavigate } from "react-router-dom";


const UpdateInfoChange = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event, setState) => {
    setState(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstname || !lastname || !address || !contact) {
      toast.error("Please fill all the fields", {
        position: "top-center",
      });
    } else if (contact.length > 11) {
      toast.error("Your contact number exceeds the 11-number limit.", {
        position: "top-center",
      });
    } else {
      try {
        await axios.put(`http://localhost:3001/updateUser/:id`, {
          firstname: firstname,
          lastname: lastname,
          address: address,
          contact: contact,
        });

        toast.success("User information updated successfully", {
          position: "top-center",
        });
        navigate("/cart");
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get("http://localhost:3001/userinfo");

        if (res.data[0]) {
          setFirstname(res.data[0].firstname);
          setLastname(res.data[0].lastname);
          setAddress(res.data[0].address);
          setContact(res.data[0].contact);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllUsers();
  }, []);

  return (
    <style.WrapperBack>
      <style.Background>
        <div className="apple-logo">
          <style.Logo src={appleLogo} alt="apple logo" />
        </div>
        <p>Update Information</p>
        <form onSubmit={handleSubmit}>
          <style.InputWrapper>
            <style.Input
              type="text"
              placeholder="Enter your firstname"
              value={firstname}
              onChange={(event) => handleInputChange(event, setFirstname)}
            />
            <style.Input
              type="text"
              placeholder="Enter your lastname"
              value={lastname}
              onChange={(event) => handleInputChange(event, setLastname)}
            />
            <style.Input
              type="number"
              placeholder="Enter your contact number"
              value={contact}
              onChange={(event) => handleInputChange(event, setContact)}
            />
            <style.TextArea
              type="text"
              placeholder="Enter your address"
              value={address}
              onChange={(event) => handleInputChange(event, setAddress)}
            />
          </style.InputWrapper>
          <style.ButtonWrap>
            <style.Button type="submit">Update</style.Button>
          </style.ButtonWrap>
        </form>

        <style.Home>
          <style.Login>
            <Link className="home" to="/cart">
              Go back to cart
            </Link>
          </style.Login>
        </style.Home>
      </style.Background>
    </style.WrapperBack>
  );
};

export default UpdateInfoChange;
