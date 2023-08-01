import React, { useRef, useState } from "react";
import "./CreateAccount.css";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Home page/Header";
import account from "./createaccount.png";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "react-bootstrap/Spinner";

function CreateAccount() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const roleRef = useRef();

  const handleProceed = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    const role = roleRef.current.value;
    console.log(username, email, password, confirmPassword, role);
    if (password !== confirmPassword) {
      setIsLoading((prevLoad) => !prevLoad);
      toast.error("Passwords do not match");
    } else {
      axios
        .post(
          "https://fix-r-us-backend-1f9302e2f7be.herokuapp.com/username/checkUser",
          { username, email }
        )
        .then((data) => {
          if (data.data.length != 0) {
            setIsLoading((prevLoad) => !prevLoad);
            toast.error("username or email exists");
          } else {
            axios
              .post(
                "https://fix-r-us-backend-1f9302e2f7be.herokuapp.com/auth1/register1",
                {
                  username,
                  email,
                  password,
                  role,
                }
              )
              .then((data) => {
                console.log(data);
                setTimeout(() => {
                  navigate(`${role}/${username}`);
                }, [3000]);
              })
              .catch((error) => console.log(error));
          }
        })
        .catch((error) => console.log(error));
    }
  };

  let load;
  if (isLoading) {
    load = (
      <Spinner
        as="span"
        animation="border"
        role="status"
        size="sm"
        aria-hidden="true"
      />
    );
  }

  return (
    <div className="container--account">
      <ToastContainer />
      <div className="account--container">
        <div className="account--left">
          <Header />
          <div className="left--container">
            <div className="account--responsive">
              <img src={account} alt="" />
            </div>
            <form className="account--form" onSubmit={handleProceed}>
              <h2>Create an account</h2>
              <div className="create--container">
                <div className="create--field">
                  <label htmlFor="username">Username</label>
                  <input type="text" required ref={usernameRef} id="username" />
                </div>
                <div className="create--field">
                  <label htmlFor="email">Email</label>
                  <input type="email" required ref={emailRef} id="email" />
                </div>
                <div className="create--field">
                  <label htmlFor="password">Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    id="password"
                    ref={passwordRef}
                  />
                  {showPassword ? (
                    <HiEyeOff
                      className="create--eye"
                      onClick={() => setShowPassword((prevShow) => !prevShow)}
                    />
                  ) : (
                    <HiEye
                      className="create--eye"
                      onClick={() => setShowPassword((prevShow) => !prevShow)}
                    />
                  )}
                </div>
                <div className="create--field">
                  <label htmlFor="confPassword">Confirm Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    id="confPassword"
                    ref={confirmPasswordRef}
                  />
                  {showPassword ? (
                    <HiEyeOff
                      className="create--eye"
                      onClick={() => setShowPassword((prevShow) => !prevShow)}
                    />
                  ) : (
                    <HiEye
                      className="create--eye"
                      onClick={() => setShowPassword((prevShow) => !prevShow)}
                    />
                  )}
                </div>
                <div className="create--field">
                  <label htmlFor="role">Select Role</label>
                  <select required ref={roleRef} id="role">
                    <option value="artisan">Artisan</option>
                    <option value="user">User</option>
                  </select>
                </div>
              </div>
              <div className="create--btn">
                <button onClick={() => setIsLoading(true)}>
                  Continue {load}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="account--right">
          <div className="account--pic">
            <img src={account} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
