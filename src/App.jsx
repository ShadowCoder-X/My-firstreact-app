import "./App.css";
import Button from "./Button";

function Greeting(props) {
  console.log(props);

  return <h1>Hello, Greetings to you</h1>;
}

function App() {
  const firstName = "Omorh";
  const now = new Date();
  const year = now.getFullYear();
  const isLoggedIn = true;

  return (
    <div>
      <Greeting />
      //<h2 className="heading">Hello {firstName}!</h2>
      //<p>This year is {year}.</p>
      //<p>2 + 2 = {2 + 2}</p>
      //
      <Button />
      //
      <p>
        //Status: //
        {isLoggedIn ? "Welcome, you are already logged in" : "Please, log in"}
        //
      </p>
      <Button />
    </div>
  );
}

export default App;
