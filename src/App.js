import React, { useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";

function App() {
  const [name, setName] = useState("Simba");
  // const updateText = (e) => {
  //   setName(e.target.value);
  // };
  const guests = ["Simba", "Jessica", "Ernie"];
  return (
    <div className="App">
      <AboutMe />
      <p>{name}</p>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      {guests.map((guest) => (
        <h1>{guest}</h1>
      ))}
    </div>
  );
}

export default App;
