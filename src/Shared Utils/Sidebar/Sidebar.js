import React, { useEffect, useState } from "react";
import { FaBars, FaUserAlt } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import "./Sidebar.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { GiAutoRepair } from "react-icons/gi";
import axios from "axios";
import Prompts from "../../Prompts";
import './Usestate.css'
import styled from "styled-components";

const BottomSection = styled.div.attrs((props) => ({
  // Define the prop as an attribute to avoid the warning
  isOpen: props.isOpen,
}))`
  width: 100%;
  @media (max-width: 480px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
  }
`;

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
          // console.log(data.data);
          setArtisan({
            username: data.data[0].username,
            id: data.data[0].id,
            profile_photo: data.data[0].profile_photo,
          });
        });
    };
    handlePost();
  }, [id]);

  
  const display = {
    display: isOpen ? "flex" : "none",
  };
  const display2 = {
    display: isOpen ? "inline-block" : "none",
  };

  return (
      <div className="sidebar--container">
        <Prompts showModal={showModal} hideModal={openModal} message={'Do you want to log out?'} 
        action={handleLogout} title={'Logging out'}/>
        <div className="sidebar" 
        style={{ width: isOpen ? "var(--sidebar-width-open)" : "var(--sidebar-width-closed)" }}>
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
          <BottomSection isOpen={isOpen}>
            <div className="bottom--section">
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
          </BottomSection>
        </div>
      </div>
  );
}

export default Sidebar;
