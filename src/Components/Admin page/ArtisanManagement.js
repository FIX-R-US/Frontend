import React from "react";
//import artisanData from "../../MOCK_DATA.json";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import "./Search.css";
import "./Management.css";
import { MdVerified } from "react-icons/md";
import axios from "axios";

function ArtisanManagement() {
  const [artisan, setArtisan] = useState([]);
  const [accountState, setAccountState] = useState(artisan);
  const [search, setSearch] = useState("");
  const filter = artisan.filter(
    (item) =>
      item.firstname.toLowerCase().includes(search) ||
      item.lastname.toLowerCase().includes(search) ||
      item.location.toLowerCase().includes(search) ||
      item.occupation.toLowerCase().includes(search)
  );
  const role = "artisan";
  useEffect(() => {
    axios
      .post("http://localhost:3001/data/getdata", { role })
      .then((data) => {
        // console.log(data.data)
        setArtisan(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleAccountToggle = (id) => {
    setAccountState((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return { ...item, isActive: !item.isActive };
        }
        return item;
      })
    );
  };

  const handlePaymentToggle = (id) => {
    setAccountState((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return { ...item, paymentMade: !item.paymentMade };
        }
        return item;
      })
    );
  };

  useEffect(() => {
    const currentDate = new Date();
    const paymentUpdate = accountState.map((item) => {
      const paymentDate = new Date(item.isActive);
      const timeDiff = currentDate - paymentDate;
      const daysDiff = timeDiff / (1000 * 3600 * 24);
      if (daysDiff >= 30) {
        return { ...item, paymentMade: false };
      }
      return item;
    });
    setAccountState(paymentUpdate);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="Table--container">
      <Container>
        <div className="sticky--container">
          <Form>
            <Form.Control
              placeholder="Search artisans"
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              className="my-3 sticky"
            />
          </Form>
        </div>
        <Table bordered hover responsive style={{ color: "#7200CC" }}>
          <thead>
            <tr>
              <th>Username</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Location</th>
              <th>Occupation</th>
              <th>isVerified</th>
              <th>paymentMade</th>
              <th>PaymentMade</th>
              <th>isActive</th>
              <th>isActive</th>
            </tr>
          </thead>
          <tbody>
            {filter.map((item) => (
              <tr key={item.id}>
                <td>{item.username}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>{item.location}</td>
                <td>{item.occupation}</td>
                <td>
                  {item.isVerified ? <MdVerified size={30} /> : "Not verified"}
                </td>
                <td>{item.paymentMade ? "Yes" : "No"}</td>
                <td>
                  {item.paymentMade ? (
                    <button
                      className="admin--btn"
                      onClick={() => handlePaymentToggle(item.id)}
                    >
                      Yes
                    </button>
                  ) : (
                    <button
                      className="admin--btn"
                      onClick={() => handlePaymentToggle(item.id)}
                    >
                      No
                    </button>
                  )}
                </td>
                <td>
                  {item.isActive ? (
                    <button
                      className="admin--btn"
                      onClick={() => handleAccountToggle(item.id)}
                    >
                      Deactivate
                    </button>
                  ) : (
                    <button
                      className="admin--btn"
                      onClick={() => handleAccountToggle(item.id)}
                    >
                      Activate
                    </button>
                  )}
                </td>
                <td>{item.isActive ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default ArtisanManagement;
