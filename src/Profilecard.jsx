import profilePics from "./assets/images/pic13.jpeg";

const Profilecard = () => {
  return (
    <div>
      <img src={profilePics} alt="profile image" className="profile-img" />
      <h3 className="name-tag"> Name: Omolade</h3>

      <p className="bio-tag"></p>
    </div>
  );
};

export default Profilecard;
