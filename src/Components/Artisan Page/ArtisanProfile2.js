import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import "./ArtisanProfile.css";
import ProfileHeader from "../../Shared Utils/Pages/ProfileHeader";
import Container from "react-bootstrap/Container";
import dp from "./slide1.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";

function ArtisanProfile2() {
  const id = useParams().id;
  const [artisan, setArtisan] = useState(null);
  const [isRequested, setIsRequested] = useState(false);

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
  // const filter = artisan.filter(
  //   (item) =>
  //     item.occupation.toLowerCase().includes() ||
  //     item.location.toLowerCase().includes()
  // );

  const handleBooking = async () => {
    try {
      await axios.post("http://localhost:3001/book/booking", {
        id: artisan.id,
        request: "book",
      });
      setIsRequested(true);
    } catch (error) {
      console.error("Error sending booking request", error);
    }
  };
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
                {reviews.map((item, index) => (
                  <div key={index} className="review--map">
                    <FaUserCircle size={60} className="reviewMap--img" />
                    <div className="map--bottom">
                      <p>@ </p>
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
