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
import { MdVerified } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "react-bootstrap/Spinner";
import Prompts from "../../Prompts";

function ArtisanProfile2() {
  const id = useParams().id;
  const artisan_id = id;

  const firstname = sessionStorage.getItem("firstname");
  const lastname = sessionStorage.getItem("lastname");
  const email = sessionStorage.getItem("email");
  const contact = sessionStorage.getItem("contact");
  const location = sessionStorage.getItem("location");
  const user_id = sessionStorage.getItem("id");
  const [pics, setPics] = useState([]); // for displaying pics

  const [artisan, setArtisan] = useState({
    username: "",
    id: "",
    profile_photo: "",
    occupation: "",
    contact: "",
    Description: "",
    firstname: "",
    lastname: "",
    location: "",
    email: "",
    isVerified: "",
  });
  const [review, setReviews] = useState([]);
  const [isRequested, setIsRequested] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .post(
        "https://fix-r-us-backend-1f9302e2f7be.herokuapp.com/bookings/check",
        { artisan_id, user_id }
      )
      .then((data) => {
        // console.log(data);
        if (data.data.length === 0) {
          setIsRequested(false);
        } else {
          setIsRequested(true);
        }
      });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let accepted = "1" || "0";
    axios
      .post(
        "https://fix-r-us-backend-1f9302e2f7be.herokuapp.com/accept/booked",
        {
          artisan_id,
          user_id,
          accepted,
        }
      )
      .then((data) => {
        // console.log("hi", data);
        if (data.data.length === 0) {
          setIsAccepted(false);
        } else {
          setIsAccepted(true);
        }
      });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const fetchDetails = async () => {
      await axios
        .post(
          "https://fix-r-us-backend-1f9302e2f7be.herokuapp.com/details/getuser",
          { id }
        )
        .then((data) => {
          // console.log(data.data[0]);
          setArtisan({
            username: data.data[0].username,
            id: data.data[0].id,
            profile_photo: data.data[0].profile_photo,
            occupation: data.data[0].occupation,
            contact: data.data[0].contact,
            Description: data.data[0].Description,
            firstname: data.data[0].firstname,
            lastname: data.data[0].lastname,
            location: data.data[0].location,
            email: data.data[0].email,
            isVerified: data.data[0].isVerified,
          });
          setIsLoading(false);

          // console.log("aa:", artisan[0]);
        });
    };
    fetchDetails();
  }, [id]);

  const handleBooking = async () => {
    setShowModal((prevShow) => !prevShow);
    setLoading(true);

    try {
      const request = "book";
      await axios
        .post(
          "https://fix-r-us-backend-1f9302e2f7be.herokuapp.com/book/booking",
          {
            artisan_id,
            user_id,
            request,
            firstname,
            lastname,
            email,
            contact,
            location,
            artisan_email: artisan.email,
          }
        )
        .then((data) => {
          console.log(data.data);
          setIsRequested(true);
          setLoading((prevLoad) => !prevLoad);
          toast.success("Booking Successful");
        });
    } catch (error) {
      console.error("Error sending booking request", error);
      setLoading((prevLoad) => !prevLoad);
      toast.error(error.message);
    }
  };
  const handleCancel = () => {
    const artisan_firstname = artisan.firstname;
    const artisan_lastname = artisan.firstname;
    const artisan_email = artisan.email;
    const user_firstname = firstname;
    const user_lastname = lastname;

    axios
      .post(
        "https://fix-r-us-backend-1f9302e2f7be.herokuapp.com/booking/cancel",
        {
          artisan_id,
          user_id,
          artisan_email,
          artisan_firstname,
          artisan_lastname,
          user_firstname,
          user_lastname,
        }
      )
      .then((data) => {
        console.log(data);
        toast.error(`Booking Cancelled`);
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };
  useEffect(() => {
    axios
      .post(
        "https://fix-r-us-backend-1f9302e2f7be.herokuapp.com/review/display",
        { artisan_id }
      )
      .then((data) => {
        // console.log(data.data)
        setReviews(data.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [artisan_id]);

  //displaying the pics
  useEffect(() => {
    axios
      .post("https://fix-r-us-backend-1f9302e2f7be.herokuapp.com/view/pic", {
        artisan_id,
      })
      .then((data) => {
        // console.log(data.data)
        setPics(data.data);
        setIsLoading(false);
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

  const openModal = () => {
    setShowModal((prevShow) => !prevShow);
  };

  if (isLoading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "90vh" }}
      >
        <Spinner animation="grow" role="status" style={{ color: "#7200CC" }}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  let load;
  if (loading) {
    load = (
      <Spinner
        as="span"
        animation="border"
        role="status"
        size="sm"
        aria-hidden="true"
      />
    );
  }

  return (
    <div className="profile--artisan-container">
      <ToastContainer />
      <Prompts
        showModal={showModal}
        hideModal={openModal}
        title={"Booking"}
        message={`Do you want to book ${artisan.firstname} ${artisan.lastname}?`}
        action={handleBooking}
      />
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
                <h2>
                  {`${artisan.firstname} ${artisan.lastname}`}{" "}
                  {artisan.isVerified ? (
                    <MdVerified size={20} color="#7200CC" />
                  ) : (
                    ""
                  )}
                </h2>
                <p className="p">{artisan.occupation}</p>
                <p className="p">{artisan.location}</p>
                <p className="p">0{artisan.contact}</p>
                <p className="p">{artisan.email}</p>
                <p className="p">{artisan.Description}</p>
              </div>
            )}
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              {isRequested ? (
                <button disabled className="book--btn">
                  Requested
                </button>
              ) : (
                <button onClick={openModal} className="book--btn">
                  Book {load}
                </button>
              )}

              {isRequested ? (
                <button className="book--btn" onClick={handleCancel}>
                  Cancel
                </button>
              ) : (
                ""
              )}
            </div>
            {review.length > 0 && (
              <div className="artisan--bottom">
                <h5>Reviews</h5>
                <div className="reveiwMap--container">
                  {review.map((item, index) => (
                    <div key={index} className="review--map">
                      {/* {artisan.profile_photo ? (
                        <img
                          src={artisan.profile_photo}
                          alt=""
                          className="reviewMap--img"
                        />
                      ) : (
                        <FaUserCircle size={60} className="reviewMap--img" />
                      )} */}
                      <div className="map--bottom">
                        <p style={{ color: "#7200CC" }}>@{item.username}</p>
                        <p className="p2">{item.review}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {pics.length > 0 && (
              <div className="works--container">
                <h5>Works</h5>
                <div className="upload--container">
                  {pics.map((works, index) => (
                    <div key={index}>
                      <img src={works.picture_video} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ArtisanProfile2;
