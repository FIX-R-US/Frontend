import React from "react";
import { FaUserCircle } from "react-icons/fa";
import "./ArtisanProfile.css";
import ProfileHeader from "../../Shared Utils/Pages/ProfileHeader";
import Container from "react-bootstrap/Container";
import dp from "./slide1.jpg";
import { useNavigate } from "react-router";
import artisan from '../../MOCK_DATA.json'

function ArtisanProfile() {
  const navigate = useNavigate();
  const reviews = [
    {
      review: "Sammy does really great in programming. I strongly recommend. ",
    },
    {
      review: "Sammy does really great in programming. I strongly recommend. ",
    },
    {
      review: "Sammy does really great in programming. I strongly recommend. ",
    },
    {
      review: "Sammy does really great in programming. I strongly recommend. ",
    },
  ];
  return (
    <div className="profile--artisan-container">
      <Container>
        <ProfileHeader title={"Profile"} />
        <div className="whole--content">
          <div className="artisan--top">
            <div className="top--img">
              {/* {artisan[1].profile_photo ? <img src={artisan[1].profile_photo} alt=""/> : 
              <img src={dp} alt="" />} */}
              <img src={dp} alt="" />
            </div>
            {artisan[1].profile_photo ? <img src={artisan[1].profile_photo} alt="" className="profile--icon"/> : <FaUserCircle size={100} className="profile--icon" />}
          </div>
          <div className="artisan--down">
            <div className="artisan--middle">
              <h2>Samuel Nyame</h2>
              <p className="p">Electrician</p>
              <p className="p">Ayeduase, KNUST</p>
              <p className="p">0559389586</p>
              <p className="p">Description: ...</p>
            </div>
            <button className="book--btn" onClick={() => navigate("bookings")}>
              Bookings
            </button>
            <div className="artisan--bottom">
              <h5>Reviews</h5>
              <div className="reveiwMap--container">
                {reviews.map((item, index) => (
                  <div key={index} className="review--map">
                    {artisan[1].profile_photo ? <img src={artisan[1].profile_photo} alt="" className="reviewMap--img"/> : <FaUserCircle size={60} className="reviewMap--img" />}
                    {/* <FaUserCircle size={60} className="reviewMap--img" /> */}
                    <div className="map--bottom">
                      <p>@ username</p>
                      <p className="p2">{item.review}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ArtisanProfile;
