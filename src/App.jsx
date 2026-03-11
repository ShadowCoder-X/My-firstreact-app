import "./App.css";
import Profilecard from "./ProfileCard";

function App() {
  // const userProfile = {
  //   name: "Alex",
  //   pic: profilePics,
  //   role: "Frontend Dev",
  //   bio: "Passionate about building beautiful user interfaces.",
  // };

  const users = [
    {
      id: 1,
      pic: "profilePics",
      role: "Frontend Dev",
      bio: "Passionate about building beautiful user interfaces.",
    },

    {
      id: 2,
      name: "Bello",
      pic: "profilePics",
      role: "Backend Dev",
      bio: "Passionate about building beautiful user interfaces.",
    },

    {
      id: 3,
      name: "Feyi",
      pic: "profilePics",
      role: "DevOps",
      bio: "Passionate about building beautiful user interfaces.",
    },
  ];

  return (
    <div>
      {/* {
        users.map[
          function (user, ind) {
            //console.log(user);
            return (
              <ProfileCard
                key={user.id}
                name={user.name}
                pic={user.pic}
                role={user.role}
                bio={user.bio}
              />
            );
          }]} */}

      {
        users.map[
          (user) => {
            return (
              <ProfileCard
                key={user.id}
                name={user.name}
                pic={user.pic}
                role={user.role}
                bio={user.bio}
              />
            );
          }
        ]
      }
      {/*<Profilecard
        name={userProfile.name}
        pic={userProfile.pic}
        role={userProfile.role}
        bio={userProfile.bio}
      /> */}
    </div>
  );
}

export default App;
