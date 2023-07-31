import React from "react";
import Header from "../../Components/Home page/Header";
import check from "./checkEmail.png";
import "./EmailPrompt.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function EmailPrompt() {
  const email = useParams().email;
  const handleclick = (e) => {
    e.preventDefault();
    console.log(email);
    axios
      .post("https://fix-r-us-backend-1f9302e2f7be.herokuapp.com/resetpassword/forgetpassword", { email })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="prompt--container">
      <div className="left--prompt">
        <Header />
        <div className="prompt--field">
          <div className="prompt--responsive">
            <img src={check} alt="" />
          </div>
          <div className="reset--prompt">
            <div className="prompt--textfield">
              <h2>Check your Email</h2>
              <p>
                An email has been sent to {email} with a link to reset
                your password. Please click on the link to continue.
              </p>
            </div>
            <div className="prompt--link">
              <p>
                Didn't receive link?{" "}
                <a href="#j" onClick={handleclick}>
                  Resend
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="right--prompt">
        <div className="prompt--img">
          <img src={check} alt="" />
        </div>
      </div>
    </div>
  );
}

export default EmailPrompt;
