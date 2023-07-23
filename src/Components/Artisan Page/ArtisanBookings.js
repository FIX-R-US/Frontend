import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import axios from "axios";

function ArtisanBookings() {
  const [books, setBookings] = useState([]);
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

  return (
    <div className="Table--container">
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
                  <button className="admin--btn">Accept</button>
                  <button className="admin--btn">Decline</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default ArtisanBookings;
