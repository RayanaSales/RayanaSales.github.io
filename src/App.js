// App.js
import React from "react";
import "./assets/styles/App.css";
import Header from "./components/Header";
import About from "./components/About";
import TopSkills from "./components/TopSkills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <TopSkills />
      <Footer />
    </div>
  );
}

export default App;
