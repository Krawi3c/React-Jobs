const App = () => {
  const name = "Lukas";
  const x = 5;
  const y = 15;
  const names = ["Lukas", "Patricia", "Angelika"];
  const loggedIn = true;
  const styles = {
    color: "red",
    fontSize: "24px",
  };
  return (
    <>
      <div className="text-5xl">App</div>
      <p style={styles}>Hello {name}</p>
      <p>
        The sum of {x} and {y} is {x + y}
      </p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {loggedIn && <h1>Hello Member</h1>}
    </>
  );
};

export default App;
