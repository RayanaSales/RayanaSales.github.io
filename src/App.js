// App.js
import React from "react";
import "./assets/styles/App.css";
import Header from "./components/Header";
import About from "./components/About";
import TopSkills from "./components/TopSkills";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <TopSkills />
    </div>
  );
}

export default App;
