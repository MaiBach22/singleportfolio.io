import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import "./styles/global.scss";
function App() {
  const [width, setWidth] = useState(0);
  console.log(width);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return (
    <main>
      <Hero width={width} />
      <Skill />
      <Projects width={width} />
    </main>
  );
}

export default App;
