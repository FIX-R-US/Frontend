import React, { useRef } from "react";
import "./Registration.css";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../Components/Home page/Header";
import account from "../../Shared Utils/Login/createaccount.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function UserRegistration() {
  const navigate = useNavigate();
  const username = useParams().username;
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const contactRef = useRef();
  const locationRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstname = firstNameRef.current.value;
    const lastname = lastNameRef.current.value;
    const contact = contactRef.current.value;
    const location = locationRef.current.value;
    const isActive = "1";
    // console.log(firstName, lastName, contact, location)
    axios
      .post("http://localhost:3001/update/updateregister", {
        firstname,
        lastname,
        contact,
        location,
        isActive,
        username,
      })
      .then((data) => {
        console.log(data);
        toast.success('Account created Successfully')
        setTimeout(() => {
          navigate("/login");
        },[3000])
      });
  };
  return (
    <div className="form--container">
      <ToastContainer/>
      <div className="userAccount--left">
        <Header />
        <div className="userLeft--container">
          <div className="user--responsive">
            <img src={account} alt="" />
          </div>
          <form className="userAccount--form" onSubmit={handleSubmit}>
            <h2>Setup account</h2>
            <div className="userCreate--container">
              <div className="userCreate--field">
                <label htmlFor="firstname">Firstname</label>
                <input type="text" required ref={firstNameRef} id="firstname" />
              </div>
              <div className="userCreate--field">
                <label htmlFor="lastname">Lastname</label>
                <input type="text" required ref={lastNameRef} id="lastname" />
              </div>
              <div className="userCreate--field">
                <label htmlFor="contact">Contact</label>
                <input type="text" required id="contact" ref={contactRef} />
              </div>
              <div className="userCreate--field">
                <label htmlFor="location">Location</label>
                <input type="text" required id="location" ref={locationRef} />
              </div>
            </div>
            <div className="userCreate--btn">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="userAccount--right">
        <div className="userAccount--pic">
          <img src={account} alt="" />
        </div>
      </div>
    </div>
  );
}

export default UserRegistration;
