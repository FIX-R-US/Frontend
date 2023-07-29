import React, { useEffect, useState } from "react";
import { FaBars, FaUserAlt } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import "./Sidebar.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { GiAutoRepair } from "react-icons/gi";
import { StyleRoot } from "radium";
import axios from "axios";
import Prompts from "../../Prompts";

function Sidebar({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const [artisan, setArtisan] = useState({
    username: "",
    id: "",
    profile_photo: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const id = sessionStorage.getItem("id");

  const handleLogout = () => {
    setTimeout(() => {
      navigate("/login");
    }, [700]);
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("firstname");
    sessionStorage.removeItem("lastname");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("contact");
    sessionStorage.removeItem("location");
  };

  const openModal = () => {
    setShowModal(prevShow => !prevShow)
    setIsOpen(false)
  }

  useEffect(() => {
    const handlePost = async () => {
      await axios
        .post("http://localhost:3001/details/getuser", { id })
        .then((data) => {
          console.log(data.data);
          setArtisan({
            username: data.data[0].username,
            id: data.data[0].id,
            profile_photo: data.data[0].profile_photo,
          });
        });
    };
    handlePost();
  }, [id]);

  const width = {
    width: isOpen ? "250px" : "50px",
    "@media (min-width: 760px) and (max-width: 920px)": {
      width: isOpen ? "350px" : "60px",
    },
    "@media (max-width: 480px)": {
      width: isOpen ? "240px" : "40px",
    },
    "@media (max-width: 376px)": {
      width: isOpen ? "230px" : "35px",
    },
  };
  const display = {
    display: isOpen ? "flex" : "none",
  };
  const display2 = {
    display: isOpen ? "inline-block" : "none",
  };
  const display3 = {
    "@media (max-width: 480px)": {
      display: isOpen ? "flex" : "none",
    },
  };

  return (
    <StyleRoot>
      <div className="sidebar--container">
        <Prompts showModal={showModal} hideModal={openModal} message={'Do you want to log out?'} 
        action={handleLogout} title={'Logging out'}/>
        <div className="sidebar" style={width}>
          <div className="top--section">
            <div className="logo" style={display}>
              <GiAutoRepair size={25} />
              <h4>FIX-R-US</h4>
            </div>
            <div className="bars">
              <FaBars
                size={25}
                onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
              />
            </div>
          </div>
          <div className="user--icon" style={display2}>
            {artisan.profile_photo ? (
              <img src={artisan.profile_photo} alt="" className="icon" />
            ) : (
              <FaUserAlt size={70} className="icon" />
            )}
            <h5>{artisan.username}</h5>
          </div>
          <div className="bottom--section" style={display3}>
            <div>
              {data.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={`link ${
                    location.pathname === item.path ? "active" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="icon">{item.icon}</div>
                  <div className="text--link" style={display}>
                    {item.name}
                  </div>
                </NavLink>
              ))}
            </div>
            {isOpen ? (
              <button
                className="logout--btn"
                style={display2}
                onClick={openModal}
              >
                Logout <MdLogout size={20} />
              </button>
            ) : (
              <MdLogout
                className="logout--icon"
                size={20}
                onClick={openModal}
              />
            )}
          </div>
        </div>
      </div>
    </StyleRoot>
  );
}

export default Sidebar;
