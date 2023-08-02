import React from "react";
import Container from "react-bootstrap/Container";
// import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import "./Search.css";
import "./Management.css";
import { MdVerified } from "react-icons/md";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner'
import { CustomTable } from "../StyledComponents";

function ArtisanManagement() {
  const [artisan, setArtisan] = useState([]);
  const [accountState, setAccountState] = useState(artisan);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true)
  const filter = artisan.filter((item) => {
    const firstNameLower = item.firstname ? item.firstname.toLowerCase() : '';
    const lastNameLower = item.lastname ? item.lastname.toLowerCase() : '';
    const locationLower = item.location ? item.location.toLowerCase() : '';
    const occupationLower = item.occupation ? item.occupation.toLowerCase() : '';
    const searchLower = search ? search.toLowerCase() : '';
  
    return (
      firstNameLower.includes(searchLower) ||
      lastNameLower.includes(searchLower) ||
      locationLower.includes(searchLower) ||
      occupationLower.includes(searchLower)
    );
  });
  
  const role = "artisan";
  useEffect(() => {
    axios
      .post("https://fix-r-us-backend-1f9302e2f7be.herokuapp.com/data/getdata", { role })
      .then((data) => {
        // console.log(data.data)
        setArtisan(data.data);
        setIsLoading(false)
      })
      .catch((error) => console.log(error));
  }, []);

  const handleAccountToggle = (id) => {
    axios.post("https://fix-r-us-backend-1f9302e2f7be.herokuapp.com/isactive/active", { id }).then((data) => {
      console.log(data);
      setArtisan((prevState) =>
        prevState.map((item) => {
          if (item.id === id) {
            return { ...item, isActive: !item.isActive };
          }
          // console.log(item.id);
          return item;
        })
      );
    });
  };

  const handlePaymentToggle = (id) => {
    axios.post("https://fix-r-us-backend-1f9302e2f7be.herokuapp.com/haspaid/paid", { id }).then((data) => {
      console.log(data);
      setArtisan((prevState) =>
        prevState.map((item) => {
          if (item.id === id) {
            return { ...item, paymentMade: !item.paymentMade };
          }
          return item;
        })
      );
    });
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
          <CustomTable bordered hover responsive>
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
                {/* <th>paymentMade</th> */}
                <th>PaymentMade</th>
                <th>isActive</th>
                {/* <th>isActive</th> */}
              </tr>
            </thead>
            <tbody>
              {filter.map((item) => (
                <tr key={item.id}>
                  <td>{item.username}</td>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.email}</td>
                  <td>0{item.contact}</td>
                  <td>{item.location}</td>
                  <td>{item.occupation}</td>
                  <td>
                    {item.isVerified ? <MdVerified size={40} color="#7200CC"/> : "Not verified"}
                  </td>
                  {/* <td>{item.paymentMade ? "Yes" : "No"}</td> */}
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
                  {/* <td>{item.isActive ? "Yes" : "No"}</td> */}
                </tr>
              ))}
            </tbody>
          </CustomTable>
      </Container>
    </div>
  );
}

export default ArtisanManagement;
