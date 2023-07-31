import React, { useRef, useState } from "react";
import ProfileHeader from "../../Shared Utils/Pages/ProfileHeader";
import Container from "react-bootstrap/Container";
import "./EditArtisanProfile.css";
import axios from "axios";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
  const id = sessionStorage.getItem("id");
  // eslint-disable-next-line
  const [pic, setCert] = useState("");
  const [isLoading, setIsLoading] = useState(false)

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
    // const picture_videos = VideoRef.current.files[0];

    const send = async (inputs) => {
      await axios
        .post("http://localhost:3001/editp1/editartisanProfile", { inputs })
        .then((data) => {
          console.log(data.data);
          setIsLoading(prevLoading => !prevLoading)
          toast.success('Profile updated')
          setTimeout(() => {
            navigate("/login/artisan/home");
          },[3000])
        })
        .catch((error) => {
          console.log(error)
          toast.error(error.message)
        });
    };

    if (profile_photo !== undefined && profile_photo != null) {
      const storageRef = ref(
        storage,
        `/docs/profilepics(Artisans)/${profile_photo.name}` + id
      );
      const uploadTask = uploadBytesResumable(storageRef, profile_photo);
      uploadTask
        .then(() => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((url) => {
              console.log(url);
              // eslint-disable-next-line
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
        id,
      };
      send(values);
    }
  };

  let load
  if(isLoading) {
   load = <Spinner as="span" animation="border" role="status" size="sm" aria-hidden="true" />
  }

  return (
    <div className="artisanProfile--container">
      <ToastContainer/>
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
          </div>
          <div className="artisanProfile--btn">
            <button onClick={()=>setIsLoading(true)}>Save {load}</button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default EditArtisanProfile;
