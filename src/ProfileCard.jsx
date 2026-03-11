//import React from "react";
import ProfilePics from "./assets/image/pic13.jpeg";

const ProfileCard = (name, role, pic, bio) => {
  //console.log(props);
  //const { name, role, pic, bio } = props;

  return (
    <div className="profile">
      <div className="profile-card">
        {/* Profile-pix */}
        <div className="img">
          <img src={pic} alt={name} className="profile-img" />
        </div>

        <h3 className="name-tag"> Name: {name}</h3>

        <p className="role-tag"> Bio: {role}</p>

        <p className="bio-tag"> Bio: {bio}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
