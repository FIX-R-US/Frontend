import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import "./ArtisanProfile.css";
import ProfileHeader from "../../Shared Utils/Pages/ProfileHeader";
import Container from "react-bootstrap/Container";
import dp from "./slide1.jpg";
import { useNavigate } from "react-router";
import axios from "axios";

function ArtisanProfile() {
  const navigate = useNavigate();
  const [review, setReviews] = useState([]);
  const [artisan, setArtisan] = useState(null);
  const id = localStorage.getItem("id");
  const user_id = id;
  useEffect(() => {
    const fetchDetails = async () => {
      await axios
        .post("http://localhost:3001/details/getuser", { id })
        .then((data) => {
          console.log(data.data[0]);
          setArtisan(data.data[0]);

          // console.log("aa:", artisan[0]);
        });
    };
    fetchDetails();
  }, [id]);
  useEffect(() => {
    axios
      .post("http://localhost:3001/review/display", { user_id })
      .then((data) => {
        // console.log(data.data)
        setReviews(data.data);
      })
      .catch((error) => console.log(error));
  }, [user_id]);

  return (
    <div className="profile--artisan-container">
      <Container>
        <ProfileHeader title={"Profile"} />
        <div className="whole--content">
          <div className="artisan--top">
            <div className="top--img">
              <img src={dp} alt="" />
            </div>
            <FaUserCircle size={100} className="profile--icon" />
          </div>
          <div className="artisan--down">
            {artisan && (
              <div className="artisan--middle">
                <h2>{artisan.fullname}</h2>
                <p className="p">{artisan.occupation}</p>
                <p className="p">{artisan.location}</p>
                <p className="p">{artisan.contact}</p>
                <p className="p">{artisan.Description}</p>
              </div>
            )}
            <button className="book--btn" onClick={() => navigate("bookings")}>
              Bookings
            </button>
            <div className="artisan--bottom">
              <h5>Reviews</h5>
              <div className="reveiwMap--container">
                {review.map((item, index) => (
                  <div key={index} className="review--map">
                    <FaUserCircle size={60} className="reviewMap--img" />
                    <div className="map--bottom">
                      <p>ANONYMOUS</p>
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
