import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsChatLeftDots } from "react-icons/bs";
import "./ProfileHeader.css";
// import profilepic from './slide1.jpg'
import user from '../../MOCK_DATA.json'

function ProfileHeader({ title }) {
  const username = localStorage.getItem("username");
  return (
    <div className="profile--header">
      <div className="left--header">
        <BsChatLeftDots size={20} />
        <h4>{title}</h4>
      </div>
      <div className="right--header">
        {user[0].profile_photo ? <img src={user[0].profile_photo} alt=""/> : <FaUserCircle size={40}/>}
        <p>{username}</p>
      </div>
    </div>
  );
}

export default ProfileHeader;
