import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import "./Search.css";
import "./Management.css";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner'
import { DivStyle } from "../StyledComponents";

function UserManagement() {
  const [search, setSearch] = useState("");
  const [artisan, setArtisan] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const filter = artisan.filter((item) => {
    const firstNameLower = item.firstname ? item.firstname.toLowerCase() : '';
    const lastNameLower = item.lastname ? item.lastname.toLowerCase() : '';
    const locationLower = item.location ? item.location.toLowerCase() : '';
    const searchLower = search ? search.toLowerCase() : '';
  
    return (
      firstNameLower.includes(searchLower) ||
      lastNameLower.includes(searchLower) ||
      locationLower.includes(searchLower) 
    );
  });
  

  const role = "user";
  useEffect(() => {
    axios
      .post("https://fix-r-us-backend-1f9302e2f7be.herokuapp.com/datauser/getuserdata", { role })
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
              placeholder="Search users"
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              className="my-3 sticky"
            />
          </Form>
        </div>
        <DivStyle>
          <Table bordered hover responsive>
            <thead>
              <tr>
                <th>Username</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Location</th>
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
                </tr>
              ))}
            </tbody>
          </Table>
        </DivStyle>
      </Container>
    </div>
  );
}

export default UserManagement;
