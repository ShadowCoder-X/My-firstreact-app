//import React from "react";
import profilePics from "./assets/image/pic13.jpeg";

const ProfileCard = () => {
  return (
    <div className="profile">
      <div className="profile-card">
        {/* Profile-pix */}
        <div className="img">
          <img src={profilePics} alt="profile image" className="profile-img" />
        </div>

        <h3 className="name-tag"> Name: Omolade</h3>

        <p className="bio-tag">
          Passionate about building beautiful user interfaces.
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
