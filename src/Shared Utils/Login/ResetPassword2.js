import React, { useRef, useState } from "react";
import "./ResetPassword2.css";
import Header from "../../Components/Home page/Header";
import { HiEye, HiEyeOff } from "react-icons/hi";
import reset from "./reset.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ResetPassword2() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const email = useParams().email;
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const handleShow = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleclick = (e) => {
    e.preventDefault();
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      toast.error("Passwords don't match");
    } else {
      axios
        .post(
          `https://fix-r-us-backend-1f9302e2f7be.herokuapp.com/newpassword/resetpassword`,
          {
            email,
            password,
          }
        )
        .then((data) => {
          toast.success("Password Changed");
          console.log(data);
          setTimeout(() => {
            navigate("/login");
          },[3000])
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="reset--container">
      <ToastContainer />
      <div className="left--reset">
        <Header />
        <div className="reset--fields">
          <div className="reset--responsive">
            <img src={reset} alt="" />
          </div>
          <form className="reset">
            <div className="reset--textfield">
              <h2>Change Password</h2>
              <p>Please change password to complete login process</p>
            </div>
            <div className="reset--inputfield">
              <div className="reset--field">
                <label>New Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your new password"
                  ref={passwordRef}
                />
                {showPassword ? (
                  <HiEyeOff className="show--eye" onClick={handleShow} />
                ) : (
                  <HiEye className="show--eye" onClick={handleShow} />
                )}
              </div>
              <div className="reset--field">
                <label>Confirm Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm new password"
                  ref={confirmPasswordRef}
                />
                {showPassword ? (
                  <HiEyeOff className="show--eye" onClick={handleShow} />
                ) : (
                  <HiEye className="show--eye" onClick={handleShow} />
                )}
              </div>
            </div>
            <button className="reset--btn" onClick={handleclick}>
              Change Password
            </button>
          </form>
        </div>
      </div>
      <div className="right--reset">
        <div className="reset--img">
          <img src={reset} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ResetPassword2;
