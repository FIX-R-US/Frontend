import React, { useEffect, useRef, useState } from "react";
import "./Profile.css";
import Container from "react-bootstrap/Container";
import ProfileHeader from "../../Shared Utils/Pages/ProfileHeader";
import axios from "axios";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  // eslint-disable-next-line
  const [pic, setCert] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [artisan, setArtisan] = useState({
    username: "",
    id: "",
    profile_photo: "",
    firstname: "",
    lastname: "",
    contact: "",
    location: "",
    email: "",
  });

  useEffect(() => {
    const handlePost = async () => {
      await axios
        .post(
          "https://fix-r-us-backend-1f9302e2f7be.herokuapp.com/details/getuser",
          { id }
        )
        .then((data) => {
          // console.log(data.data);
          setArtisan({
            username: data.data[0].username,
            id: data.data[0].id,
            profile_photo: data.data[0].profile_photo,
            email: data.data[0].email,
            contact: data.data[0].contact,
            firstname: data.data[0].firstname,
            lastname: data.data[0].lastname,
            location: data.data[0].location,
          });
        });
    };
    handlePost();
  }, [id]);

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
        .post(
          "https://fix-r-us-backend-1f9302e2f7be.herokuapp.com/editp/editprofile",
          { inputs }
        )
        .then((data) => {
          console.log(data);
          setIsLoading((prevLoading) => !prevLoading);
          toast.success("Profile updated");
          setTimeout(() => {
            navigate("/login/user/home");
          }, [3000]);
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
              // eslint-disable-next-line
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
    <div className="profile--container">
      <ToastContainer />
      <Container>
        <ProfileHeader title={"Edit Profile"} />
        <form onSubmit={handleSave}>
          <div className="profile--content">
            <div className="profile--fields">
              <label>Username</label>
              <input
                type="text"
                ref={UsernameRef}
                placeholder={artisan.username}
              />
            </div>
            <div className="profile--fields">
              <label>Firstname</label>
              <input
                type="text"
                ref={FirstnameRef}
                placeholder={artisan.firstname}
              />
            </div>
            <div className="profile--fields">
              <label>Lastname</label>
              <input
                type="text"
                ref={LastnameRef}
                placeholder={artisan.lastname}
              />
            </div>
            <div className="profile--fields">
              <label>Email</label>
              <input type="email" ref={EmailRef} placeholder={artisan.email} />
            </div>
            <div className="profile--fields">
              <label>Contact</label>
              <input
                type="phone"
                ref={ContactRef}
                placeholder={artisan.contact}
              />
            </div>
            <div className="profile--fields">
              <label>Location</label>
              <input
                type="text"
                ref={LocationRef}
                placeholder={artisan.location}
              />
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
            <button onClick={() => setIsLoading(true)}>Save {load}</button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Profile;
