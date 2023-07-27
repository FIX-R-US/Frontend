import React, { useRef, useState } from "react";
import "./Registration.css";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../Components/Home page/Header";
import account from "../../Shared Utils/Login/createaccount.png";
import axios from "axios";
import { storage } from "../../firebaseConfig.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function ArtisanRegistration() {
  const navigate = useNavigate();
  const username = useParams().username;
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const contactRef = useRef();
  const locationRef = useRef();
  const occupationRef = useRef();
  const certificateRef = useRef();
  // const picRef = useRef();
  // const [pic, setPic] = useState("");
  const [file, setFile] = useState();
  const [cert, setCert] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const firstname = firstNameRef.current.value;
    const lastname = lastNameRef.current.value;
    const contact = contactRef.current.value;
    const location = locationRef.current.value;
    const occupation = occupationRef.current.value;
    const certificate = certificateRef.current.files[0];
    // const picture_video = certificateRef.current.files[0];
    const isActive = "1";
    //console.log(firstname, lastname, contact, location, occupation);
    //console.log(file);

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
    // if (picture_video !== undefined || picture_video !== null) {
    //   const storageRef = ref(
    //     storage,
    //     `/docs/picture_video/${picture_video}` + username
    //   );
    //   await uploadBytesResumable(storageRef, picture_video).then((snapshot) => {
    //     getDownloadURL(snapshot.ref).then((img) => {
    //       // console.log("url:",
    //       setPic(img);
    //       console.log("mm: ", pic);
    //     });
    //   });
    // }
    if (cert) {
      setTimeout(() => {
        axios
          .post("http://localhost:3001/update/updateregister", {
            firstname,
            lastname,
            contact,
            location,
            occupation,
            certificate: cert ? cert : "",
            isActive,
            username,
          })
          .then((data) => {
            console.log("hi:", data);
            console.log("Hello", certificate);
            // console.log("Hello", picture_video);
            // console.log("Hello", location);

            navigate(`/login`);
          })
          .catch((error) => console.log(error));
      }, 3000);
    } else {
      axios
        .post("http://localhost:3001/update/updateregister", {
          firstname,
          lastname,
          contact,
          location,
          occupation,
          certificate,
          isActive,
          username,
        })
        .then((data) => {
          console.log("hi:", data);
          console.log("Hello", certificate);
          // console.log("Hello", picture_video);
          // console.log("Hello", location);

          navigate(`/login`);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="artisanForm--container">
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
                <input type="text" required id="contact" ref={contactRef} />
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
              {/* <div className="artisanCreate--field">
                <label htmlFor="projects">
                  Projects worked on(picture or video)
                </label>
                <input
                  type="file"
                  id="projects"
                  ref={picRef}
                  onChange={(e) => setFile(e.target.files)}
                  multiple={true}
                  className="file--input"
                />
              </div> */}
            </div>
            <div className="artisanCreate--btn">
              {cert ? <button>Submit</button> : <button>Save</button>}
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
