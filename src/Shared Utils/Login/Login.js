import React, { useRef, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";
import welcome from "./welcome.png";
import Header from "../../Components/Home page/Header";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const UsernameRef = useRef();
  const passwordRef = useRef();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = UsernameRef.current.value;
    const password = passwordRef.current.value;
    console.log(username, password);

    axios
      .post("http://localhost:3001/auth/login", { username, password })
      .then((data) => {
        //console.log(data);
        if (data.data.user.isActive === 0) {
          window.alert("you have been deactivated");
        } else {
          navigate(`${data.data.user.role}/home`);
          localStorage.setItem("username", data.data.user.username);
        }
      })
      .catch((error) => console.log(error));
  };

  const show = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="form--wrapper">
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
