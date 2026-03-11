import "./App.css";
import profilePics from "./assets/image/pic13.jpeg";
import ProfileCard from "./ProfileCard";
import Button from "./Button";

function App() {
  const users = [
    {
      id: 1,
      name: "Mark",
      pic: profilePics,
      role: "Frontend Dev",
      bio: "Passionate about building beautiful user interfaces.",
    },

    {
      id: 2,
      name: "Bello",
      pic: profilePics,
      role: "Backend Dev",
      bio: "Passionate about building beautiful user interfaces.",
    },

    {
      id: 3,
      name: "Feyi",
      pic: profilePics,
      role: "DevOps",
      bio: "Passionate about building beautiful user interfaces.",
    },
  ];

  //const numbers = [1, 2, 3, 4, 5];
  const techSkills = ["HTML", "CSS", "REACT", "JAVASCRIPT"];

  return (
    <div>
      <Button>Load Users</Button>

      <ol listStyle>
        {techSkills.map((tech, index) => {
          return <li key={index}>{tech}</li>;
        })}
      </ol>

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

      {users.map((user) => {
        return (
          <ProfileCard
            key={user.id}
            name={user.name}
            pic={user.pic}
            {...user}
          />
        );
      })}

      <Button>Click Me</Button>

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
