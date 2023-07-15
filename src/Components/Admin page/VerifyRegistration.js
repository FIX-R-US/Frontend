import React, { useEffect, useState } from "react";
//import verifyArtisanData from "../../MOCK_DATA.json";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import axios from "axios";
// import {MdVerified} from 'react-icons/md'

function VerifyRegistration() {
  const [artisan, setArtisan] = useState([]);
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

  return (
    <div className="Table--container">
      <Container className="mt-3">
        <Table bordered hover responsive style={{ color: "#7200CC" }}>
          <thead>
            <tr>
              <th>Username</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Location</th>
              <th>National ID</th>
              <th>Certificate</th>
              <th>Approve</th>
            </tr>
          </thead>
          <tbody>
            {artisan.map((item) => (
              <tr key={item.id}>
                <td>{item.username}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>{item.location}</td>
                <td>{item.profile_photo}</td>
                <td>{item.certificate}</td>
                <td>
                  <button className="admin--btn">Approve</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default VerifyRegistration;
