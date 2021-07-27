import React, { useState } from "react";
import "./App.css";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Input from "./components/Input";

function App() {
  const [name, setName] = useState("Simba");
  // const updateText = (e) => {
  //   setName(e.target.value);
  // };
  const guests = ["Simba", "Jessica", "Ernie"];
  return (
    <div className="App">
      <AboutMe name={name} />
      <Input name={name} setName={setName} />
      {/* <p>{name}</p> */}
      {guests.map((guest) => (
        <h1>{guest}</h1>
      ))}
    </div>
  );
}

export default App;
