import React from "react";
import "./Profile.css";
import Container from "react-bootstrap/Container";
import ProfileHeader from "../../Shared Utils/Pages/ProfileHeader";

function Profile() {
  return (
    <div className="profile--container">
      <Container>
        <ProfileHeader title={"Edit Profile"} />
        <div className="profile--content">
          <div className="profile--fields">
            <label>Username</label>
            <input type="text" />
          </div>
          <div className="profile--fields">
            <label>Firstname</label>
            <input type="text" />
          </div>
          <div className="profile--fields">
            <label>Lastname</label>
            <input type="text" />
          </div>
          <div className="profile--fields">
            <label>Email</label>
            <input type="email" />
          </div>
          <div className="profile--fields">
            <label>Contact</label>
            <input type="phone" />
          </div>
          <div className="profile--fields">
            <label>Location</label>
            <input type="text" />
          </div>
        </div>
        <div className="profile--btn">
          <button>Save</button>
        </div>
      </Container>
    </div>
  );
}

export default Profile;
