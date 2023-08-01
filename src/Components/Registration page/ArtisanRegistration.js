import React, { useRef, useState } from "react";
import "./Registration.css";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../Components/Home page/Header";
import account from "../../Shared Utils/Login/createaccount.png";
import axios from "axios";
import { storage } from "../../firebaseConfig.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Spinner from "react-bootstrap/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ArtisanRegistration() {
  const navigate = useNavigate();
  const username = useParams().username;
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const contactRef = useRef();
  const locationRef = useRef();
  const occupationRef = useRef();
  const certificateRef = useRef();
  const nationalIDRef = useRef();
  // eslint-disable-next-line
  const [file, setFile] = useState();
  const [cert, setCert] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [demoId, setDemoId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const firstname = firstNameRef.current.value;
    const lastname = lastNameRef.current.value;
    const contact = contactRef.current.value;
    const location = locationRef.current.value;
    const occupation = occupationRef.current.value;
    const certificate = certificateRef.current.files[0];
    const nationalID = nationalIDRef.current.files[0];
    const isActive = "1";

    console.log(nationalID);

    ///upload to firebase

    if (certificate !== undefined || certificate !== null) {
      const storageRef = ref(
        storage,
        `/docs/certificate/${certificate}` + username
      );
      await uploadBytesResumable(storageRef, certificate).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          // console.log("url:",
          setCert(url);
          console.log(cert);
          // console.log("mmm: ", cert);
        });
      });
    }

    if (nationalID !== undefined || nationalID !== null) {
      const storageRef = ref(
        storage,
        `/docs/nationalID/${nationalID.name}` + username
      );
      await uploadBytesResumable(storageRef, nationalID).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          // console.log("url:",
          setDemoId(url);
          console.log("hello", demoId);
          // console.log("mmm: ", cert);
        });
      });
    }

    if (cert && demoId) {
      setTimeout(() => {
        axios
          .post(
            "https://fix-r-us-backend-1f9302e2f7be.herokuapp.com/update/updateregister",
            {
              firstname,
              lastname,
              contact,
              location,
              occupation,
              certificate: cert ? cert : "",
              nationalID: demoId,
              isActive,
              username,
            }
          )
          .then((data) => {
            console.log("hi:", data);
            console.log("Hello", certificate);
            // console.log("Hello", picture_video);
            // console.log("Hello", location);
            setIsLoading((prevLoad) => !prevLoad);
            toast.success("Account created Succesfully");
            setTimeout(() => {
              navigate(`/login`);
            }, [3000]);
          })
          .catch((error) => {
            console.log(error);
            setIsLoading((prevLoad) => !prevLoad);
            toast.error(error.message);
          });
      }, 3000);
    }
    if (demoId) {
      axios
        .post(
          "https://fix-r-us-backend-1f9302e2f7be.herokuapp.com/update/updateregister",
          {
            firstname,
            lastname,
            contact,
            location,
            occupation,
            certificate,
            nationalID: demoId,
            isActive,
            username,
          }
        )
        .then((data) => {
          console.log("hi:", data);
          console.log("Hello", nationalID);
          // console.log("Hello", picture_video);
          // console.log("Hello", location);
          setIsLoading((prevLoad) => !prevLoad);
          toast.success("Account created Succesfully");
          setTimeout(() => {
            navigate(`/login`);
          }, [3000]);
        })
        .catch((error) => {
          console.log(error);
          // setIsLoading((prevLoad) => !prevLoad);
          // toast.error(error.message);
        });
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
    <div className="artisanForm--container">
      <ToastContainer />
      <div className="artisanAccount--left">
        <Header />
        <div className="artisanLeft--container">
          <div className="artisan--responsive">
            <img src={account} alt="" />
          </div>
          <form className="artisanAccount--form" onSubmit={handleSubmit}>
            <h2>Setup account</h2>
            <div className="artisanCreate--container">
              <div className="artisanCreate--field">
                <label htmlFor="firstname">Firstname</label>
                <input type="text" required ref={firstNameRef} id="firstname" />
              </div>
              <div className="artisanCreate--field">
                <label htmlFor="lastname">Lastname</label>
                <input type="text" required ref={lastNameRef} id="lastname" />
              </div>
              <div className="artisanCreate--field">
                <label htmlFor="contact">Contact</label>
                <input type="number" required id="contact" ref={contactRef} />
              </div>
              <div className="artisanCreate--field">
                <label htmlFor="location">Location</label>
                <input type="text" required id="location" ref={locationRef} />
              </div>
              <div className="artisanCreate--field">
                <label htmlFor="occupation">Occupation</label>
                <select ref={occupationRef} required>
                  <option value="Electrician">Electrician</option>
                  <option value="Carpenter">Carpenter</option>
                  <option value="Plumber">Plumber</option>
                  <option value="Hairdresser">Hairdresser</option>
                  <option value="Barber">Barber</option>
                  <option value="Cobbler">Cobbler</option>
                  <option value="Painter">Painter</option>
                </select>
              </div>
              <div className="artisanCreate--field">
                <label htmlFor="nationalid">NationalID</label>
                <input
                  type="file"
                  id="nationalid"
                  ref={nationalIDRef}
                  onChange={(e) => setFile(e.target.files)}
                  className="file--input"
                  required
                />
              </div>
              <div className="artisanCreate--field">
                <label htmlFor="certificate">Certificate(if any)</label>
                <input
                  type="file"
                  id="certificate"
                  ref={certificateRef}
                  onChange={(e) => setFile(e.target.files)}
                  multiple={true}
                  className="file--input"
                />
              </div>
            </div>
            <div className="artisanCreate--btn">
              {demoId ? (
                <button onClick={() => setIsLoading(true)}>Submit</button>
              ) : (
                <button onClick={() => setIsLoading(true)}>Save {load}</button>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="artisanAccount--right">
        <div className="artisanAccount--pic">
          <img src={account} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ArtisanRegistration;
