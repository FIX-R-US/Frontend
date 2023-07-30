import React, { useEffect } from "react";
import Select from "react-select";
import "./Review.css";
import { useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import ProfileHeader from "../../Shared Utils/Pages/ProfileHeader";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner'

function Review() {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  const [artisan, setArtisan] = useState([]);
  const username1 = sessionStorage.getItem("username");
  const options = artisan.map((item) => ({
    value: `${item.occupation}`,
    label: `${item.firstname} ${item.lastname}`,
    id: `${item.id}`,
    username: username1,
  }));

  const [selectedOption, setSelectedOption] = useState();
  const reviewRef = useRef();
  const role = "artisan";
  useEffect(() => {
    axios
      .post("http://localhost:3001/data/getdata", { role })
      .then((data) => {
        // console.log(data.data)
        setArtisan(data.data);
        setIsLoading(false)
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = reviewRef.current.value;
    const artisan_id = selectedOption.id;
    const username = username1;
    axios
      .post("http://localhost:3001/storereviews/reviews", {
        review,
        artisan_id,
        username,
      })
      .then((data) => {
        console.log(data);
        if (!selectedOption || review.trim() === "") {
          return;
        }
        // console.log(selectedOption, review);
      })
      .catch((error) => console.log(error));

    setShowModal((prevShow) => !prevShow);
    setSelectedOption(null);
    reviewRef.current.value = "";
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      padding: "5px",
      borderRadius: "5px",
      borderColor: "gray",
    }),
  };

  // const modalButton = {
  //   backgroundColor: "#7200CC",
  //   width: "25%",
  //   fontWeight: "600",
  //   border: "none",
  // };

  if(isLoading){
    return(
      <div className="d-flex justify-content-center align-items-center" style={{ height: "90vh" }}>
        <Spinner animation="grow" role="status" style={{color: '#7200CC'}}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    )
  }

  return (
    <div className="review--container">
      <Container>
        <ProfileHeader title={"Review"} />
        <div className="review--content">
          <form className="review" onSubmit={handleSubmit}>
            <div className="review--select">
              <Select
                options={options}
                defaultValue={selectedOption}
                placeholder="Search artisan"
                value={selectedOption}
                onChange={setSelectedOption}
                noOptionsMessage={() => "Artisan not found"}
                isSearchable
                isClearable
                styles={customStyles}
              />
            </div>
            <div className="review--textarea">
              <label htmlFor="review">Review</label>
              <textarea
                id="review"
                rows={8}
                cols={45}
                ref={reviewRef}
                placeholder="Type your reviews here..."
              />
            </div>
            <div className="review--btn">
              <button type="submit">Submit</button>
            </div>
          </form>
          <Modal
            show={showModal}
            onHide={() => setShowModal((prevshow) => !prevshow)}
          >
            <Modal.Header closeButton>
              <Modal.Title>Thanks for your review</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Your review has been submitted succesfully</p>
            </Modal.Body>
            <Modal.Footer>
              <button
                onClick={() => setShowModal((prevshow) => !prevshow)}
                className="modal--button"
              >
                Close
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      </Container>
    </div>
  );
}

export default Review;
