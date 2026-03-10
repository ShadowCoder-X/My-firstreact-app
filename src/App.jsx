import "./App.css";
import Profilecard from "./ProfileCard";

function App() {
  const userProfile = {
    name: "Alex",
    role: "Frontend Dev",
    bio: "Passionate about building beautiful user interfaces.",
  };

  return (
    <div>
      <Profilecard
        name={userProfile.name}
        role={userProfile.role}
        bio={userProfile.bio}
      />
    </div>
  );
}

export default App;
