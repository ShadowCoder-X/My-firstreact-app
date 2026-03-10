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

export default Greeting;
