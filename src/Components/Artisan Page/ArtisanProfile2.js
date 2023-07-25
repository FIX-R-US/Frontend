import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import "./ArtisanProfile.css";
import ProfileHeader from "../../Shared Utils/Pages/ProfileHeader";
import Container from "react-bootstrap/Container";
import electrician from "./slide1.jpg";
import plumber from "./plumber.jpg";
import hairdresser from "./hairdresser.jpg";
import carpenter from "./carpenter.jpg";
import cobbler from "./cobbler.jpg";
import painter from "./painter.jpg";
import barber from "./barber.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";

function ArtisanProfile2() {
  const id = useParams().id;
  const artisan_id = id;

  const firstname = sessionStorage.getItem("firstname");
  const lastname = sessionStorage.getItem("lastname");
  const email = sessionStorage.getItem("email");
  const contact = sessionStorage.getItem("contact");
  const location = sessionStorage.getItem("location");
  const user_id = sessionStorage.getItem("id");
  const [artisan, setArtisan] = useState({
    username: "",
    id: "",
    profile_photo: "",
    occupation: "",
    contact: "",
    Description: "",
    fullname: "",
    location: "",
  });
  const [review, setReviews] = useState([]);
  const [isRequested, setIsRequested] = useState(false);

  useEffect(() => {
    axios
      .post("http://localhost:3001/bookings/check", { artisan_id, user_id })
      .then((data) => {
        console.log(data);
        if (data.data.length === 0) {
          setIsRequested(false);
        } else {
          setIsRequested(true);
        }
      });
  }, []);
  useEffect(() => {
    const fetchDetails = async () => {
      await axios
        .post("http://localhost:3001/details/getuser", { id })
        .then((data) => {
          console.log(data.data[0]);
          setArtisan({
            username: data.data[0].username,
            id: data.data[0].id,
            profile_photo: data.data[0].profile_photo,
            occupation: data.data[0].occupation,
            contact: data.data[0].contact,
            Description: data.data[0].Description,
            fullname: data.data[0].fullname,
            location: data.data[0].location,
          });

          // console.log("aa:", artisan[0]);
        });
    };
    fetchDetails();
  }, [id]);
  // const filter = artisan.filter(
  //   (item) =>
  //     item.occupation.toLowerCase().includes() ||
  //     item.location.toLowerCase().includes()
  // );

  const handleBooking = async () => {
    try {
      const request = "book";
      await axios
        .post("http://localhost:3001/book/booking", {
          artisan_id,
          user_id,
          request,
          firstname,
          lastname,
          email,
          contact,
          location,
        })
        .then((data) => {
          console.log(data.data);
          setIsRequested(true);
        });
    } catch (error) {
      console.error("Error sending booking request", error);
    }
  };

  useEffect(() => {
    axios
      .post("http://localhost:3001/review/display", { artisan_id })
      .then((data) => {
        // console.log(data.data)
        setReviews(data.data);
      })
      .catch((error) => console.log(error));
  }, [artisan_id]);

  let coverPhoto;
  if (artisan.occupation === "Electrician") {
    coverPhoto = <img src={electrician} alt="" />;
  } else if (artisan.occupation === "Hairdresser") {
    coverPhoto = <img src={hairdresser} alt="" />;
  } else if (artisan.occupation === "Painter") {
    coverPhoto = <img src={painter} alt="" />;
  } else if (artisan.occupation === "Carpenter") {
    coverPhoto = <img src={carpenter} alt="" />;
  } else if (artisan.occupation === "Barber") {
    coverPhoto = <img src={barber} alt="" />;
  } else if (artisan.occupation === "Plumber") {
    coverPhoto = <img src={plumber} alt="" />;
  } else if (artisan.occupation === "Cobbler") {
    coverPhoto = <img src={cobbler} alt="" />;
  }

  return (
    <div className="profile--artisan-container">
      <Container>
        <ProfileHeader title={"Profile"} />
        <div className="whole--content">
          <div className="artisan--top">
            <div className="top--img">{coverPhoto}</div>
            {artisan.profile_photo ? (
              <img
                src={artisan.profile_photo}
                alt=""
                className="profile--icon"
              />
            ) : (
              <FaUserCircle size={100} className="profile--icon" />
            )}
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
            {isRequested ? (
              <button disable className="book--btn">
                Requested
              </button>
            ) : (
              <button onClick={handleBooking} className="book--btn">
                Book
              </button>
            )}
            <div className="artisan--bottom">
              <h5>Reviews</h5>
              <div className="reveiwMap--container">
                {review.map((item, index) => (
                  <div key={index} className="review--map">
                    {artisan.profile_photo ? (
                      <img
                        src={artisan.profile_photo}
                        alt=""
                        className="reviewMap--img"
                      />
                    ) : (
                      <FaUserCircle size={60} className="reviewMap--img" />
                    )}
                    <div className="map--bottom">
                      <p style={{ color: "#7200CC" }}>@{item.username}</p>
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

export default ArtisanProfile2;
