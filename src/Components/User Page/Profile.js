import React, { useRef, useState } from "react";
import "./Profile.css";
import Container from "react-bootstrap/Container";
import ProfileHeader from "../../Shared Utils/Pages/ProfileHeader";
import axios from "axios";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

function Profile() {
  // const [showUsername, setShowUsername] = useState("Snipes");
  // const [showFirstname, setShowFirstname] = useState("Samuel");
  // const [showLastname, setShowLastname] = useState("Nyame");
  // const [showEmail, setShowEmail] = useState("samuelbaafi309@gmail.com");
  // const [showContact, setShowContact] = useState("0559389586");
  // const [showLocation, setShowLocation] = useState("Ayeduase, KNUST");
  // const [profilePic, setProfilePic] = useState();
  const UsernameRef = useRef();
  const FirstnameRef = useRef();
  const LastnameRef = useRef();
  const EmailRef = useRef();
  const ContactRef = useRef();
  const LocationRef = useRef();
  const ProfilepicRef = useRef();
  const id = sessionStorage.getItem("id");
  const navigate = useNavigate();
  const [pic, setCert] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    const username = UsernameRef.current.value;
    const firstname = FirstnameRef.current.value;
    const lastname = LastnameRef.current.value;
    const email = EmailRef.current.value;
    const contact = ContactRef.current.value;
    const location = LocationRef.current.value;
    const profile_photo = ProfilepicRef.current.files[0];

    const send = async (inputs) => {
      await axios
        .post("http://localhost:3001/editp/editprofile", { inputs })
        .then((data) => {
          console.log(data);
          navigate("/login/user/home");
        })
        .catch((error) => console.log(error));
    };

    // console.log("Saving profile data:", profileData);
    if (profile_photo !== undefined && profile_photo !== null) {
      const storageRef = ref(
        storage,
        `/docs/profilepics/${profile_photo.name}` + id
      );
      const uploadTask = uploadBytesResumable(storageRef, profile_photo);
      uploadTask
        .then(() => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((url) => {
              console.log(url);
              const profile_photo = pic !== undefined ? `${pic}` : null;

              const values = {
                username,
                firstname,
                lastname,
                email,
                contact,
                location,
                profile_photo: url,
                id,
              };
              console.log("identity: ", id);
              send(values);
              // setCert(url);
            })
            .catch((error) => {
              console.log(error);
            });
          console.log();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      const values = {
        username,
        firstname,
        lastname,
        email,
        contact,
        location,
        profile_photo,
        id,
      };
      send(values);
    }
  };

  return (
    <div className="profile--container">
      <Container>
        <ProfileHeader title={"Edit Profile"} />
        <form onSubmit={handleSave}>
          <div className="profile--content">
            <div className="profile--fields">
              <label>Username</label>
              <input type="text" ref={UsernameRef} />
            </div>
            <div className="profile--fields">
              <label>Firstname</label>
              <input type="text" ref={FirstnameRef} />
            </div>
            <div className="profile--fields">
              <label>Lastname</label>
              <input type="text" ref={LastnameRef} />
            </div>
            <div className="profile--fields">
              <label>Email</label>
              <input type="email" ref={EmailRef} />
            </div>
            <div className="profile--fields">
              <label>Contact</label>
              <input type="phone" ref={ContactRef} />
            </div>
            <div className="profile--fields">
              <label>Location</label>
              <input type="text" ref={LocationRef} />
            </div>
            <div className="profile--fields">
              <label>Profile Picture</label>
              <input
                type="file"
                className="userFile--input"
                accept="image/*"
                ref={ProfilepicRef}
              />
            </div>
          </div>
          <div className="profile--btn">
            <button>Save</button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Profile;
