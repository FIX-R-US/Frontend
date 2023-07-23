import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import axios from "axios";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button";

function ArtisanBookings() {
  const [books, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null)
  const [agreedPrice, setAgreedPrice] = useState('')
  const user_id = localStorage.getItem("id");

  useEffect(() => {
    axios
      .post("http://localhost:3001/hasbooked/book", { user_id })
      .then((data) => {
        // console.log(data.data)
        setBookings(data.data);
      })
      .catch((error) => console.log(error));
  }, [user_id]);

  const handleAcceptBooking = (booking) => {
    setSelectedBooking(booking)
  }

  const handleConfirmAccept = () => {
    if(!agreedPrice || isNaN(agreedPrice)){
      toast.error('Please enter a valid agreed price.')
      return
    }

     // Update the agreed price for the selected booking.
    const updatedBooking = {...selectedBooking, agreedPrice: parseFloat(agreedPrice), status: 'Accepted'}

    // Find the booking with the given bookingId in the 'books' array.
    const updatedBookings = books.map((booking) => (
      booking.id === selectedBooking.id ? updatedBooking : booking
    ))

    // Update the state with the updated 'books' array.
    setBookings(updatedBookings)

    // Show a toast notification to confirm acceptance status and agreed price.
    toast.success(`Booking ${selectedBooking.id} accepted. Agreed Price: ${agreedPrice}`)

    // Clear the selected booking and agreed price after confirmation.
    setSelectedBooking(null)
    setAgreedPrice('')
  }

  const handleCloseModal = () => {
    setSelectedBooking(null)
    setAgreedPrice('')
  }

  const handleDeclineBooking = (bookingId) => {
    // Remove the booking with the given bookingId from the 'books' array.
    const updatedBookings = books.filter((booking) => booking.id !== bookingId)

    setBookings(updatedBookings)

    toast.error(`Booking ${bookingId} rejected`)

    // Clear the selected booking after rejection.
    setSelectedBooking(null)
  }


  return (
    <div className="Table--container">
      <ToastContainer/>
      <Container>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "#7200CC" }}>Bookings</h1>
        </div>
        <Table bordered hover responsive style={{ color: "#7200CC" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((item) => (
              <tr key={item.id}>
                <td>{item.firstname} {item.lastname}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>{item.location}</td>
                <td style={{ display: "flex", gap: "10px" }}>
                  {item.status === 'Accepted' ? (<span>Agreed Price: {item.agreedPrice} cedis</span>) : (
                  <>
                    <button className="admin--btn" 
                    onClick={() => handleAcceptBooking(item)}>
                      Accept
                    </button>
                    <button className="admin--btn" 
                    onClick={() => handleDeclineBooking(item.id)}>
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
          <Button variant="primary" onClick={handleConfirmAccept}>
            Accept
          </Button>
        </Modal.Footer>
      </Modal>
      </Container>
    </div>
  );
}

export default ArtisanBookings;
