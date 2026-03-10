import "./App.css";
import Button from "./Button";
import Greeting from "./Greeting";
import pic from "./assets/image/pic26.jpeg";

//Component 2 - Parent component
function App() {
  const firstName = "Omorh";
  const age = 28;
  // const now = new Date();
  // const year = now.getFullYear();
  // const isLoggedIn = true;

  return (
    <div>
      <Greeting name="Evangel" age="23" />
      <Greeting name="Mercy" age="25" />
      <Greeting name="Precious" age="28" />
      <h2>This is my application</h2>
      <Button name={firstName} age={age} />

      <img src={pic} alt="" width="600vw" height="600vh" />
    </div>
  );
}

export default App;

//       <h2 className="heading">Hello {firstName}!</h2>
//       <p>This year is {year}.</p>
//       <p>2 + 2 = {2 + 2}</p>

//       <Button />

//       <p>
//         Status:
//         {isLoggedIn ? "Welcome, you are already logged in" : "Please, log in"}
//       </p>
//       <Button />
