import React, { useState } from "react";
import { FaBars, FaUserAlt } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import "./Sidebar.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { GiAutoRepair } from "react-icons/gi";
import { StyleRoot } from "radium";

function Sidebar({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    navigate("/login");
    localStorage.removeItem("username");
  };

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
            <FaUserAlt size={70} className="icon" />
            <h5>{username}</h5>
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
                onClick={handleLogout}
              >
                Logout <MdLogout size={20} />
              </button>
            ) : (
              <MdLogout
                className="logout--icon"
                size={20}
                onClick={handleLogout}
              />
            )}
          </div>
        </div>
      </div>
    </StyleRoot>
  );
}

export default Sidebar;
