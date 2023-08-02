import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
// import Table from "react-bootstrap/Table";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-bootstrap/Modal";
import { BsFillTrash3Fill } from "react-icons/bs";
import Spinner from "react-bootstrap/Spinner";
import "./ArtisanBooking.css";
import Prompts from "../../Prompts";
import { CustomTable } from "../StyledComponents";

function ArtisanBookings() {
  const [books, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [agreedPrice, setAgreedPrice] = useState("");
  const [tableId, setTableId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  // console.log("table", tableId);
  const artisan_id = sessionStorage.getItem("id");
  const artisan_firstname = sessionStorage.getItem("firstname");
  const artisan_lastname = sessionStorage.getItem("lastname");
  // console.log("hello", books);
  useEffect(() => {
    axios
      .post(
        "https://fix-r-us-backend-1f9302e2f7be.herokuapp.com/hasbooked/book",
        { artisan_id }
      )
      .then((data) => {
        // console.log(data.data);
        setBookings(data.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [artisan_id]);

  const handleAcceptBooking = (booking) => {
    setTableId(booking.id);
    setSelectedBooking(booking);
  };

  const handleConfirmAccept = () => {
    if (!agreedPrice || isNaN(agreedPrice)) {
      toast.error("Please enter a valid agreed price.");
      return;
    }
    axios
      .post(
        "https://fix-r-us-backend-1f9302e2f7be.herokuapp.com/booking/accept",
        {
          accepted: true,
          agreedPrice,
          id: tableId,
        }
      )
      .then((data) => {
        console.log(data);
        setAgreedPrice(agreedPrice);
        setSelectedBooking(null);
      });

    const updatedBooking = {
      ...selectedBooking,
      agreedPrice: parseFloat(agreedPrice),
      accepted: true,
    };

    const updatedBookings = books.map((booking) =>
      booking.id === selectedBooking.id ? updatedBooking : booking
    );

    setBookings(updatedBookings);

    setTimeout(() => {
      toast.success(`Booking accepted. Agreed Price: ${agreedPrice}`);
    }, [2000]);

    // const accepted = true;
  };

  const handleCloseModal = () => {
    setSelectedBooking(null);
    setAgreedPrice("");
  };

  const handleDeclineBooking = (id) => {
    const updatedBookings = books.filter((item) => item.id !== id);
    axios
      .post(
        "https://fix-r-us-backend-1f9302e2f7be.herokuapp.com/book/deleted",
        { id }
      )
      .then((data) => {
        setShowModal2((prevShow) => !prevShow);
        console.log(data);
        setBookings(updatedBookings);
        toast.error(`Booking rejected`);
        setSelectedBooking(null);
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  const deleteAllBookings = () => {
    const deleteAll = books.filter((booking) => !booking.jobcompleted);
    //API call
    const jobcompleted = "1";
    if (jobcompleted) {
      axios
        .post("http://localhost:3001/workedbooks/clear", {
          jobcompleted,
          artisan_id,
        })
        .then((data) => {
          setBookings(deleteAll);
          console.log(data.data);
          setShowModal((prevState) => !prevState);
          toast.info("Bookings worked on deleted");
        });
    } else {
      return toast.info("Complete Jobs First");
    }
  };
  const handleCompleteClick = (item) => {
    axios
      .post(
        "https://fix-r-us-backend-1f9302e2f7be.herokuapp.com/completed/job",
        {
          artisan_firstname,
          artisan_lastname,
          agreedPrice: item.agreedPrice,
          email: item.email,
          jobcompleted: true,
          id: item.id,
        }
      )
      .then((data) => {
        console.log(data.data);
        const updatedBooking = books.map((booking) =>
          booking.id === item.id ? { ...booking, jobcompleted: true } : booking
        );
        setBookings(updatedBooking);
        console.log("hi");
      });
  };

  const hasAcceptedBooking = books.some((booking) => booking.accepted);

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

  const openModal = () => {
    setShowModal((prevShow) => !prevShow);
  };

  const openModal2 = () => {
    setShowModal2((prevShow) => !prevShow);
  };

  return (
    <div className="Table--container">
      <ToastContainer />
      <Prompts
        showModal={showModal}
        hideModal={openModal}
        title={"Delete all Completed Jobs"}
        message={"Do you want to delete all Jobs Completed?"}
        action={() => deleteAllBookings(books.id)}
      />
      <Container>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "#7200CC" }}>Bookings</h1>
        </div>
        {books.length > 0 && hasAcceptedBooking && (
          <div className="bin--container">
            <BsFillTrash3Fill
              size={21}
              className="trashcan"
              onClick={openModal}
            />
          </div>
        )}
        <CustomTable bordered hover responsive>
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Location</th>
              <th>Action</th>
              <th>Completion Status</th>
            </tr>
          </thead>
          <tbody>
            {books.map((item) => (
              <tr key={item.id}>
                {
                  <Prompts
                    showModal={showModal2}
                    hideModal={openModal2}
                    title={"Decline booking"}
                    message={"Are you sure you want to decline booking?"}
                    action={() => handleDeclineBooking(item.id)}
                  />
                }
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>0{item.contact}</td>
                <td>{item.location}</td>
                <td style={{ display: "flex", gap: "10px" }}>
                  {item.accepted ? (
                    <span>Agreed Price: {item.agreedPrice}</span>
                  ) : (
                    <>
                      <button
                        className="admin--btn"
                        onClick={() => handleAcceptBooking(item)}
                      >
                        Accept
                      </button>
                      <button className="admin--btn" onClick={openModal2}>
                        Decline
                      </button>
                    </>
                  )}
                </td>
                <td>
                  {item.accepted ? (
                    item.jobcompleted ? (
                      <span>Job Completed</span>
                    ) : (
                      <>
                        <button
                          className="admin--btn"
                          onClick={() => handleCompleteClick(item)}
                        >
                          Complete Job
                        </button>
                      </>
                    )
                  ) : (
                    <span>Not Accepetd</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </CustomTable>
        {/* </DivStyle> */}

        <Modal show={selectedBooking !== null} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Agree to the Booking</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Please enter the agreed price:</p>
            <input
              type="number"
              value={agreedPrice}
              onChange={(e) => setAgreedPrice(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <button className="modal--button" onClick={handleConfirmAccept}>
              Accept
            </button>
            <button className="modal--button" onClick={handleCloseModal}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}

export default ArtisanBookings;
