import React, { useRef, useState } from "react";
import ProfileHeader from "../../Shared Utils/Pages/ProfileHeader";
import Container from "react-bootstrap/Container";
import "./EditArtisanProfile.css";
import axios from "axios";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

function EditArtisanProfile() {
  const UsernameRef = useRef();
  const navigate = useNavigate();
  const FirstnameRef = useRef();
  const LastnameRef = useRef();
  const EmailRef = useRef();
  const ContactRef = useRef();
  const LocationRef = useRef();
  const DescriptionRef = useRef();
  const ProfilepicRef = useRef();
  const VideoRef = useRef();
  const id = localStorage.getItem("id");
  const [pic, setCert] = useState("");
  // const [showProfilePic, setShowProfilePic] = useState();

  const handleSave = (e) => {
    e.preventDefault();
    const username = UsernameRef.current.value;
    const firstname = FirstnameRef.current.value;
    const lastname = LastnameRef.current.value;
    const email = EmailRef.current.value;
    const contact = ContactRef.current.value;
    const location = LocationRef.current.value;
    const Description = DescriptionRef.current.value;
    const profile_photo = ProfilepicRef.current.files[0];
    const picture_videos = VideoRef.current.files[0];

    const send = async (inputs) => {
      await axios
        .post("http://localhost:3001/editp1/editartisanProfile", { inputs })
        .then((data) => {
          console.log(data);
          navigate("/login/artisan/home");
        })
        .catch((error) => console.log(error));
    };

    if (profile_photo !== undefined || profile_photo != null) {
      const storageRef = ref(
        storage,
        `/docs/profilepics(Artisans)/${profile_photo.name}` + username
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
                Description,
                profile_photo: url,
                picture_videos,
                id,
              };
              console.log("identity: ", id);
              send(values);
            })
            .catch((error) => {
              console.log(error);
            });
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
        Description,
        profile_photo,
        picture_videos,
        id,
      };
      send(values);
    }
  };

  return (
    <div className="artisanProfile--container">
      <Container>
        <ProfileHeader title={"Edit Profile"} />
        <form onSubmit={handleSave}>
          <div className="artisanProfile--content">
            <div className="artisanProfile--fields">
              <label>Username</label>
              <input type="text" ref={UsernameRef} />
            </div>
            <div className="artisanProfile--fields">
              <label>Firstname</label>
              <input type="text" ref={FirstnameRef} />
            </div>
            <div className="artisanProfile--fields">
              <label>Lastname</label>
              <input type="text" ref={LastnameRef} />
            </div>
            <div className="artisanProfile--fields">
              <label>Email</label>
              <input type="email" ref={EmailRef} />
            </div>
            <div className="artisanProfile--fields">
              <label>Contact</label>
              <input type="phone" ref={ContactRef} />
            </div>
            <div className="artisanProfile--fields">
              <label>Location</label>
              <input type="text" ref={LocationRef} />
            </div>
            <div className="artisanProfile--fields">
              <label>Description</label>
              <textarea ref={DescriptionRef} rows={3} cols={70} />
            </div>
            <div className="artisanProfile--fields">
              <label>Profile Picture</label>
              <input
                type="file"
                className="artisanFile--input"
                accept="image/*"
                ref={ProfilepicRef}
              />
            </div>
            <div className="artisanProfile--fields">
              <label>Upload works</label>
              <input
                type="file"
                className="artisanFile--input"
                multiple={true}
                accept="image/*"
                ref={VideoRef}
              />
            </div>
          </div>
          <div className="artisanProfile--btn">
            <button>Save</button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default EditArtisanProfile;
