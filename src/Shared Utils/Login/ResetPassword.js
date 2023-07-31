import React from "react";
import "./ResetPassword1.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import Header from "../../Components/Home page/Header";
import reset from "./email.png";
import axios from "axios";

function ResetPassword() {
  const navigate = useNavigate();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    console.log(email);
    axios
      .post(
        `https://fix-r-us-backend-1f9302e2f7be.herokuapp.com/resetpassword/forgetpassword`,
        { email }
      )
      .then((data) => {
        console.log(data);
        navigate(`/checkEmail/${email}`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="reset--container1">
      <div className="left--reset1">
        <Header />
        <div className="reset--fields1">
          <div className="reset1--responsive">
            <img src={reset} alt="" />
          </div>
          <form className="reset1" onSubmit={handleSubmit}>
            <div className="reset--textfield1">
              <h2>Forget your password?</h2>
              <p>
                Enter your registered email below to receive your password reset
                instructions.
              </p>
            </div>
            <div className="reset--inputfield1">
              <div className="reset--field1">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" ref={emailRef} required />
              </div>
            </div>
            <button className="reset--btn1">Send</button>
            <div className="back--link">
              <a href="/login">Back to login</a>
            </div>
          </form>
        </div>
      </div>
      <div className="right--reset1">
        <div className="reset--img1">
          <img src={reset} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
