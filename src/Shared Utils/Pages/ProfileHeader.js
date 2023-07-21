import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsChatLeftDots } from "react-icons/bs";
import "./ProfileHeader.css";
// import profilepic from './slide1.jpg'
//import user from "../../MOCK_DATA.json";
import axios from "axios";

function ProfileHeader({ title }) {
  const id = localStorage.getItem("id");
  const [artisan, setArtisan] = useState({
    username: "",
    id: "",
    profile_photo: "",
  });

  useEffect(() => {
    axios.post("http://localhost:3001/details/getuser", { id }).then((data) => {
      //console.log(data.data);
      setArtisan({
        username: data.data[0].username,
        id: data.data[0].id,
        profile_photo: data.data[0].profile_photo,
      });
    });
  }, [id]);

  return (
    <div className="profile--header">
      <div className="left--header">
        <BsChatLeftDots size={20} />
        <h4>{title}</h4>
      </div>
      <div className="right--header">
        {artisan.profile_photo ? (
          <img src={artisan.profile_photo} alt="" />
        ) : (
          <FaUserCircle size={40} />
        )}
        <p>{artisan.username}</p>
      </div>
    </div>
  );
}

export default ProfileHeader;
