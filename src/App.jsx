import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import "./styles/global.scss";
function App() {
  return (
    <main>
      <Hero />
      <Skill />
      <Projects />
    </main>
  );
}

export default App;
