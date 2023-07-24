import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ArtisanBookings() {
  const [books, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [agreedPrice, setAgreedPrice] = useState("");
  const artisan_id = sessionStorage.getItem("id");
  // console.log("hello", books);
  useEffect(() => {
    axios
      .post("http://localhost:3001/hasbooked/book", { artisan_id })
      .then((data) => {
        console.log(data.data);
        setBookings(data.data);
      })
      .catch((error) => console.log(error));
  }, [artisan_id]);

  // useEffect(() => {
  //   axios
  //     .post("http://localhost:3001/booking/refresh", { artisan_id })
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, [artisan_id]);

  const handleAcceptBooking = (booking) => {
    setSelectedBooking(booking);
  };

  const handleConfirmAccept = (id) => {
    if (!agreedPrice || isNaN(agreedPrice)) {
      toast.error("Please enter a valid agreed price.");
      return;
    }
    axios
      .post("http://localhost:3001/booking/accept", {
        accepted: true,
        agreedPrice,
        id,
      })
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

    toast.success(
      `Booking ${selectedBooking.id} accepted. Agreed Price: ${agreedPrice}`
    );

    // const accepted = true;
  };

  const handleCloseModal = () => {
    setSelectedBooking(null);
    setAgreedPrice("");
  };

  const handleDeclineBooking = (id) => {
    const updatedBookings = books.filter((item) => item.id !== item.id);
    axios
      .post("http://localhost:3001/book/deleted", { id })
      .then((data) => {
        console.log(data);
        setBookings(updatedBookings);
        toast.error(`Booking ${id} rejected`);
        setSelectedBooking(null);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="Table--container">
      <ToastContainer />
      <Container>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "#7200CC" }}>Bookings</h1>
        </div>
        <Table bordered hover responsive style={{ color: "#7200CC" }}>
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((item) => (
              <tr key={item.id}>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
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
                      <button
                        className="admin--btn"
                        onClick={() => handleDeclineBooking(item.id)}
                      >
                        Decline
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

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
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>

            {books.map((item) => (
              <Button
                variant="primary"
                onClick={() => handleConfirmAccept(item.id)}
              >
                Accept
              </Button>
            ))}
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}

export default ArtisanBookings;
