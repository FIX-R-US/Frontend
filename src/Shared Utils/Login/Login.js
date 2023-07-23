import React, { useRef, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";
import welcome from "./welcome.png";
import Header from "../../Components/Home page/Header";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const UsernameRef = useRef();
  const passwordRef = useRef();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = UsernameRef.current.value;
    const password = passwordRef.current.value;
    //console.log(username, password);

    axios
      .post("http://localhost:3001/auth/login", { username, password })
      .then((data) => {
        sessionStorage.setItem("user", JSON.stringify(data.data.user));
        console.log(data);
        if (data.data.user.isActive === 0) {
          toast.error("Account deactivated");
        } else {
          toast.success("Login successful");
          setTimeout(() => {
            navigate(`${data.data.user.role}/home`);
          }, [5000]);
          JSON.stringify(
            sessionStorage.setItem("username", data.data.user.username)
          );
          JSON.stringify(sessionStorage.setItem("id", data.data.user.id));
          JSON.stringify(
            sessionStorage.setItem("firstname", data.data.user.firstname)
          );
          JSON.stringify(
            sessionStorage.setItem("lastname", data.data.user.lastname)
          );
          JSON.stringify(sessionStorage.setItem("email", data.data.user.email));
          JSON.stringify(
            sessionStorage.setItem("contact", data.data.user.contact)
          );
          JSON.stringify(
            sessionStorage.setItem("location", data.data.user.location)
          );
        }
      })
      .catch((error) => {
        let errorMessage = "An error occurred during login";
        if (error.response && error.response.data) {
          if (error.response.data.message) {
            errorMessage = error.response.data.message;
          } else if (error.response.data.username) {
            errorMessage = error.response.data.username;
          } else if (error.response.data.password) {
            errorMessage = error.response.data.password;
          }
        }
        toast.error(errorMessage);
        console.log(error);
      });
  };

  const show = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="form--wrapper">
      <ToastContainer />
      <div className="login--left">
        <Header />
        <div className="login--fields">
          <div className="responsive">
            <img src={welcome} alt="" />
          </div>
          <form className="login--form" onSubmit={handleSubmit} id="login">
            <div className="text--container">
              <h2>Welcome to FIX-R-US!</h2>
              <p>Kindly log in to get started</p>
            </div>
            <div className="fields--container">
              <div className="fields">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  placeholder="Enter your username here"
                  ref={UsernameRef}
                  id="username"
                  required
                />
              </div>
              <div className="fields">
                <label htmlFor="password">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password here"
                  ref={passwordRef}
                  id="password"
                  required
                />
                {showPassword ? (
                  <HiEyeOff className="show1" onClick={show} />
                ) : (
                  <HiEye className="show1" onClick={show} />
                )}
              </div>
            </div>
            <div className="btn--container">
              <button className="login--btn">Log In</button>
              <div className="links">
                <a href="/forgotPassword" className="login--link">
                  Forgotten Password?
                </a>
                <p className="p-tag">Don't have an account?</p>
                <a href="/createAccount" className="login--link">
                  Create Account
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="login--right">
        <div className="login--img">
          <img src={welcome} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
