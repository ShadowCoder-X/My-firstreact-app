import "./App.css";
import Button from "./Button";

//Component 1
function Greeting({ name, age }) {
  //const { name, age } = props;
  // console.log(props);
  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>I am {age} years old</p>
    </div>
  );
}

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
